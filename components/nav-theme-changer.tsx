"use client";

import { ChevronRight, Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export const ThemeChanger = () => {
	const { setTheme } = useTheme();
	const themes = [
		"stone",
		"zinc",
		"neutral",
		"gray",
		"slate",
		"red",
		"rose",
		"orange",
		"green",
		"blue",
		"yellow",
		"violet",
	];

	return (
		<>
			<SidebarGroup>
				<SidebarGroupLabel>Themes</SidebarGroupLabel>
				<SidebarMenu>
					<Collapsible
						asChild
						defaultOpen={false}
						className="group/collapsible"
					>
						<SidebarMenuItem>
							<CollapsibleTrigger asChild>
								<SidebarMenuButton tooltip="choose a theme">
									<Palette />
									<span>테마 선택</span>
									<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
								</SidebarMenuButton>
							</CollapsibleTrigger>
							<CollapsibleContent>
								<SidebarMenuSub>
									{themes.map((theme) => (
										<SidebarMenuSubItem key={theme}>
											<div  className="flex items-center justify-between">
												<SidebarMenuButton className="capitalize">{theme}</SidebarMenuButton>
												<div className="flex items-center space-x-2">
													<Button
														variant="outline"
														onClick={() => setTheme(theme)}
														size="icon"
													>
														<Sun className={"h-[1.2rem] w-[1.2rem]"} />
													</Button>
													<Button
														variant="outline"
														onClick={() => setTheme(`${theme}-dark`)}
														size="icon"
													>
														<Moon className={"h-[1.2rem] w-[1.2rem]"} />
													</Button>
												</div>
											</div>
										</SidebarMenuSubItem>
									))}
								</SidebarMenuSub>
							</CollapsibleContent>
						</SidebarMenuItem>
					</Collapsible>
				</SidebarMenu>
			</SidebarGroup>
		</>
	);
};
