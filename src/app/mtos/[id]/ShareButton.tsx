"use client";

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';

export default function ShareButton({ queryId }: { queryId: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    // Generate absolute URL for the share link
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
    const shareUrl = `${origin}/share/${queryId}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(err => {
      console.error('Failed to copy link: ', err);
      prompt("Copy this link to share:", shareUrl);
    });
  };

  return (
    <button 
      onClick={handleShare} 
      className="btn" 
      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: '1px solid var(--info)', color: 'var(--info)', fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}
    >
      {copied ? <Check size={14} /> : <Share2 size={14} />}
      {copied ? 'Link Copied!' : 'Share Specs'}
    </button>
  );
}
