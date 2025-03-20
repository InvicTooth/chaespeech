'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/prisma/client';
import { z } from 'zod';
import { auth } from '@/auth';
import { ownerId } from './definitions';

export async function fetchActivitiesByType() {
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

export async function fetchLatestActivities() {
  return await fetchFilteredActivities({});
}

export async function fetchActivitiesForVisitors({
  query = '',
  page = 1,
  take = 10,
}) {
  const activities = await prisma.activity.findMany({
    where: {
      userId: ownerId,
      type: { contains: query },
    },
    orderBy: {
      startAt: 'desc',
    },
    take: take,
    skip: (page - 1) * take,
  });

  return activities;
}

export async function fetchFilteredActivities({
  query = "",
  page = 1,
  take = 10,
}) {
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');

  const activities = await prisma.activity.findMany({
    where: {
      userId: session.user.id,
      OR: [
        { type: { contains: query } },
        { title: { contains: query } },
        { content: { contains: query } },
      ]
    },
    orderBy: {
      startAt: 'desc',
    },
    take: take,
    skip: (page - 1) * take,
  });

  return activities;
}

export async function fetchFilteredActivitiesCount(query = "") {
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');

  const count = await prisma.activity.count({
    where: {
      userId: session.user.id,
      OR: [
        { type: { contains: query } },
        { title: { contains: query } },
        { content: { contains: query } },
      ]
    },
  });

  return count;
}

export async function fetchActivitiesGroupByMonth() {
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');

  try {
    const activitiesByMonth = await prisma.$queryRaw<
      { yearMonth: string; count: bigint }[]
    >`
      SELECT
        to_char("startAt", 'YYYY-MM') AS "yearMonth",
        COUNT(*) AS count
      FROM
        "Activity"
      WHERE
        "userId" = ${session.user.id}
        AND "startAt" >= CURRENT_DATE - INTERVAL '1 year'
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

export async function fetchActivitiesByDayAndType() {
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');

  try {
    const activitiesByDayAndType = await prisma.$queryRaw<
      { date: string; type: string; count: bigint }[]
    >`
      SELECT
        to_char("startAt", 'YYYY-MM-DD') AS date,
        "type",
        COUNT(*) AS count
      FROM
        "Activity"
      WHERE
        "userId" = ${session.user.id}
        AND "startAt" >= CURRENT_DATE - INTERVAL '1 year'
      GROUP BY
        date, "type"
      ORDER BY
        date ASC, "type" ASC;
    `;

    return activitiesByDayAndType;
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}

export type ActivityFormActionState = {
  message?: string | null,
  errors?: {
    title?: string[];
    type?: string[];
    startAt?: string[];
    endAt?: string[];
    content?: string[];
    mediaUrl?: string[];
  }
};

const FormSchema = z.object({
  title: z.string({ required_error: 'Title is required' }).min(1, { message: 'Title is required' }),
  type: z.string({ required_error: 'Type is required' }).min(1, { message: 'Type is required' }),
  startAt: z.coerce.date({ required_error: 'Start Date is required' }),
  endAt: z.coerce.date({ required_error: 'End Date is required' }),
  content: z.string().optional(),
  mediaUrl: z.string().optional(),
});

export async function createActivity(prevState: ActivityFormActionState, formData: FormData) {
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');

  const validatedFields = FormSchema.safeParse({
    title: formData.get('title'),
    type: formData.get('type'),
    startAt: formData.get('startAt'),
    endAt: formData.get('endAt'),
    content: formData.get('content'),
    mediaUrl: formData.get('mediaUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Activity.',
    };
  }

  const { title, type, startAt, endAt, content, mediaUrl } = validatedFields.data;

  try {
    await prisma.activity.create({
      data: {
        title,
        type,
        startAt,
        endAt,
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
  redirect('/dashboard/activities');
  return { message: 'Activity created successfully.' };
}

export async function updateActivity(id: bigint, prevState: ActivityFormActionState, formData: FormData) {
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');

  const validatedFields = FormSchema.safeParse({
    title: formData.get('title'),
    type: formData.get('type'),
    startAt: formData.get('startAt'),
    endAt: formData.get('endAt'),
    content: formData.get('content'),
    mediaUrl: formData.get('mediaUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Activity.',
    };
  }

  const { title, type, startAt, endAt, content, mediaUrl } = validatedFields.data;

  try {
    await prisma.activity.update({
      where: {
        id: id,
      },
      data: {
        title,
        type,
        startAt,
        endAt,
        content,
        mediaUrl,
        userId: session.user.id,
      },
    });
  } catch (error) {
    console.error(error);
    return {
      message: `Database Error: Failed to Update Activity. ${error}`
    };
  }

  revalidatePath('/dashboard/activities');
  redirect('/dashboard/activities');
}

export async function deleteActivity(id: bigint) {
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');

  try {
    await prisma.activity.delete({
      where: {
        id: id,
        userId: session.user.id,
      },
    });
    revalidatePath('/dashboard/activities');
    revalidatePath('/dashboard');
  } catch (error) {
    console.error(error);
  }
}
