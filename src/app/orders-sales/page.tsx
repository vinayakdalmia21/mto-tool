import { getLockedPriceQueries } from '../actions/order-flow';
import OrdersClient from './OrdersClient';

export const dynamic = "force-dynamic";

export default async function SalesOrdersPage() {
  const queriesRaw = await getLockedPriceQueries();
  const queries = JSON.parse(JSON.stringify(queriesRaw));

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>MTO & Advance</h1>
        <p style={{ color: 'var(--text-muted)' }}>Sales Dashboard: Submit advance payments and confirm final orders.</p>
      </header>
      <OrdersClient queries={queries} />
    </div>
  );
}
