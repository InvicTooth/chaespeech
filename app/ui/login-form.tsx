'use client';

import { lusitana } from '@/app/ui/fonts';
import { Button } from './button';
import { useActionState } from 'react';
import {
	authenticate,
	signInWithGoogle,
	signInWithNaver,
	signInWithKakao,
} from "@/app/lib/actions";
import { useSearchParams } from 'next/navigation';
import {
	ArrowRight,
	AtSign,
	CircleAlert,
	Key,
	Aperture,
	Crown,
	Drum,
} from "lucide-react";


export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined,);

  return (
			<>
				<form action={formAction} className="space-y-3">
					<div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
						<h1 className={`${lusitana.className} mb-3 text-2xl`}>
							Please log in to continue.
						</h1>
						<div className="w-full">
							<div>
								<label
									className="mb-3 mt-5 block text-xs font-medium text-gray-900"
									htmlFor="email"
								>
									Email
								</label>
								<div className="relative">
									<input
										className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
										id="email"
										type="email"
										name="email"
										placeholder="Enter your email address"
										required
									/>
									<AtSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
								</div>
							</div>
							<div className="mt-4">
								<label
									className="mb-3 mt-5 block text-xs font-medium text-gray-900"
									htmlFor="password"
								>
									Password
								</label>
								<div className="relative">
									<input
										className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
										id="password"
										type="password"
										name="password"
										placeholder="Enter password"
										required
										minLength={6}
									/>
									<Key className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
								</div>
							</div>
						</div>
						<input type="hidden" name="redirectTo" value={callbackUrl} />
						<Button className="mt-4 w-full" aria-disabled={isPending}>
							Log in <ArrowRight className="ml-auto h-5 w-5 text-gray-50" />
						</Button>
						<div
							className="flex h-8 items-end space-x-1"
							aria-live="polite"
							aria-atomic="true"
						>
							{errorMessage && (
								<>
									<CircleAlert className="h-5 w-5 text-red-500" />
									<p className="text-sm text-red-500">{errorMessage}</p>
								</>
							)}
						</div>
					</div>
				</form>
				<Button
					className="mt-4 w-full bg-indigo-500"
					aria-disabled={isPending}
					onClick={signInWithGoogle}
				>
					Log in with Google{" "}
					<Aperture className="ml-auto h-5 w-5 text-gray-50" />
				</Button>
				<Button
					className="mt-4 w-full bg-green-500"
					aria-disabled={isPending}
					onClick={signInWithNaver}
				>
					Log in with Naver <Crown className="ml-auto h-5 w-5 text-gray-50" />
				</Button>
				<Button
					className="mt-4 w-full bg-yellow-500"
					aria-disabled={isPending}
					onClick={signInWithKakao}
				>
					Log in with Kakao <Drum className="ml-auto h-5 w-5 text-gray-50" />
				</Button>
			</>
		);
}
