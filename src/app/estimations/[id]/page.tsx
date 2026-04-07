import { getMtoQueryDetails } from '../../actions/estimation';
import { getGlobalPricing } from '../../actions/pricing';
import EstimationForm from './EstimationForm';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatIST } from '@/lib/date-utils';

export default async function EstimationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div id="debug-target">DEBUG: LOADING ID {id}</div>;
}
