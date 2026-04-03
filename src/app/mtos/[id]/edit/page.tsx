import { getMtoQueryDetails } from '../../../actions/estimation';
import EditMtoForm from './EditMtoForm';
import { notFound } from 'next/navigation';

export const dynamic = "force-dynamic";

export default async function EditMtoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const mto = await getMtoQueryDetails(id);

  if (!mto) return notFound();

  return <EditMtoForm mto={mto} />;
}
