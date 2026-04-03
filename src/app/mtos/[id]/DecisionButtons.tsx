"use client";

import { useState } from 'react';
import { processCustomerDecision, processPaymentAndLockPricing } from '../../actions/decision';
import { useRouter } from 'next/navigation';

export default function DecisionButtons({ mtoId, currentStatus, estAmount }: { mtoId: string, currentStatus: string, estAmount: number }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [advanceAmount, setAdvanceAmount] = useState<number>(estAmount * 0.5); // Default 50%

  // Normal flow: Estimating -> AWAITING_RESPONSE -> PAYMENT_PENDING -> ACCEPTED -> ...

  async function handleDecision(decision: 'ACCEPT' | 'NEGOTIATE') {
    setLoading(true);
    await processCustomerDecision(mtoId, decision);
    setLoading(false);
    if (decision === 'ACCEPT') {
       setShowPaymentModal(true);
    }
  }

  async function handleReject() {
    setLoading(true);
    await processCustomerDecision(mtoId, 'REJECT', rejectReason);
    setLoading(false);
    setShowRejectModal(false);
  }

  async function handlePayment() {
    setLoading(true);
    // Simulating mock payment processing latency
    setTimeout(async () => {
      await processPaymentAndLockPricing(mtoId, advanceAmount);
      setLoading(false);
      setShowPaymentModal(false);
      router.refresh();
    }, 1500);
  }

  if (currentStatus === 'ACCEPTED') {
    return (
      <div style={{ padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)', borderRadius: '8px', color: 'var(--success)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Pricing Locked & Order Confirmed</h3>
        <p>This MTO has successfully been converted to an Order.</p>
      </div>
    );
  }

  if (currentStatus === 'DROPPED') {
    return (
      <div style={{ padding: '1.5rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--danger)', borderRadius: '8px', color: 'var(--danger)', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>MTO Dropped</h3>
        <p>This query was rejected or dropped.</p>
      </div>
    );
  }

  if (showPaymentModal) {
    return (
      <div style={{ border: '1px solid var(--primary)', padding: '1.5rem', borderRadius: '8px', background: 'rgba(139, 92, 246, 0.05)' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Secure Advance Payment</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
          Payment logic confirms the order and permanently locks the Promised Pricing.
        </p>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Advance Payment Amount (₹)</label>
          <input 
            type="number" 
            value={advanceAmount} 
            onChange={(e) => setAdvanceAmount(Number(e.target.value))} 
            style={{ width: '100%', maxWidth: '200px' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-primary" onClick={handlePayment} disabled={loading}>
            {loading ? 'Processing...' : `Mock Pay ₹${advanceAmount.toLocaleString()}`}
          </button>
          <button className="btn" onClick={() => setShowPaymentModal(false)} style={{ background: 'transparent', border: '1px solid var(--surface-border)', color: 'var(--text-main)' }}>
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button className="btn btn-primary" onClick={() => handleDecision('ACCEPT')} disabled={loading} style={{ flex: 1 }}>
          Accept & Pay Advance
        </button>
        <button className="btn" onClick={() => handleDecision('NEGOTIATE')} disabled={loading} style={{ flex: 1, background: 'rgba(59, 130, 246, 0.1)', color: 'var(--info)' }}>
          Request Negotiation
        </button>
        <button className="btn" onClick={() => setShowRejectModal(true)} disabled={loading} style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)' }}>
          Reject
        </button>
      </div>

      {showRejectModal && (
        <div style={{ marginTop: '1.5rem', padding: '1.5rem', border: '1px solid var(--danger)', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.05)' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '1rem' }}>Reason for Drop-off</h4>
          <select 
            value={rejectReason} 
            onChange={e => setRejectReason(e.target.value)} 
            style={{ marginBottom: '1rem' }}
          >
            <option value="">Select a reason...</option>
            <option value="Price too high">Price too high</option>
            <option value="Design mismatch">Design mismatch</option>
            <option value="No response (MIA)">No response (MIA)</option>
            <option value="Competitor selection">Competitor selection</option>
          </select>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn" onClick={handleReject} disabled={loading || !rejectReason} style={{ background: 'var(--danger)', color: 'white' }}>Confirm Drop-off</button>
            <button className="btn" onClick={() => setShowRejectModal(false)} style={{ background: 'transparent', border: '1px solid var(--surface-border)', color: 'var(--text-main)' }}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
