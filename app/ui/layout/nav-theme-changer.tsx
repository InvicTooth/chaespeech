"use client";

import { generateThemeCSS, rgbToHsl } from "@/app/lib/theme";
import type React from "react";
import { useState, useEffect } from "react";
import { Moon, Sun, Palette, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

function ThemeChanger() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [baseColor, setBaseColor] = useState<string>("#708090");
	const [globalS, setGlobalS] = useState<number>(0.5);
	const [globalL, setGlobalL] = useState<number>(0.5);
	const [r, setR] = useState<number>(0.5);
	const [currentTheme, setCurrentTheme] = useState<string>("");
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	// 상태 변경 시 CSS 업데이트
	useEffect(() => {
		const { h, s, l } = rgbToHsl(baseColor);
		const baseH = h;
		const baseS = s * 100;
		const baseL = l * 100;
		const newCSS = generateThemeCSS({
			baseH,
			baseS,
			baseL,
			globalS,
			globalL,
			r,
		});
		setCurrentTheme(newCSS);
	}, [baseColor, globalS, globalL, r]);

	// CSS를 페이지에 적용
	useEffect(() => {
		const style = document.createElement("style");
		style.textContent = currentTheme;
		style.setAttribute("data-theme-style", "true"); // data attribute 추가
		document.head.appendChild(style);

		// 다크 모드 클래스 토글
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		return () => {
			// 기존 스타일 태그 제거
			const existingStyle = document.querySelector(
				"style[data-theme-style='true']",
			);
			if (existingStyle) {
				document.head.removeChild(existingStyle);
			}
		};
	}, [currentTheme, isDarkMode]);

	// 색상 변경 핸들러
	const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBaseColor(event.target.value);
	};

	// globalS 변경 핸들러
	const handleGlobalSChange = (value: number[]) => {
		setGlobalS(value[0]);
	};

	// globalL 변경 핸들러
	const handleGlobalLChange = (value: number[]) => {
		setGlobalL(value[0]);
	};

	// r 변경 핸들러
	const handleRChange = (value: number[]) => {
		setR(value[0]);
	};

	// 다크 모드 토글 핸들러
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<Popover open={isOpen} onOpenChange={setIsOpen}>
					<PopoverTrigger asChild>
						<SidebarMenuButton>
							<Palette className="mr-2 h-4 w-4" />
							<span>Theme</span>
							{isOpen ? (
								<ChevronUp className="ml-auto h-4 w-4" />
							) : (
								<ChevronDown className="ml-auto h-4 w-4" />
							)}
						</SidebarMenuButton>
					</PopoverTrigger>
					<PopoverContent className="w-80">
						<div className="grid gap-4">
							<div className="space-y-2">
								<h4 className="font-medium leading-none">Theme Settings</h4>
								<p className="text-sm text-muted-foreground">
									Customize the theme to your liking.
								</p>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="baseColor">Base Color</Label>
								<input
									type="color"
									id="baseColor"
									value={baseColor}
									onChange={handleColorChange}
									className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="globalS">Saturation</Label>
								<Slider
									id="globalS"
									defaultValue={[globalS]}
									max={1}
									step={0.01}
									onValueChange={handleGlobalSChange}
								/>
								<div className="text-sm text-muted-foreground">
									{globalS.toFixed(2)}
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="globalL">Lightness</Label>
								<Slider
									id="globalL"
									defaultValue={[globalL]}
									max={1}
									step={0.01}
									onValueChange={handleGlobalLChange}
								/>
								<div className="text-sm text-muted-foreground">
									{globalL.toFixed(2)}
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="r">Border Radius</Label>
								<Slider
									id="r"
									defaultValue={[r]}
									max={1}
									step={0.01}
									onValueChange={handleRChange}
								/>
								<div className="text-sm text-muted-foreground">
									{r.toFixed(2)}
								</div>
							</div>
							<div className="flex justify-end">
								<Button variant="outline" size="icon" onClick={toggleDarkMode}>
									{isDarkMode ? (
										<Sun className="h-[1.2rem] w-[1.2rem]" />
									) : (
										<Moon className="h-[1.2rem] w-[1.2rem]" />
									)}
								</Button>
							</div>
						</div>
					</PopoverContent>
				</Popover>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}

export default ThemeChanger;
