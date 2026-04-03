"use client";

import { useState } from 'react';
import { submitVendorEstimation, updateVendorEstimation } from '../actions/vendor';

export default function VendorEstimationsClient({ pendingQueries, history }: { pendingQueries: any[], history: any[] }) {
  const [selectedQueryId, setSelectedQueryId] = useState('');
  const [editEstId, setEditEstId] = useState<number | null>(null);
  const [isAccepted, setIsAccepted] = useState('false');
  
  // To prefill when editing
  const editingEst = history.find(h => h.id === editEstId);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedQuery = editingEst ? editingEst.mtoQuery : pendingQueries.find(q => q.id === selectedQueryId);

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
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Gold Weight *</label>
                    <input name="goldWeight" required defaultValue={editingEst?.goldWeight} placeholder="e.g. 12g" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Diamond Ct</label>
                    <input name="diamondWeight" defaultValue={editingEst?.diamondWeight} placeholder="e.g. 1.2ct" />
                  </div>
                </div>
              )}

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Vendor Remarks</label>
                <textarea name="remarks" rows={3} defaultValue={editingEst?.remarks} placeholder="Vendor quoted making charges, delivery dates, etc."></textarea>
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
                     <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>
                       {est.goldWeight} | {est.diamondWeight || 'N/A'}
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
