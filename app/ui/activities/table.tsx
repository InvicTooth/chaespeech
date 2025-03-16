import Image from "next/image";
import { UpdateActivity, DeleteActivity } from "@/app/ui/activities/buttons";
import { formatDateToLocal } from "@/app/lib/utils";
import { fetchFilteredActivities } from "@/app/lib/activity";

export default async function ActivitiesTable({
	query,
	currentPage,
	take,
}: {
	query: string;
	currentPage: number;
	take: number;
}) {
	const activities = await fetchFilteredActivities(query, currentPage, take);

	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg bg-gray-50 p-2 md:pt-0">
					<div className="md:hidden">
						{activities?.map((activity) => (
							<div
								key={activity.id}
								className="mb-2 w-full rounded-md bg-white p-4"
							>
								<div className="flex items-center justify-between border-b pb-4">
									<div>
										<div className="mb-2 flex items-center">
											{activity.mediaUrl && (
												<Image
													src={activity.mediaUrl}
													className="mr-2 rounded-full"
													width={28}
													height={28}
													alt={`${activity.title}'s picture`}
												/>
											)}
											<p>{activity.title}</p>
										</div>
										<p className="text-sm text-gray-500">{activity.type}</p>
									</div>
								</div>
								<div className="flex w-full items-center justify-between pt-4">
									<div>
										<p className="text-xl font-medium">{activity.content}</p>
										<p>{formatDateToLocal(activity.date.toISOString())}</p>
									</div>
									<div className="flex justify-end gap-2">
										<UpdateActivity id={activity.id} />
										<DeleteActivity id={activity.id} />
									</div>
								</div>
							</div>
						))}
					</div>
					<table className="hidden min-w-full text-gray-900 md:table">
						<thead className="rounded-lg text-left text-sm font-normal">
							<tr>
								<th scope="col" className="px-4 py-5 font-medium sm:pl-6">
									제목
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									종류
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									내용
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									날짜
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									미디어
								</th>
								<th scope="col" className="relative py-3 pl-6 pr-3">
									<span className="sr-only">수정/삭제</span>
								</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{activities?.map((activity) => (
								<tr
									key={activity.id}
									className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
								>
									<td className="whitespace-nowrap py-3 pl-6 pr-3">
										<div className="flex items-center gap-3">
											<p>{activity.title}</p>
										</div>
									</td>
									<td className="whitespace-nowrap px-3 py-3">
										{activity.type}
									</td>
									<td className="whitespace-nowrap px-3 py-3">
										{activity.content}
									</td>
									<td className="whitespace-nowrap px-3 py-3">
										{formatDateToLocal(activity.date.toISOString(), "ko-KR")}
									</td>
									<td className="whitespace-nowrap px-3 py-3">
										{activity.mediaUrl}
									</td>
									<td className="flex justify-end gap-2 whitespace-nowrap px-3 py-3">
										<UpdateActivity id={activity.id} />
										<DeleteActivity id={activity.id} />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
