import { lusitana } from "@/app/ui/fonts";
import { fetchActivitiesByType } from "@/app/lib/activity";

export default async function CardWrapper() {
	const activitiesByType = await fetchActivitiesByType();
	return (
		<>
			{activitiesByType.map((a) => (
				<Card key={a.type} title={a.type} value={a._count} />
			))}
		</>
	);
}

export function Card({
	title,
	value,
}: {
	title: string;
	value: number | string;
}) {
	return (
		<div className="rounded-xl bg-gray-50 p-2 shadow-sm">
			<div className="flex p-4">
				<h3 className="ml-2 text-sm font-medium">{title}</h3>
			</div>
			<p
				className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
			>
				{value}
			</p>
		</div>
	);
}
