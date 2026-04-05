"use client";

import { useState } from 'react';
import { submitVendorEstimation, updateVendorEstimation } from '../actions/vendor';

export default function VendorEstimationsClient({ pendingQueries, history, globalPricing }: { pendingQueries: any[], history: any[], globalPricing: any }) {
  const [selectedQueryId, setSelectedQueryId] = useState('');
  const [editEstId, setEditEstId] = useState<number | null>(null);
  const [isAccepted, setIsAccepted] = useState('false');
  
  // To prefill when editing
  const editingEst = history.find(h => h.id === editEstId);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedQuery = editingEst ? editingEst.mtoQuery : pendingQueries.find(q => q.id === selectedQueryId);

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
      setIsAccepted('false');
      e.currentTarget.reset();
      alert(`Estimation successfully ${editEstId ? 'updated' : 'recorded'}!`);
    } else {
      setError(res.error || 'Failed to submit estimation');
    }
  }

  function handleEditClick(est: any) {
     setEditEstId(est.id);
     setIsAccepted(est.isAccepted ? 'true' : 'false');
  }

  function cancelEdit() {
     setEditEstId(null);
     setIsAccepted('false');
  }

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
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Target MTO Query *</label>
            {editEstId ? (
               <div style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.03)' }}>
                 MTO-{String(editingEst.mtoQuery?.queryNo).padStart(4, '0')} | {editingEst.mtoQuery?.category}
               </div>
            ) : (
               <>
                 <select 
                   value={selectedQueryId}
                   onChange={(e) => setSelectedQueryId(e.target.value)}
                   style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.03)', color: 'var(--text-main)' }}
                 >
                   <option value="">-- Select Pending MTO --</option>
                   {pendingQueries.map(q => (
                     <option key={q.id} value={q.id}>
                       MTO-{String(q.queryNo).padStart(4, '0')} | {q.category} ({q.mtoType})
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

              {/* MOVED ACCEPT ESTIMATE UP */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Accept Estimate?</label>
                <select name="isAccepted" value={isAccepted} onChange={(e) => setIsAccepted(e.target.value)}>
                  <option value="false">No (Keep query tracking)</option>
                  <option value="true">Yes, Accept (Move to Estimating)</option>
                </select>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  If accepted, this query moves to "ESTIMATING" mode for Sales.
                </p>
              </div>

              {isAccepted === 'true' && (
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
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Gold Rate per gram of that specific karatage required</label>
                      <input type="number" step="0.01" name="goldRate" defaultValue={editingEst?.goldRate || defaultGoldRate} placeholder="e.g. 7200" />
                    </div>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                    Rate auto-fetched from Pricing Hub for <strong>{selectedQuery?.goldKaratage || 'requested'}</strong> karatage.
                  </p>
                </div>
              )}

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

        {/* LOG HISTORY */}
        <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
           <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--surface-border)' }}>
             <h2 style={{ fontSize: '1.2rem' }}>Submitted Estimates</h2>
           </div>
           
           <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
             <thead>
               <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--surface-border)' }}>
                 <th style={{ padding: '1rem' }}>Query ID</th>
                 <th style={{ padding: '1rem' }}>Vendor</th>
                 <th style={{ padding: '1rem' }}>Weights</th>
                 <th style={{ padding: '1rem' }}>Status</th>
                 <th style={{ padding: '1rem' }}>Date</th>
                 <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
               </tr>
             </thead>
             <tbody>
               {history.length === 0 ? (
                 <tr>
                   <td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                     No vendor estimates have been submitted yet.
                   </td>
                 </tr>
               ) : history.map(est => {
                 const queryNo = String(est.mtoQuery?.queryNo || 0).padStart(4, '0');
                 return (
                   <tr key={est.id} style={{ borderBottom: '1px solid var(--surface-border)' }}>
                     <td style={{ padding: '1rem', fontWeight: 600 }}>MTO-{queryNo}</td>
                     <td style={{ padding: '1rem' }}>{est.vendorName}</td>
                     <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                       <div>{est.goldWeight} | {est.diamondWeight || 'N/A'}</div>
                       {(est.goldRate || est.labourCharges) && (
                         <div style={{ marginTop: '0.2rem', color: 'var(--primary)' }}>
                           Rate: ₹{est.goldRate || 0} | Lab: ₹{est.labourCharges || 0}
                         </div>
                       )}
                     </td>
                     <td style={{ padding: '1rem' }}>
                       <span className={`badge ${est.isAccepted ? 'badge-success' : 'badge-warning'}`}>
                          {est.isAccepted ? 'Accepted' : 'Logged'}
                       </span>
                     </td>
                     <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>
                        {new Date(est.createdAt).toLocaleDateString()}
                     </td>
                     <td style={{ padding: '1rem', textAlign: 'right' }}>
                       <button onClick={() => handleEditClick(est)} className="btn" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem', background: 'transparent', border: '1px solid var(--surface-border)', color: 'var(--text-main)' }}>
                         Edit
                       </button>
                     </td>
                   </tr>
                 )
               })}
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
