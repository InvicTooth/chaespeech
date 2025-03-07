import { prisma } from '@/prisma/client';

async function listInvoices() {
  const data = await prisma.invoices.findMany({
    where: {
      amount: {
        gt: 500,
      },
    },
    include: {
      customers: {
        select: {
          name: true,
        },
      },
    },
  });

	return data;
}

export async function GET() {
  try {
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
