"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Role = "SALES" | "OPERATIONS";

interface AuthContextType {
  role: Role;
  setRole: (role: Role) => void;
  userName: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("SALES");

  const userName = 
    role === "SALES" ? "Sarah (Sales)" : "Olivia (Ops)";

  return (
    <AuthContext.Provider value={{ role, setRole, userName }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
