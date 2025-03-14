'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/prisma/client';
import { z } from 'zod';
import { auth } from '@/auth';

export async function fetchActivitiesByType(){
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');

  const activitiesByType = await prisma.activity.groupBy({
    by: ['type'],
    _count: true,
    where: {
      userId: session.user.id,
    },
    orderBy: {
      type: 'desc',
    },
  });

  return activitiesByType;
}

export async function fetchActivities(take = 10, skip = 0) {
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');

  const activities = await prisma.activity.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      id: 'desc',
    },
    skip: skip,
    take: take,
  });

  return activities;
}

export async function fetchLatestActivities(){
  return fetchActivities(5, 0);
}

export async function fetchActivitiesGroupByMonth() {
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');

  try {
    const activitiesByMonth = await prisma.$queryRaw<
      { yearMonth: string; count: number }[]
    >`
      SELECT
        to_char(date, 'YYYY-MM') AS "yearMonth",
        COUNT(*) AS count
      FROM
        "Activity"
      WHERE
        "userId" = ${session.user.id}
        AND date >= CURRENT_DATE - INTERVAL '1 year'
      GROUP BY
        "yearMonth"
      ORDER BY
        "yearMonth" ASC;
    `;

    return activitiesByMonth;

  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}

export async function createActivity(prevState: { message: string|null, errors: string|null}, formData: FormData) {
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');

  const FormSchema = z.object({
    title: z.string({ required_error: 'Title is required' }).min(1, { message: 'Title is required' }),
    type: z.string({ required_error: 'Type is required' }).min(1, { message: 'Type is required' }),
    date: z.coerce.date({ required_error: 'Date is required' }),
    content: z.string().optional(),
    mediaUrl: z.string().optional(),
  });

  const validatedFields = FormSchema.safeParse({
    title: formData.get('title'),
    type: formData.get('type'),
    date: formData.get('date'),
    content: formData.get('content'),
    mediaUrl: formData.get('mediaUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Activity.',
    };
  }

  const { title, type, date, content, mediaUrl } = validatedFields.data;

  try {
    await prisma.activity.create({
      data: {
        title,
        type,
        date,
        content,
        mediaUrl,
        userId: session.user.id,
      },
    });
  } catch (error) {
    console.error(error);
    return {
      message: `Database Error: Failed to Create Activity. ${error}`,
    };
  }

  revalidatePath('/dashboard/activities');
  return { message: 'Activity created successfully.' };
}

export async function deleteActivity(id: bigint) {
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');
  const parsedId = z.number().safeParse(id);
  if (!parsedId.success)
    return { message: `Invalid id : ${id}` };

  try {
    await prisma.activity.delete({
      where: {
        id: parsedId.data,
      },
    });
    return { message: 'Activity deleted successfully.' };
  } catch (error){
    console.error(error);
    return {
      message: `Database Error: Failed to Delete Activity. ${error}`,
    };
  }
}
