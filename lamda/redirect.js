// lambda/redirect.js
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.handler = async (event) => {
	const request = event.Records[0].cf.request;
	const host = request.headers.host[0].value;
	const subdomain = host.split(".")[0];
	const path =
		request.uri === "/" ? "index.html" : request.uri.replace(/^\//, "");

	const s3Key = `${subdomain}/${
		path.endsWith(".html") || path === "index.html" ? path : path + ".html"
	}`;

	try {
		const s3Object = await s3
			.getObject({
				Bucket: process.env.S3_BUCKET_NAME,
				Key: s3Key,
			})
			.promise();

		return {
			status: "200",
			statusDescription: "OK",
			headers: {
				"content-type": [
					{
						key: "Content-Type",
						value: path.endsWith(".css") ? "text/css" : "text/html",
					},
				],
			},
			body: s3Object.Body.toString(),
		};
	} catch (error) {
		console.error("Error fetching from S3:", error);
		return {
			status: "404",
			statusDescription: "Not Found",
			headers: {
				"content-type": [{ key: "Content-Type", value: "text/html" }],
			},
			body: "<h1>404 - Site Not Found</h1>",
		};
	}
};
