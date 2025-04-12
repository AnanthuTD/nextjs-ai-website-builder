import LandingPage from "@/components/global/landing";
import { auth } from "@clerk/nextjs/server";
import { createUser } from "./actions/createUser";

export default async function Landing() {
	const { userId } = await auth();
	if (userId) {
		createUser(userId);
	}

	return <LandingPage />;
}
