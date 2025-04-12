"use client";

import { Button } from "@/components/ui/button";
import {
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
	useClerk,
} from "@clerk/nextjs";
import React from "react";

function SignOutButton() {
	const { signOut } = useClerk();
	return (
		<Button
			variant="outline"
			className="!rounded-button whitespace-nowrap"
			onClick={() => signOut()}
		>
			Sign Out
		</Button>
	);
}

function AuthButtons() {
	return (
		<div className="flex items-center gap-2">
			<SignedOut>
				<SignInButton mode="modal">
					<Button
						variant="outline"
						className="!rounded-button whitespace-nowrap"
					>
						Log In
					</Button>
				</SignInButton>
				<SignUpButton mode="modal">
					<Button className="bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap">
						Sign Up Free
					</Button>
				</SignUpButton>
			</SignedOut>
			<SignedIn>
				<div className="flex items-center gap-2">
					{/* <SignOutButton /> */}
					<UserButton
						appearance={{
							elements: {
								userButtonAvatarBox: "!rounded-full w-8 h-8",
								userButtonTrigger: "!rounded-button",
							},
						}}
					/>
				</div>
			</SignedIn>
		</div>
	);
}

export default AuthButtons;
