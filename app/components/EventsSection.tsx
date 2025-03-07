import Link from "next/link";
import { events } from "../mock/data";

export default function EventsSection() {
	return (
		<section className="mb-20">
			<h2 className="text-3xl font-bold text-[var(--color-event-black)] mb-8">
				행사 진행
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{events.map((category, index) => (
					<div
						key={index}
						className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[var(--color-event-black)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50"
					>
						<h3 className="text-xl font-bold mb-4 text-[var(--color-event-black)]">
							{category.type.replace(/^\d+\.\s/, "")}
						</h3>
						<ul className="space-y-2">
							{category.list.slice(0, 3).map((event, eventIndex) => (
								<li key={eventIndex} className="text-gray-600">
									• {event}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="text-center mt-8">
				<Link
					href="/events"
					className="inline-block px-6 py-3 bg-[var(--color-event-black)] text-white rounded-lg hover:bg-[var(--color-event-black)]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
				>
					전체 행사 보기 →
				</Link>
			</div>
		</section>
	);
}
