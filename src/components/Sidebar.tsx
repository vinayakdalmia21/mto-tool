"use client";

import React from 'react';
import { useAuth, Role } from '../app/auth-context';
import styles from './Sidebar.module.css';
import { 
  Diamond, 
  LayoutDashboard, 
  Briefcase, 
  Calculator, 
  CreditCard, 
  Package, 
  Building2, 
  ClipboardCheck, 
  FileText,
  Settings,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const { role, setRole, userName } = useAuth();
  const pathname = usePathname();

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value as Role);
  };

  const menuItems = [
    { label: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/', roles: ['SALES', 'MANAGER', 'OPERATIONS'] },
    { label: 'CRM & MTOs', icon: <Briefcase size={20} />, href: '/mtos', roles: ['SALES', 'MANAGER'] },
    { label: 'Estimations', icon: <Calculator size={20} />, href: '/estimations', roles: ['SALES', 'MANAGER'] },
    { label: 'My Orders', icon: <Package size={20} />, href: '/orders-sales', roles: ['SALES', 'MANAGER'] },
    { label: 'Vendor Estimates', icon: <Calculator size={20} />, href: '/vendor-estimations', roles: ['OPERATIONS', 'MANAGER'] },
    { label: 'Active Orders', icon: <FileText size={20} />, href: '/active-orders', roles: ['OPERATIONS', 'MANAGER'] },
    { label: 'Pricing Hub', icon: <TrendingUp size={20} />, href: '/pricing', roles: ['OPERATIONS', 'MANAGER'] },
    { label: 'Purchase Orders', icon: <Building2 size={20} />, href: '/orders', roles: ['OPERATIONS', 'MANAGER'] },
    { label: 'Production & QC', icon: <ClipboardCheck size={20} />, href: '/qc', roles: ['OPERATIONS', 'MANAGER'] },
  ];

  const visibleItems = menuItems.filter(item => item.roles.includes(role));

  return (
    <aside className={`${styles.sidebar} glass-panel`}>
      <div className={styles.header}>
        <Diamond size={28} className={styles.brandIcon} />
        <span className={styles.brandName}>VEDA MTO</span>
      </div>

      <div className={styles.roleSelector}>
        <label>View As:</label>
        <select value={role} onChange={handleRoleChange} className={styles.select}>
          <option value="SALES">Store Staff</option>
          <option value="OPERATIONS">Operations</option>
          <option value="MANAGER">Store Manager</option>
        </select>
      </div>

      <nav className={styles.nav}>
        {visibleItems.map(item => {
           const isActive = pathname === item.href;
           return (
             <Link key={item.label} href={item.href} className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
               <span className={styles.icon}>{item.icon}</span>
               {item.label}
             </Link>
           );
        })}
      </nav>

      <div className={styles.footer}>
        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            {userName.charAt(0)}
          </div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>{userName}</p>
            <p className={styles.userRole}>{role}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
