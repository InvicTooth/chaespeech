import { mainCareer, etcCareer } from "../mock/data";

export default function StatsSection() {
	return (
		<section className="mb-20">
			<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
				주요 실적
			</h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<StatCard
					icon="🎯"
					value={mainCareer.length + etcCareer.length}
					label="주요 경력"
					color="var(--color-career-navy)"
					unit="건"
				/>
				<StatCard
					icon="👥"
					value={"1500+"}
					label="강의 실적"
					color="var(--color-lecture-pink)"
					unit="건"
				/>
				<StatCard
					icon="🎪"
					value={"700+"}
					label="행사 진행"
					color="var(--color-event-black)"
					unit="건"
				/>
				<StatCard
					icon="⭐"
					value={98}
					label="고객 만족도"
					color="var(--color-consulting-sky)"
					unit="%"
				/>
			</div>
		</section>
	);
}

function StatCard({
	icon,
	value,
	label,
	unit,
	color,
}: {
	icon: string;
	value: string | number;
	label: string;
	unit: string;
	color: string;
}) {
	return (
		<div
			className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow border-t-4"
			style={{ borderColor: color }}
		>
			<span className="text-3xl mb-4 block">{icon}</span>
			<div className="flex items-baseline justify-center gap-1 mb-2">
				<span className="text-4xl font-bold" style={{ color }}>
					{value}
				</span>
				<span className="text-gray-500">{unit}</span>
			</div>
			<p className="text-gray-600">{label}</p>
		</div>
	);
}
