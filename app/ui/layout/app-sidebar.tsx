"use client";

import type * as React from "react";
import {
	IconDashboard,
	IconInnerShadowTop,
} from "@tabler/icons-react";

import { NavMain } from "@/app/ui/layout/nav-main";
import { NavUser } from "@/app/ui/layout/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ThemeChanger } from "@/app/ui/layout/nav-theme-changer";
import Link from "next/link";
import { ActivityIcon, UserPen } from "lucide-react";

const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: IconDashboard,
		},
		{
			title: "Profile",
			url: "/dashboard/profile",
			icon: UserPen,
		},
		{
			title: "Activities",
			url: "/dashboard/activities",
			icon: ActivityIcon,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
			<Sidebar collapsible="offcanvas" {...props}>
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton
								asChild
								className="data-[slot=sidebar-menu-button]:!p-1.5"
							>
								<Link href="/">
									<IconInnerShadowTop className="!size-5" />
									<span className="text-base font-semibold">ChaeSpeech</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<NavMain items={data.navMain} />
				</SidebarContent>
				<SidebarFooter>
					<ThemeChanger />
					<NavUser user={data.user} />
				</SidebarFooter>
			</Sidebar>
		);
}
