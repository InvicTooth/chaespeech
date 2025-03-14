"use client";

import { useState } from "react";
import * as motion from "motion/react-client";

interface ContactForm {
	name: string;
	phone: string;
	email: string;
	message: string;
	service: string;
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

const contactInfoVariants = {
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

export default function Contact() {
	const [formData, setFormData] = useState<ContactForm>({
		name: "",
		phone: "",
		email: "",
		message: "",
		service: "컨설팅",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: 폼 제출 로직 구현
		console.log("Form submitted:", formData);
	};

	return (
		<motion.div
			className="min-h-screen bg-gray-50"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{/* 히어로 섹션 */}
			<motion.section
				className="bg-[var(--color-neutral)] text-white py-24"
				variants={heroVariants}
			>
				<div className="container mx-auto px-4 pt-6">
					<motion.h1
						className="text-4xl font-bold mb-4"
						variants={itemVariants}
					>
						문의하기
					</motion.h1>
					<motion.p className="text-xl opacity-90" variants={itemVariants}>
						궁금하신 점이나 상담 요청을 남겨주세요
					</motion.p>
				</div>
			</motion.section>

			{/* 메인 콘텐츠 */}
			<div className="container mx-auto px-4 py-12">
				<div className="max-w-4xl mx-auto">
					{/* 문의 폼 */}
					<motion.div
						className="bg-white rounded-xl shadow-lg p-8 mb-8"
						variants={itemVariants}
					>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* 이름 입력 */}
								<div>
									<label
										htmlFor="name"
										className="block text-gray-700 font-medium mb-2"
									>
										이름 *
									</label>
									<input
										type="text"
										id="name"
										required
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-red)] focus:border-transparent"
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
									/>
								</div>

								{/* 연락처 입력 */}
								<div>
									<label
										htmlFor="phone"
										className="block text-gray-700 font-medium mb-2"
									>
										연락처 *
									</label>
									<input
										type="tel"
										id="phone"
										required
										placeholder="010-0000-0000"
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-red)] focus:border-transparent"
										value={formData.phone}
										onChange={(e) =>
											setFormData({ ...formData, phone: e.target.value })
										}
									/>
								</div>

								{/* 이메일 입력 */}
								<div>
									<label
										htmlFor="email"
										className="block text-gray-700 font-medium mb-2"
									>
										이메일
									</label>
									<input
										type="email"
										id="email"
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-red)] focus:border-transparent"
										value={formData.email}
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
									/>
								</div>

								{/* 서비스 선택 */}
								<div>
									<label
										htmlFor="service"
										className="block text-gray-700 font-medium mb-2"
									>
										문의 서비스 *
									</label>
									<select
										id="service"
										required
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-red)] focus:border-transparent"
										value={formData.service}
										onChange={(e) =>
											setFormData({ ...formData, service: e.target.value })
										}
									>
										<option value="컨설팅">1:1 컨설팅</option>
										<option value="강의">강의 문의</option>
										<option value="행사">행사 진행</option>
										<option value="기타">기타 문의</option>
									</select>
								</div>
							</div>

							{/* 메시지 입력 */}
							<div>
								<label
									htmlFor="message"
									className="block text-gray-700 font-medium mb-2"
								>
									문의 내용 *
								</label>
								<textarea
									id="message"
									required
									rows={6}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-red)] focus:border-transparent resize-none"
									value={formData.message}
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
								/>
							</div>

							{/* 제출 버튼 */}
							<div className="flex justify-end">
								<button
									type="submit"
									className="px-8 py-3 bg-[var(--color-brand-red)] text-white rounded-lg hover:bg-[var(--color-brand-red)]/90 transition-colors"
								>
									문의하기
								</button>
							</div>
						</form>
					</motion.div>

					{/* 추가 연락처 정보 */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-3 gap-6"
						variants={containerVariants}
					>
						<motion.div
							className="bg-white p-6 rounded-lg shadow text-center"
							variants={contactInfoVariants}
						>
							<h3 className="font-semibold mb-2">이메일</h3>
							<p className="text-gray-600">contact@example.com</p>
						</motion.div>
						<motion.div
							className="bg-white p-6 rounded-lg shadow text-center"
							variants={contactInfoVariants}
						>
							<h3 className="font-semibold mb-2">전화</h3>
							<p className="text-gray-600">010-1234-5678</p>
						</motion.div>
						<motion.div
							className="bg-white p-6 rounded-lg shadow text-center"
							variants={contactInfoVariants}
						>
							<h3 className="font-semibold mb-2">SNS</h3>
							<p className="text-gray-600">@speechcoach</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
