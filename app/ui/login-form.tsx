'use client';

import { Button } from "./button";
import {
	signInWithGoogle,
	// signInWithNaver,
	// signInWithKakao,
} from "@/app/lib/auth";
import {
	// ArrowRight,
	// AtSign,
	// CircleAlert,
	// Key,
	Aperture,
	// Crown,
	// Drum,
} from "lucide-react";


export default function LoginForm() {
	return (
		<>
			<Button className="mt-4 w-full bg-indigo-500" onClick={signInWithGoogle}>
				Log in with Google <Aperture className="ml-auto h-5 w-5 text-gray-50" />
			</Button>
			{/* <Button
					className="mt-4 w-full bg-green-500"
					onClick={signInWithNaver}
				>
					Log in with Naver <Crown className="ml-auto h-5 w-5 text-gray-50" />
				</Button>
				<Button
					className="mt-4 w-full bg-yellow-500"
					onClick={signInWithKakao}
				>
					Log in with Kakao <Drum className="ml-auto h-5 w-5 text-gray-50" />
				</Button> */}
		</>
	);
}
