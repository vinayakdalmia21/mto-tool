"use client";

import { useState } from 'react';
import { submitVendorEstimation, updateVendorEstimation, acceptVendorEstimate } from '../actions/vendor';

export default function VendorEstimationsClient({ pendingQueries, history, globalPricing }: { pendingQueries: any[], history: any[], globalPricing: any }) {
  const [selectedQueryId, setSelectedQueryId] = useState('');
  const [editEstId, setEditEstId] = useState<number | null>(null);
  const [expandedQueries, setExpandedQueries] = useState<Record<string, boolean>>({});
  
  // To prefill when editing
  const editingEst = history.find(h => h.id === editEstId);
  const selectedQuery = editingEst ? editingEst.mtoQuery : pendingQueries.find(q => q.id === selectedQueryId);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  let defaultGoldRate = '';
  if (selectedQuery?.goldKaratage && globalPricing) {
    const k = selectedQuery.goldKaratage;
    if (k === '9K') defaultGoldRate = globalPricing.rate9k;
    else if (k === '14K') defaultGoldRate = globalPricing.rate14k;
    else if (k === '18K') defaultGoldRate = globalPricing.rate18k;
    else if (k === '22K') defaultGoldRate = globalPricing.rate22k;
    else if (k === '24K') defaultGoldRate = globalPricing.rate24k;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    
    let res;
    if (editEstId) {
       res = await updateVendorEstimation(editEstId, formData);
    } else {
       res = await submitVendorEstimation(formData);
    }
    
    setLoading(false);
    if (res.success) {
      setSelectedQueryId('');
      setEditEstId(null);
      e.currentTarget.reset();
      alert(`Estimation successfully ${editEstId ? 'updated' : 'recorded'}!`);
      // Auto-expand the query to show the newly added option
      if (res.estimation?.mtoQueryId) {
        setExpandedQueries(prev => ({ ...prev, [res.estimation.mtoQueryId]: true }));
      }
    } else {
      setError(res.error || 'Failed to submit estimation');
    }
  }

  function handleEditClick(est: any) {
     setEditEstId(est.id);
  }

  function cancelEdit() {
     setEditEstId(null);
  }

  async function handleAccept(id: number) {
    if (!confirm('Are you sure you want to select this estimate for the customer? This will move the pipeline stage forward.')) return;
    const res = await acceptVendorEstimate(id);
    if (res.success) {
      alert('Estimate accepted successfully. Moved query to Estimating state!');
    } else {
      alert('Error accepting estimate: ' + res.error);
    }
  }

  // Handle Shareable Link
  const handleCopyLink = (estId: number) => {
    const link = `${window.location.origin}/share/vendor-estimate/${estId}`;
    navigator.clipboard.writeText(link);
    alert('Shareable vendor link copied to clipboard!');
  };

  // Grouping History into Layers
  const groupedHistory = history.reduce((acc: any, curr: any) => {
    if (!acc[curr.mtoQueryId]) {
      acc[curr.mtoQueryId] = [];
    }
    acc[curr.mtoQueryId].push(curr);
    return acc;
  }, {});

  return (
    <div style={{ padding: '0 2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Vendor Estimations</h1>
        <p style={{ color: 'var(--text-muted)' }}>Operations Dashboard: Collect and manage third-party vendor estimations.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 1fr) 2fr', gap: '2rem', alignItems: 'start' }}>
        
        {/* ASSIGNMENT PANEL */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>
            {editEstId ? 'Edit Vendor Estimate' : 'New Vendor Estimate'}
          </h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Target Query *</label>
            {editEstId ? (
               <div style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.03)' }}>
                 Q-{String(editingEst.mtoQuery?.queryNo).padStart(4, '0')} | {editingEst.mtoQuery?.category}
               </div>
            ) : (
               <>
                 <select 
                   value={selectedQueryId}
                   onChange={(e) => setSelectedQueryId(e.target.value)}
                   style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--surface-border)', background: 'rgba(255,155,255,0.03)', color: 'var(--text-main)' }}
                 >
                   <option value="">-- Select Pending Query --</option>
                   {pendingQueries.map(q => (
                     <option key={q.id} value={q.id}>
                       Q-{String(q.queryNo).padStart(4, '0')} | {q.category} ({q.mtoType})
                     </option>
                   ))}
                 </select>
                 {pendingQueries.length === 0 && <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>No open queries currently awaiting vendor tracking.</span>}
               </>
            )}
          </div>

          {(selectedQueryId || editEstId) && (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="hidden" name="mtoQueryId" value={selectedQuery?.id} />
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Vendor Name *</label>
                <input name="vendorName" required defaultValue={editingEst?.vendorName} placeholder="e.g. Ramesh Suppliers" />
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--surface-border)' }}>
                <div style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--surface-border)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>MTO Requested Karatage:</span> <strong style={{ color: 'var(--primary)', marginLeft: '0.5rem' }}>{selectedQuery?.goldKaratage || 'Standard (As per design)'}</strong>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Gold Weight *</label>
                    <input name="goldWeight" required defaultValue={editingEst?.goldWeight} placeholder="e.g. 12g" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Diamond Ct</label>
                    <input name="diamondWeight" defaultValue={editingEst?.diamondWeight} placeholder="e.g. 1.2ct" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Labour Charges</label>
                    <input type="number" step="0.01" name="labourCharges" defaultValue={editingEst?.labourCharges} placeholder="e.g. 5000" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Gold Rate (per g)</label>
                    <input type="number" step="0.01" name="goldRate" defaultValue={editingEst?.goldRate || defaultGoldRate} placeholder="e.g. 7200" />
                  </div>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                  Rate auto-fetched from Pricing Hub for <strong>{selectedQuery?.goldKaratage || 'requested'}</strong> karatage.
                </p>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Vendor Remarks</label>
                <textarea name="remarks" rows={3} defaultValue={editingEst?.remarks} placeholder="Vendor quoted delivery dates, stone quality, etc."></textarea>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Attach Vendor Image/Sketch</label>
                <input type="file" name="image" accept="image/*" />
                {editingEst?.images && <p style={{ fontSize: '0.8rem', marginTop: '0.2rem', color: 'var(--primary)' }}>Existing image attached. Overwrite by selecting new.</p>}
              </div>

              {error && <div style={{ color: 'var(--danger)', fontSize: '0.9rem' }}>{error}</div>}

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                {editEstId && (
                  <button type="button" onClick={cancelEdit} className="btn" style={{ flex: 1, background: 'transparent', border: '1px solid var(--surface-border)', color: 'var(--text-main)' }}>
                    Cancel
                  </button>
                )}
                <button type="submit" disabled={loading} className="btn btn-primary" style={{ flex: 2 }}>
                  {loading ? 'Submitting...' : editEstId ? 'Save Changes' : 'Submit Vendor Estimate'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* LOG HISTORY (LAYERED) */}
        <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
           <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--surface-border)' }}>
             <h2 style={{ fontSize: '1.2rem' }}>Submitted Estimates</h2>
           </div>
           
           <div style={{ display: 'flex', flexDirection: 'column' }}>
             {Object.keys(groupedHistory).length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  No vendor estimates have been submitted yet.
                </div>
             ) : (
                Object.keys(groupedHistory).map((queryId) => {
                  const estimates = groupedHistory[queryId];
                  // Final estimate is either the accepted one or the latest one
                  const finalEst = estimates.find((e: any) => e.isAccepted) || estimates[0];
                  const queryNo = String(finalEst.mtoQuery?.queryNo || 0).padStart(4, '0');
                  const isExpanded = !!expandedQueries[queryId];

                  return (
                    <div key={queryId} style={{ borderBottom: '1px solid var(--surface-border)' }}>
                      {/* Master Row */}
                      <div 
                        style={{ padding: '1.25rem 1.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: isExpanded ? 'rgba(255,255,255,0.02)' : 'transparent' }}
                        onClick={() => setExpandedQueries(prev => ({ ...prev, [queryId]: !isExpanded }))}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                          <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>Q-{queryNo}</span>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>v{finalEst.version} • {estimates.length} Version{estimates.length > 1 ? 's' : ''} Logged</span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Latest: {finalEst.vendorName}</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                          {finalEst.isAccepted ? (
                            <span className="badge badge-success">Accepted & Estimating</span>
                          ) : (
                            <span className="badge badge-warning">Awaiting Selection</span>
                          )}
                          <span style={{ color: 'var(--text-muted)', transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
                        </div>
                      </div>

                      {/* Expanded Versions Row */}
                      {isExpanded && (
                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {estimates.map((est: any, idx: number) => {
                              const versionNum = estimates.length - idx; // ascending version tags conceptually
                              return (
                                <div key={est.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: est.isAccepted ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255,255,255,0.02)', borderRadius: '8px', border: est.isAccepted ? '1px solid var(--success)' : '1px solid var(--surface-border)' }}>
                                  
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                      <span className="badge" style={{ background: 'var(--surface-border)' }}>v{est.version}</span>
                                      <strong style={{ fontSize: '1rem' }}>{est.vendorName}</strong>
                                      {est.isAccepted && <span style={{ color: 'var(--success)', fontSize: '0.8rem', marginLeft: '0.5rem' }}>✓ Customer Selected</span>}
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                      {est.goldWeight} Gold | {est.diamondWeight || '0ct Disc'} Diamond
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                      Lab: ₹{est.labourCharges || 0} | Rate: ₹{est.goldRate || 0}/g
                                    </div>
                                  </div>

                                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{new Date(est.createdAt).toLocaleDateString()}</span>
                                    
                                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.3rem' }}>
                                      <button onClick={() => handleEditClick(est)} className="btn" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem', background: 'transparent', border: '1px solid var(--surface-border)' }}>
                                        Edit
                                      </button>
                                      <button onClick={() => handleCopyLink(est.id)} className="btn" title="Copy Shareable Link" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem', background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
                                        🔗 Share Link
                                      </button>
                                      {!est.isAccepted && (
                                        <button onClick={() => handleAccept(est.id)} className="btn btn-primary" title="Select this vendor & move to Estimations" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>
                                          ✓ Move to Estimations
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
             )}
           </div>
        </div>
      </div>
    </div>
  );
}
