import { fetchActivitiesForVisitors } from "@/app/lib/activity";
import * as motion from "motion/react-client";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { isImage, isVideo } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Career = async () => {
	const careers = await fetchActivitiesForVisitors({
		query: "Career",
		take: 100,
	});
	const mainCareer = careers.filter((career) => career.type === "MainCareer");
	const subCareer = careers.filter((career) => career.type === "SubCareer");
	const currentCareer = careers.filter((career) =>
		career.title.includes("현)"),
	);

	return (
		<motion.div
			className="min-h-screen bg-gray-50"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{/* 히어로 섹션 */}
			<motion.section
				className="bg-[var(--color-career-navy)] text-white py-24"
				variants={heroVariants}
			>
				<div className="container mx-auto px-4 pt-6">
					<motion.h1
						className="text-4xl font-bold mb-4"
						variants={itemVariants}
					>
						경력 소개
					</motion.h1>
					<motion.p className="text-xl opacity-90" variants={itemVariants}>
						다양한 현장에서 쌓아온 전문성과 경험
					</motion.p>
				</div>
			</motion.section>

			{/* 메인 콘텐츠 */}
			<div className="container mx-auto px-4 py-12">
				{/* 주요 경력 섹션 */}
				<section className="mb-16">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* 경력 요약 카드 */}
						<motion.div
							className="lg:col-span-1"
							variants={summaryCardVariants}
						>
							<div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
								<h2 className="text-2xl font-bold mb-6 text-[var(--color-career-navy)]">
									Current Position
								</h2>
								<div className="space-y-4">
									{currentCareer.map((career) => (
										<motion.div
											key={career.id}
											className="flex items-center gap-3 text-gray-600"
											variants={itemVariants}
										>
											<div className="w-2 h-2 rounded-full bg-[var(--color-career-gold)]" />
											<p>{career.title}</p>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>

						{/* 상세 경력 타임라인 */}
						<div className="lg:col-span-2">
							<motion.h2
								className="text-2xl font-bold mb-8 text-[var(--color-career-navy)]"
								variants={itemVariants}
							>
								주요 경력
							</motion.h2>
							<motion.div
								className="space-y-6"
								variants={containerVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
							>
								{mainCareer.map((career) => (
									<motion.div
										key={career.id}
										className="relative pl-8 pb-8 border-l-2 border-[var(--color-career-gold)] last:border-0"
										variants={timelineItemVariants}
									>
										<div className="absolute left-[-9px] top-0">
											<div className="w-4 h-4 rounded-full bg-[var(--color-career-gold)]" />
										</div>
										<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
											<p className="text-gray-800">{career.title}</p>
											{career.content && (
												<p className="mt-2 text-gray-600">{career.content}</p>
											)}
											<div className="mt-3 flex gap-2">
												{career.title.includes("현)") && (
													<span className="px-2 py-1 text-sm bg-[var(--color-career-navy)] text-white rounded">
														현재
													</span>
												)}
												{career.title.includes("전)") && (
													<span className="px-2 py-1 text-sm bg-gray-200 text-gray-700 rounded">
														이전
													</span>
												)}
												{career.startAt && career.endAt && (
													<span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded">
														{format(career.startAt, "yyyy.MM", { locale: ko })}
													</span>
												)}
											</div>
											{career.mediaUrl && (
												<div className="mt-3">
													<a
														href={career.mediaUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-500 hover:underline"
													>
														관련 자료 보기
													</a>
												</div>
											)}
											{/* 추가된 부분 */}
											{career.mediaUrl && (
												<div className="mt-3">
													{/* 이미지 또는 동영상 여부 판단 */}
													{isImage(career.mediaUrl) ? (
														<Image
															src={career.mediaUrl}
															alt="경력 관련 이미지"
															className="w-full h-48 object-cover rounded-md"
														/>
													) : isVideo(career.mediaUrl) ? (
														<video
															muted
															src={career.mediaUrl}
															controls
															className="w-full h-48 object-cover rounded-md"
														/>
													) : (
														<Link
															href={career.mediaUrl}
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
						</div>
					</div>
				</section>

				{/* 기타 경력 섹션 */}
				<section className="mb-16">
					<motion.h2
						className="text-2xl font-bold mb-8"
						variants={itemVariants}
						whileInView="visible"
						viewport={{ once: true }}
					>
						기타 경력 및 자격
					</motion.h2>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{subCareer.map((career, index) => (
							<motion.div
								key={career.id}
								className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
								variants={etcItemVariants}
							>
								<div className="flex items-start gap-4">
									<div className="w-10 h-10 rounded-full bg-[var(--color-career-navy)]/10 flex items-center justify-center text-[var(--color-career-navy)]">
										<span className="font-semibold">{index + 1}</span>
									</div>
									<div>
										<p className="text-gray-800">{career.title}</p>
										{career.content && (
											<p className="mt-2 text-gray-600">{career.content}</p>
										)}
										<div className="mt-2">
											{career.title.includes("현)") && (
												<span className="px-2 py-1 text-sm bg-[var(--color-career-navy)]/10 text-[var(--color-career-navy)] rounded">
													진행중
												</span>
											)}
											{career.title.includes("자격증") && (
												<span className="px-2 py-1 text-sm bg-[var(--color-career-gold)]/10 text-[var(--color-career-gold)] rounded">
													자격증
												</span>
											)}
											{career.startAt && career.endAt && (
												<span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded">
													{format(career.startAt, "yyyy.MM", { locale: ko })}
												</span>
											)}
										</div>
										{career.mediaUrl && (
											<div className="mt-3">
												{/* 이미지 또는 동영상 여부 판단 */}
												{isImage(career.mediaUrl) ? (
													<Image
														src={career.mediaUrl}
														alt="경력 관련 이미지"
														className="w-full h-48 object-cover rounded-md"
													/>
												) : isVideo(career.mediaUrl) ? (
													<video
														muted
														src={career.mediaUrl}
														controls
														className="w-full h-48 object-cover rounded-md"
													/>
												) : (
													<Link
														href={career.mediaUrl}
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
								</div>
							</motion.div>
						))}
					</motion.div>
				</section>
			</div>
		</motion.div>
	);
};

export default Career;

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

const summaryCardVariants = {
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

const timelineItemVariants = {
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

const etcItemVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};
