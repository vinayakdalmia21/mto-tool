import { getOrdersForOperations, createPurchaseOrder, updatePurchaseOrderStatus } from '../actions/order';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  const orders = await getOrdersForOperations();

  async function handleCreatePO(formData: FormData) {
    "use server";
    const orderId = Number(formData.get('orderId'));
    const delivery = formData.get('delivery') as string;

    await createPurchaseOrder(orderId, delivery);
  }

  async function handleUpdateStatus(formData: FormData) {
    "use server";
    const poId = Number(formData.get('poId'));
    const status = formData.get('status') as string;
    await updatePurchaseOrderStatus(poId, status);
  }

  // Sort: PO Pending on top
  const sortedOrders = [...orders].sort((a: any, b: any) => {
    if (!a.purchaseOrder && b.purchaseOrder) return -1;
    if (a.purchaseOrder && !b.purchaseOrder) return 1;
    return 0;
  });

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Orders & POs</h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage accepted MTOs and raise Purchase Orders to vendors.</p>
      </header>

      <div className="glass-panel" style={{ padding: '1.5rem', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>MTO ID</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Customer</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Category</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>PO Status</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedOrders.length === 0 ? (
              <tr><td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No active orders.</td></tr>
            ) : null}
            {sortedOrders.map((order: any) => (
              <tr key={order.id} style={{ borderBottom: '1px solid var(--surface-border)' }}>
                <td style={{ padding: '1rem' }}>MTO-{String(order.mtoQuery?.queryNo || 0).padStart(4, '0')}</td>
                <td style={{ padding: '1rem' }}>{order.mtoQuery?.customer?.name || 'Unknown'}</td>
                <td style={{ padding: '1rem' }}>{order.mtoQuery?.category}</td>
                <td style={{ padding: '1rem' }}>
                  {order.purchaseOrder ? (
                    <span className={`badge ${order.purchaseOrder.status === 'RAISED' ? 'badge-info' : 'badge-success'}`}>
                      PO: {order.purchaseOrder.status}
                    </span>
                  ) : (
                    <span className="badge badge-warning">PO Pending</span>
                  )}
                </td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>
                  {!order.purchaseOrder ? (
                    <form action={handleCreatePO} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <input type="hidden" name="orderId" value={order.id} />
                      <input 
                        type="text" 
                        name="delivery" 
                        placeholder="e.g., 20-25 days" 
                        className="input-field" 
                        style={{ maxWidth: '150px', padding: '0.4rem' }} 
                        required 
                      />
                      <button type="submit" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>Raise PO</button>
                    </form>
                  ) : (
                    <form action={handleUpdateStatus} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', alignItems: 'center' }}>
                       <input type="hidden" name="poId" value={order.purchaseOrder.id} />
                       <select name="status" defaultValue={order.purchaseOrder.status} style={{ padding: '0.3rem', fontSize: '0.8rem' }}>
                        <option value="RAISED">Raised</option>
                        <option value="IN_PRODUCTION">In Production</option>
                        <option value="DISPATCHED">Dispatched for QC</option>
                      </select>
                      <button type="submit" className="btn" style={{ background: 'rgba(255,255,255,0.1)', padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>Update</button>
                    </form>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
