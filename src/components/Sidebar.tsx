"use client";

import React from 'react';
import { useAuth, Role } from '../app/auth-context';
import styles from './Sidebar.module.css';
import { 
  Diamond, 
  LayoutDashboard, 
  Briefcase, 
  Calculator, 
  Package, 
  Building2, 
  ClipboardCheck, 
  TrendingUp, 
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

export default function Sidebar({ isCollapsed = false, onToggle }: SidebarProps) {
  const { role, userName, logout } = useAuth();
  const pathname = usePathname();

  const menuItems = [
    { label: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/', roles: ['SALES', 'OPERATIONS'] },
    { label: 'Queries', icon: <Briefcase size={20} />, href: '/mtos', roles: ['SALES', 'OPERATIONS'] },
    { label: 'Vendor Estimates', icon: <Building2 size={20} />, href: '/vendor-estimations', roles: ['OPERATIONS'] },
    { label: 'Estimations for Customer', icon: <Calculator size={20} />, href: '/estimations', roles: ['SALES', 'OPERATIONS'] },
    { label: 'MTO and Advance', icon: <Package size={20} />, href: '/orders-sales', roles: ['SALES', 'OPERATIONS'] },
    { label: 'CAD Upload', icon: <ImageIcon size={20} />, href: '/active-orders', roles: ['OPERATIONS'] },
    { label: 'Purchase Orders', icon: <Building2 size={20} />, href: '/orders', roles: ['OPERATIONS'] },
    { label: 'Production & QC', icon: <ClipboardCheck size={20} />, href: '/qc', roles: ['OPERATIONS'] },
    { label: 'Pricing Hub', icon: <TrendingUp size={20} />, href: '/pricing', roles: ['OPERATIONS'] },
  ];

  const visibleItems = menuItems.filter(item => item.roles.includes(role));

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''} glass-panel`}>
      <header className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
          <img src="/veda-logo.png" alt="VEDA" style={{ 
            height: isCollapsed ? '32px' : '45px', 
            width: 'auto',
            transition: 'all 0.3s ease',
            margin: isCollapsed ? '0 auto' : '0'
          }} />
        </div>
        <button 
          onClick={onToggle}
          className={styles.collapseToggle}
          title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </header>

      <nav className={styles.nav}>
        {visibleItems.map(item => {
           const isActive = pathname === item.href;
           return (
             <Link 
               key={item.label} 
               href={item.href} 
               className={`${styles.navItem} ${isActive ? styles.active : ''}`}
               title={isCollapsed ? item.label : ''}
              >
               <span className={styles.icon}>{item.icon}</span>
               {!isCollapsed && <span className={styles.label}>{item.label}</span>}
             </Link>
           );
        })}
      </nav>

      <div className={styles.footer}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className={styles.userProfile}>
            <div className={styles.avatar}>
              {userName.charAt(0)}
            </div>
            {!isCollapsed && (
              <div className={styles.userInfo}>
                <p className={styles.userName}>{userName}</p>
                <p className={styles.userRole}>{role === 'SALES' ? 'Store Staff' : 'Operations'}</p>
              </div>
            )}
          </div>
          
          <button 
             onClick={logout}
             className={styles.collapseToggle} 
             title="Logout"
             style={{ 
               background: 'rgba(239, 68, 68, 0.1)', 
               color: 'var(--danger)', 
               border: '1px solid rgba(239, 68, 68, 0.2)' 
             }}
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
