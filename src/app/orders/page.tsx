import { getOrdersForOperations, createPurchaseOrder, updatePurchaseOrderStatus } from '../actions/order';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  const orders = await getOrdersForOperations();

  async function handleCreatePO(formData: FormData) {
    "use server";
    const orderId = Number(formData.get('orderId'));
    const vendorName = formData.get('vendorName') as string;
    const goldPrice = parseFloat(formData.get('goldPrice') as string);
    const delivery = formData.get('delivery') as string;

    await createPurchaseOrder(orderId, vendorName, goldPrice, delivery);
  }

  async function handleUpdateStatus(formData: FormData) {
    "use server";
    const poId = Number(formData.get('poId'));
    const status = formData.get('status') as string;
    await updatePurchaseOrderStatus(poId, status);
  }

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
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Order Ref</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>MTO / Customer</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>PO Status</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Vendor actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr><td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No active orders.</td></tr>
            ) : null}
            {orders.map(order => (
              <tr key={order.id} style={{ borderBottom: '1px solid var(--surface-border)' }}>
                <td style={{ padding: '1rem', fontWeight: 500 }}>{order.posRefId}</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ fontWeight: 600 }}>{order.mtoQuery.customer.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>MTO: {order.mtoQuery.id.slice(-6).toUpperCase()}</div>
                </td>
                
                <td style={{ padding: '1rem' }}>
                  {order.purchaseOrder ? (
                     <span className={`badge ${order.purchaseOrder.status === 'RAISED' ? 'badge-primary' : 'badge-warning'}`}>
                       {order.purchaseOrder.status}
                     </span>
                  ) : (
                     <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>No PO Raised</span>
                  )}
                </td>

                <td style={{ padding: '1rem' }}>
                  {!order.purchaseOrder ? (
                    <form action={handleCreatePO} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <input type="hidden" name="orderId" value={order.id} />
                      <input name="vendorName" placeholder="Vendor Name" required style={{ padding: '0.3rem', width: '120px', fontSize: '0.8rem' }} />
                      <input type="number" name="goldPrice" placeholder="Locked Gold ₹" required style={{ padding: '0.3rem', width: '120px', fontSize: '0.8rem' }} />
                      <input name="delivery" placeholder="Delivery Time" required style={{ padding: '0.3rem', width: '120px', fontSize: '0.8rem' }} />
                      <button type="submit" className="btn btn-primary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>Raise PO</button>
                    </form>
                  ) : (
                    <form action={handleUpdateStatus} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
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
