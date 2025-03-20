import Link from "next/link";
import * as motion from "motion/react-client";
import { fetchActivitiesForVisitors } from "@/app/lib/activity";
import type { Activity } from "@/app/lib/definitions";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Image from "next/image";
import { isImage, isVideo } from "@/app/lib/utils";

export default async function Consulting() {
	const consultings: Activity[] = await fetchActivitiesForVisitors({
		query: "Consulting",
		take: 100,
	});

	return (
		<motion.div
			className="min-h-screen bg-gray-50"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{/* 히어로 섹션 */}
			<motion.section
				className="relative bg-[var(--color-consulting-sky)] text-white py-24"
				variants={heroVariants}
			>
				<div className="container mx-auto px-4 pt-6">
					<motion.h1
						className="text-4xl font-bold mb-4"
						variants={itemVariants}
					>
						컨설팅 서비스
					</motion.h1>
					<motion.p className="text-xl opacity-90" variants={itemVariants}>
						전문적인 1:1 맞춤 컨설팅으로 스피치 실력 향상
					</motion.p>
				</div>
			</motion.section>

			{/* 메인 콘텐츠 */}
			<div className="container mx-auto px-4 py-12">
				{/* 서비스 소개 */}
				<section className="mb-16">
					<motion.div
						className="grid grid-cols-1 lg:grid-cols-2 gap-12"
						variants={containerVariants}
					>
						{/* 서비스 설명 */}
						<motion.div className="space-y-8" variants={itemVariants}>
							<h2 className="text-3xl font-bold text-gray-900">
								맞춤형 스피치 컨설팅
							</h2>
							<div className="prose max-w-none space-y-4">
								<p className="text-lg text-gray-600">
									다양한 현장 경험을 바탕으로 한 실전 중심의 컨설팅을
									제공합니다. 면접, 프레젠테이션, PR 등 목적에 맞는 맞춤형
									프로그램으로 진행됩니다.
								</p>
								<motion.div
									className="flex flex-col gap-4"
									variants={containerVariants}
								>
									<motion.div
										className="flex items-start gap-3"
										variants={itemVariants}
									>
										<div className="w-12 h-12 rounded-full bg-[var(--color-consulting-sky)] flex items-center justify-center text-white">
											<span className="text-2xl">1</span>
										</div>
										<div>
											<h3 className="text-xl font-semibold mb-2">
												1:1 맞춤 컨설팅
											</h3>
											<p className="text-gray-600">
												개인의 목표와 수준에 맞춘 맞춤형 프로그램
											</p>
										</div>
									</motion.div>
									<motion.div
										className="flex items-start gap-3"
										variants={itemVariants}
									>
										<div className="w-12 h-12 rounded-full bg-[var(--color-consulting-sky)] flex items-center justify-center text-white">
											<span className="text-2xl">2</span>
										</div>
										<div>
											<h3 className="text-xl font-semibold mb-2">실전 연습</h3>
											<p className="text-gray-600">
												실제 상황을 가정한 실전 연습과 피드백
											</p>
										</div>
									</motion.div>
									<motion.div
										className="flex items-start gap-3"
										variants={itemVariants}
									>
										<div className="w-12 h-12 rounded-full bg-[var(--color-consulting-sky)] flex items-center justify-center text-white">
											<span className="text-2xl">3</span>
										</div>
										<div>
											<h3 className="text-xl font-semibold mb-2">
												전문가 피드백
											</h3>
											<p className="text-gray-600">
												현직 전문가의 디테일한 피드백
											</p>
										</div>
									</motion.div>
								</motion.div>
							</div>
							<motion.div className="pt-6" variants={itemVariants}>
								<Link
									href="/contact"
									className="inline-block bg-[var(--color-consulting-sky)] text-white px-8 py-3 rounded-lg hover:bg-[var(--color-consulting-sky)]/90 transition-colors"
								>
									상담 문의하기
								</Link>
							</motion.div>
						</motion.div>

						{/* 컨설팅 실적 */}
						<motion.div
							className="bg-white rounded-xl shadow-lg p-8"
							variants={itemVariants}
						>
							<h3 className="text-2xl font-bold mb-6">주요 컨설팅 실적</h3>
							<motion.div
								className="space-y-6 h-96 overflow-y-auto"
								variants={containerVariants}
								initial="hidden"
								animate="visible"
							>
								{consultings.map((consulting, index) => (
									<motion.div
										key={consulting.id}
										className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
										variants={consultingItemVariants}
									>
										<div className="w-10 h-10 rounded-full bg-[var(--color-consulting-sky)]/10 flex items-center justify-center text-[var(--color-consulting-sky)]">
											<span className="font-semibold">{index + 1}</span>
										</div>
										<div>
											<p className="text-gray-900">{consulting.title}</p>
											{consulting.content && (
												<p className="mt-2 text-gray-600">
													{consulting.content}
												</p>
											)}
											<div className="mt-2 flex flex-wrap gap-2">
												{consulting.startAt && consulting.endAt && (
													<span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded">
														{format(consulting.startAt, "yyyy.MM", {
															locale: ko,
														})}
													</span>
												)}
											</div>
											{consulting.mediaUrl && (
												<div className="mt-3">
													{isImage(consulting.mediaUrl) ? (
														<Image
															src={consulting.mediaUrl}
															alt="컨설팅 관련 이미지"
															className="w-full h-48 object-cover rounded-md"
														/>
													) : isVideo(consulting.mediaUrl) ? (
														<video
															muted
															src={consulting.mediaUrl}
															controls
															className="w-full h-48 object-cover rounded-md"
														/>
													) : (
														<Link
															href={consulting.mediaUrl}
															target="_blank"
															rel="noopener noreferrer"
															className="text-blue-500 hover:underline"
														>
															관련 자료 보기
														</Link>
													)}
												</div>
											)}
										</div>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</motion.div>
				</section>

				{/* 컨설팅 프로세스 */}
				<section className="mb-16">
					<motion.h2
						className="text-2xl font-bold mb-8"
						variants={itemVariants}
					>
						컨설팅 진행 프로세스
					</motion.h2>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{[
							{
								step: "01",
								title: "상담 신청",
								desc: "간단한 문의 폼을 통해 상담 신청",
							},
							{
								step: "02",
								title: "일정 조율",
								desc: "맞춤형 스케줄 조정 및 확정",
							},
							{
								step: "03",
								title: "컨설팅 진행",
								desc: "1:1 맞춤형 컨설팅 진행",
							},
							{
								step: "04",
								title: "피드백 및 보완",
								desc: "상세한 피드백과 보완점 제시",
							},
						].map((item) => (
							<motion.div
								key={item.step}
								className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
								variants={processItemVariants}
							>
								<div className="text-[var(--color-consulting-sky)] text-4xl font-bold mb-4">
									{item.step}
								</div>
								<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
								<p className="text-gray-600">{item.desc}</p>
							</motion.div>
						))}
					</motion.div>
				</section>
			</div>
		</motion.div>
	);
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const heroVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeInOut",
		},
	},
};

const processItemVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: "easeInOut",
		},
	},
};

const consultingItemVariants = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.7,
			ease: "easeInOut",
		},
	},
};
