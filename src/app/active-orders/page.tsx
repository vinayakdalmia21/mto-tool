import { getActiveOrders } from '../actions/order-flow';
import ActiveOrdersClient from './ActiveOrdersClient';

export const dynamic = "force-dynamic";

export default async function ActiveOrdersPage() {
  const ordersRaw = await getActiveOrders();
  const orders = JSON.parse(JSON.stringify(ordersRaw));

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Active Orders</h1>
        <p style={{ color: 'var(--text-muted)' }}>Orders received from sales. Add CAD designs and share with vendors.</p>
      </header>
      <ActiveOrdersClient orders={orders} />
    </div>
  );
}
