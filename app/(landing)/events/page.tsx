import type { Activity } from "@/app/lib/definitions";
import { EventsClientComponent } from "./events-component";
import { fetchActivitiesForVisitors } from "@/app/lib/activity";

export default async function Events() {
	const events: Activity[] = await fetchActivitiesForVisitors({
		query: "Event",
		take: 100,
	});

	return <EventsClientComponent events={events} />;
}
