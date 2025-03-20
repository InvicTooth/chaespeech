"use client";

import { usePathname } from "next/navigation";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

// 특정 페이지에서 Breadcrumb을 숨길 수 있도록 설정
const EXCLUDED_PAGES = ["/", "/login", "/404"];

const BreadCrumbs = () => {
	const paths = usePathname(); // 현재 경로 가져오기
	const pathNames = paths.split("/").filter((path) => path); // URL을 배열로 변환

	// 특정 페이지에서는 Breadcrumb을 숨김
	if (EXCLUDED_PAGES.includes(paths)) return null;

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem className="hidden md:block">
					<BreadcrumbLink href="/">Chaespeech</BreadcrumbLink>
				</BreadcrumbItem>

				{pathNames.map((segment, index) => {
					const href = `/${pathNames.slice(0, index + 1).join("/")}`;
					return (
						<Fragment key={href}>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								{index === pathNames.length - 1 ? (
									<BreadcrumbPage className="capitalize">
										{decodeURIComponent(segment)}
									</BreadcrumbPage>
								) : (
									<BreadcrumbLink href={href} className="capitalize">
										{decodeURIComponent(segment)}
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
						</Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default BreadCrumbs;
