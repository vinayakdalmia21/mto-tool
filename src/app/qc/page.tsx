import { getReceivedPos } from '../actions/qc';
import QcClient from './QcClient';

export const dynamic = "force-dynamic";

export default async function QcPage() {
  const pos = await getReceivedPos();

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Inwarding & Quality Control</h1>
        <p style={{ color: 'var(--text-muted)' }}>Inspect POs arrived from vendors. Compare actuals vs promised before billing.</p>
      </header>

      <QcClient pos={pos} />
    </div>
  );
}
