"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '../app/auth-context';
import { Diamond, Delete, XCircle } from 'lucide-react';

export default function LoginScreen() {
  const { login } = useAuth();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handleNumberClick = (num: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + num);
      setError(false);
    }
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
    setError(false);
  };

  useEffect(() => {
    if (pin.length === 4) {
      const success = login(pin);
      if (!success) {
        setError(true);
        setTimeout(() => setPin(""), 500); // Clear after shake
      }
    }
  }, [pin, login]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--background)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="glass-panel" style={{ 
        width: '100%', 
        maxWidth: '400px', 
        padding: '3rem 2rem',
        textAlign: 'center',
        border: error ? '1px solid var(--danger)' : '1px solid var(--surface-border)',
        transform: error ? 'translateX(0)' : 'none',
        animation: error ? 'shake 0.4s ease' : 'none'
      }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <img src="/veda-logo.png" alt="VEDA" style={{ width: '220px', marginBottom: '1.5rem' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '0.1em' }}>ENTER ACCESS PIN</p>
        </div>

        {/* PIN Indicators */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1.25rem', 
          marginBottom: '3rem' 
        }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ 
              width: '16px', 
              height: '16px', 
              borderRadius: '50%', 
              border: '2px solid var(--surface-border)',
              background: i < pin.length ? 'var(--primary)' : 'transparent',
              transition: 'all 0.2s ease',
              boxShadow: i < pin.length ? '0 0 10px var(--primary)' : 'none'
            }} />
          ))}
        </div>

        {/* Numpad */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '1rem',
          maxWidth: '280px',
          margin: '0 auto'
        }}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(num => (
            <button 
              key={num}
              onClick={() => handleNumberClick(num)}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--surface-border)',
                borderRadius: '50%',
                width: '64px',
                height: '64px',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
            >
              {num}
            </button>
          ))}
          <div /> {/* Empty space */}
          <button 
            onClick={() => handleNumberClick('0')}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--surface-border)',
              borderRadius: '50%',
              width: '64px',
              height: '64px',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            0
          </button>
          <button 
            onClick={handleDelete}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--surface-border)',
              borderRadius: '50%',
              width: '64px',
              height: '64px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)'
            }}
          >
            <Delete size={24} />
          </button>
        </div>

        {error && (
          <div style={{ marginTop: '2rem', color: 'var(--danger)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <XCircle size={16} /> INCORRECT PIN
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-10px); }
          40%, 80% { transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
}
