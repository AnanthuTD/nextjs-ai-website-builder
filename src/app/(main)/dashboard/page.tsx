import { createUser } from "@/app/actions/createUser";
import Dashboard from "@/components/global/dashboard";
import { auth } from "@clerk/nextjs/server";

async function App() {
	const { userId } = await auth();
	if (userId) {
		createUser(userId);
	}

	return (
		<>
			<Dashboard />
		</>
	);
}

export default App;
