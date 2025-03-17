import "@/app/globals.css";
import "@/app/themes.css";

import { inter } from "@/app/ui/fonts";
import type React from "react";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
	title: {
		template: "%s | ChaeSpeech",
		default: "ChaeSpeech",
	},
	description: "박채은의 기분좋은 스피치",
	metadataBase: new URL("https://chaespeech.vercel.app"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko" suppressHydrationWarning>
			<body className={`${inter.className} bg-quaternary text-primary`}>
				<ThemeProvider
					themes={[
						"light",
						"dark",
						"stone",
						"stone-dark",
						"zinc",
						"zinc-dark",
						"neutral",
						"neutral-dark",
						"gray",
						"gray-dark",
						"slate",
						"slate-dark",
						"red",
						"red-dark",
						"rose",
						"rose-dark",
						"orange",
						"orange-dark",
						"green",
						"green-dark",
						"blue",
						"blue-dark",
						"yellow",
						"yellow-dark",
						"violet",
						"violet-dark",
					]}
					attribute="class"
					defaultTheme="light"
					enableSystem={false}
					disableTransitionOnChange
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
