import { AppSidebar } from "@/app/ui/layout/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import type { Metadata } from "next";
import BreadCrumbs from "@/app/ui/layout/breadcrumbs";

export const metadata: Metadata = {
	title: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator
							orientation="vertical"
							className="mr-2 data-[orientation=vertical]:h-4"
						/>
						<BreadCrumbs />
					</div>
				</header>
				<main className="p-8">{children}</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
