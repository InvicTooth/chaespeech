import Link from "next/link";

const lectures = [
	{ title: "면접 스피치", icon: "👤", desc: "상세1" },
	{ title: "PR 스피치", icon: "🎯", desc: "상세2" },
	{ title: "프레젠테이션", icon: "📈", desc: "상세3" },
];

export default function LecturesSection() {
	return (
		<section className="mb-20">
			<h2 className="text-3xl font-bold text-[var(--color-lecture-pink)] mb-8">
				강의 프로그램
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{lectures.map((program, index) => (
					<div
						key={index}
						className="group bg-white rounded-lg shadow-lg overflow-hidden border-r-4 border-[var(--color-lecture-blue)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
					>
						<div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[var(--color-lecture-pink)] to-[var(--color-lecture-blue)] group-hover:scale-105 transition-transform duration-300" />
						<div className="p-6">
							<div className="text-center mb-4">
								<span className="inline-block p-3 bg-[var(--color-consulting-sky)]/10 rounded-full text-4xl">
									{program.icon}
								</span>
							</div>
							<h3 className="text-xl font-semibold mb-2">{program.title}</h3>
							<p className="text-gray-600">{program.desc}</p>
						</div>
					</div>
				))}
			</div>
			<div className="text-center mt-8">
				<Link
					href="/lectures"
					className="inline-block px-6 py-3 bg-[var(--color-lecture-pink)] text-white rounded-lg hover:bg-[var(--color-lecture-pink)]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
				>
					전체 프로그램 보기 →
				</Link>
			</div>
		</section>
	);
}
