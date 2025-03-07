import Link from "next/link";

const data = [
	{
		title: "1:1 맞춤 컨설팅",
		icon: "👤",
		desc: "개인별 목표와 수준에 맞춘 프로그램",
	},
	{
		title: "실전 연습",
		icon: "🎯",
		desc: "실제 상황을 고려한 맞춤형 연습",
	},
	{
		title: "전문가 피드백",
		icon: "✍️",
		desc: "디테일한 분석과 개선점 제시",
	},
	{
		title: "지속적 관리",
		icon: "📈",
		desc: "체계적인 성장 관리 시스템",
	},
];

export default function ConsultingSection() {
	return (
		<section className="mb-20">
			<h2 className="text-3xl font-bold text-[var(--color-consulting-sky)] mb-8">
				컨설팅 서비스
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{data.map((service, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[var(--color-consulting-sky)]"
					>
						<div className="text-center mb-4">
							<span className="inline-block p-3 bg-[var(--color-consulting-sky)]/10 rounded-full text-4xl">
								{service.icon}
							</span>
						</div>
						<h3 className="text-lg font-bold text-[var(--color-consulting-sky)] text-center mb-2">
							{service.title}
						</h3>
						<p className="text-gray-600 text-center text-sm">
							{service.desc}
						</p>
					</div>
				))}
			</div>
			<div className="text-center mt-8">
				<Link
					href="/consulting"
					className="inline-block px-6 py-3 bg-[var(--color-consulting-sky)] text-white rounded-lg hover:bg-[var(--color-consulting-sky)]/90 transition-colors"
				>
					상세 보기 →
				</Link>
			</div>
		</section>
	);
}
