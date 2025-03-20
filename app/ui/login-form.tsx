"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
	signInWithGoogle,
	signInWithNaver,
	signInWithKakao,
} from "@/app/lib/auth";
import Image from "next/image";

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader className="text-center">
					<CardTitle className="text-xl">환영합니다</CardTitle>
					<CardDescription>SNS 계정으로 로그인하기</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-6">
						<div className="flex flex-col gap-4">
							<Button
								variant="outline"
								className="w-full"
								onClick={signInWithGoogle}
							>
								<Image
									src="/svg/btn_google.svg"
									width={20}
									height={20}
									alt="google"
								/>
								Login with Google
							</Button>
							<Button
								variant="outline"
								className="w-full"
								onClick={signInWithNaver}
							>
								<Image
									src="/svg/btn_naver.svg"
									width={20}
									height={20}
									alt="naver"
								/>
								Login with Naver
							</Button>
							<Button
								variant="outline"
								className="w-full"
								onClick={signInWithKakao}
							>
								<Image
									src="/svg/btn_kakao.svg"
									width={20}
									height={20}
									alt="kakao"
								/>
								Login with Kakao
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
			<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
				By clicking continue, you agree to our{" "}
				<Link href="#">Terms of Service</Link> and{" "}
				<Link href="#">Privacy Policy</Link>.
			</div>
		</div>
	);
}
