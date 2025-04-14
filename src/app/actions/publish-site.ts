"use server";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import prisma from "@/lib/prisma";

const s3Client = new S3Client({
	region: process.env.AWS_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
	},
});

export async function publishSite(
	projectId: string,
	subdomain: string,
	pages: { [key: string]: string }
) {
	try {
		// Verify subdomain availability
		const existingSite = await prisma.publishedSite.findUnique({
			where: { subdomain },
		});

		if (existingSite && existingSite?.projectId !== projectId) {
			throw new Error("Subdomain is already taken");
		}

		let site = existingSite;

		if (!site?.projectId) {
			// Create PublishedSite entry
			site = await prisma.publishedSite.create({
				data: {
					projectId,
					subdomain,
				},
			});
		}

		// Upload files to S3
		const bucketName = process.env.AWS_S3_BUCKET_NAME!;
		try {
			// Upload each page's HTML
			for (const [pageName, html] of Object.entries(pages)) {
				const key =
					pageName === "index"
						? `${subdomain}/index.html`
						: `${subdomain}/${pageName}.html`;
				await s3Client.send(
					new PutObjectCommand({
						Bucket: bucketName,
						Key: key,
						Body: html,
						ContentType: "text/html",
					})
				);
			}
		} catch (s3Error) {
			console.error("S3 Error:", s3Error);
			// Rollback Prisma entry if S3 upload fails
			await prisma.publishedSite.delete({
				where: { id: site.id },
			});
			throw new Error("Failed to upload to S3");
		}

		return { success: true, message: "Site published successfully" };
	} catch (error) {
		console.error("Error publishing site:", error);
		throw new Error("Failed to publish site");
	}
}

export async function getPublishedSite(projectId: string) {
	try {
		const site = await prisma.publishedSite.findFirst({
			where: { projectId },
		});
		return site ? { subdomain: site.subdomain } : null;
	} catch (error) {
		console.error("Error fetching published site:", error);
		throw new Error("Failed to fetch published site");
	}
}
