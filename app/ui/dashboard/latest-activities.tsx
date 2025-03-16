import clsx from 'clsx';
import Image from 'next/image';
import { notoSansKR } from "@/app/ui/fonts";
import { fetchLatestActivities } from '@/app/lib/activity';
import { Repeat } from "lucide-react";

export default async function LatestActivities() {
  const latestActivities = await fetchLatestActivities();

  return (
			<div className="flex w-full flex-col md:col-span-4">
				<h2 className={`${notoSansKR.className} mb-4 text-xl md:text-2xl`}>
					최근 활동
				</h2>
				<div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
					<div className="bg-white px-6">
						{latestActivities.map((activity, i) => {
							return (
								<div
									key={activity.id}
									className={clsx(
										"flex flex-row items-center justify-between py-4",
										{
											"border-t": i !== 0,
										},
									)}
								>
									<div className="flex items-center">
										{activity.mediaUrl && (
											<Image
												src={activity.mediaUrl}
												alt={activity.mediaUrl}
												className="mr-4 rounded-full"
												width={32}
												height={32}
											/>
										)}
										<div className="min-w-0">
											<p className="truncate text-sm font-semibold md:text-base">
												{activity.type}
											</p>
											<p className="hidden text-sm text-gray-500 sm:block">
												{activity.title}
											</p>
										</div>
									</div>
									<p
										className={`${notoSansKR.className} truncate text-sm font-medium md:text-base`}
									>
										{activity.content}
									</p>
								</div>
							);
						})}
					</div>
					<div className="flex items-center pb-2 pt-6">
						<Repeat className="h-5 w-5 text-gray-500" />
						<h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
					</div>
				</div>
			</div>
		);
}
