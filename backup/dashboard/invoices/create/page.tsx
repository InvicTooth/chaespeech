import Form from '@/backup/ui/invoices/create-form';
import Breadcrumbs from '@/backup/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/backup/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices | Create',
};

export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}