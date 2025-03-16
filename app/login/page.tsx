import { LoginForm } from "@/components/login-form";
import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login",
};

export default function LoginPage() {
	return (
		<div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
			<div className="flex w-full max-w-sm flex-col gap-6">
				<Link
					href="/"
					className="flex items-center gap-2 self-center font-medium"
				>
					<MessageCircleMore />
					Chaespeech 관리자
				</Link>
				<LoginForm />
			</div>
		</div>
	);
}
