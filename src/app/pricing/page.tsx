import { getGlobalPricing } from '../actions/pricing';
import GlobalPricingPanel from '../GlobalPricingPanel';

export const dynamic = "force-dynamic";

export default async function PricingPage() {
  const pricing = await getGlobalPricing();

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Universal Pricing Hub</h1>
        <p style={{ color: 'var(--text-muted)' }}>Operations configuration for global MTO parameters.</p>
      </header>
      
      <GlobalPricingPanel initialPricing={pricing} />
    </div>
  );
}
