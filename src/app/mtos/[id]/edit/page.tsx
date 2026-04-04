import { getMtoQueryDetails } from '../../../actions/estimation';
import EditMtoForm from './EditMtoForm';
import { notFound } from 'next/navigation';
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function EditMtoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const mto = await getMtoQueryDetails(id);
  const staffList = await prisma.user.findMany({
    orderBy: { name: 'asc' }
  });

  if (!mto) return notFound();

  return <EditMtoForm mto={mto} staffList={staffList} />;
}
