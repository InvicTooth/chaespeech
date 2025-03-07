import Link from "next/link";
import { mainCareer, etcCareer } from "../mock/data";

export default function CareerSection() {
	return (
		<section className="mb-20">
			<h2 className="text-3xl font-bold text-[var(--color-career-navy)] mb-8">
				경력
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Current Positions */}
				<div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-8 border-t-4 border-[var(--color-career-navy)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
					<h3 className="text-2xl font-bold mb-6 text-[var(--color-career-navy)]">
						주요 경력
					</h3>
					<div className="space-y-4">
						{mainCareer.slice(0, 3).map((career, index) => (
							<div
								key={index}
								className="flex items-center gap-3 text-gray-600"
							>
								<div className="w-2 h-2 rounded-full bg-[var(--color-career-gold)]" />
								<p>{career}</p>
							</div>
						))}
					</div>
				</div>
				{/* Other Career Highlights */}
				<div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-8 border-t-4 border-[var(--color-career-gold)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
					<h3 className="text-2xl font-bold mb-6 text-[var(--color-career-navy)]">
						기타 경력
					</h3>
					<div className="space-y-4">
						{etcCareer.slice(0, 3).map((career, index) => (
							<div
								key={index}
								className="flex items-center gap-3 text-gray-600"
							>
								<div className="w-2 h-2 rounded-full bg-[var(--color-career-gold)]" />
								<p>{career}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="text-center mt-8">
				<Link
					href="/career"
					className="inline-block px-6 py-3 bg-[var(--color-career-navy)] text-white rounded-lg hover:bg-[var(--color-career-navy)]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
				>
					전체 경력 보기 →
				</Link>
			</div>
		</section>
	);
}
