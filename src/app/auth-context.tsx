"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Role = "SALES" | "OPERATIONS";

interface UserProfile {
  name: string;
  role: Role;
  pin: string;
}

const PIN_MAP: Record<string, UserProfile> = {
  "9999": { name: "Nitya", role: "OPERATIONS", pin: "9999" },
  "1001": { name: "Vishaka", role: "SALES", pin: "1001" },
  "1002": { name: "Intakhab", role: "SALES", pin: "1002" },
  "1003": { name: "Ankesh", role: "SALES", pin: "1003" },
  "1004": { name: "Roshan", role: "SALES", pin: "1004" },
  "1005": { name: "Sri", role: "SALES", pin: "1005" },
  "1006": { name: "Karthik", role: "SALES", pin: "1006" },
};

interface AuthContextType {
  role: Role;
  userName: string;
  isAuthenticated: boolean;
  login: (pin: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Restore session from localStorage
    const savedPin = localStorage.getItem("veda_auth_pin");
    if (savedPin && PIN_MAP[savedPin]) {
      setUser(PIN_MAP[savedPin]);
    }
    setLoading(false);
  }, []);

  const login = (pin: string) => {
    const foundUser = PIN_MAP[pin];
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("veda_auth_pin", pin);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("veda_auth_pin");
  };

  if (loading) {
    return <div style={{ minHeight: '100vh', background: 'var(--background)' }} />;
  }

  return (
    <AuthContext.Provider value={{ 
      role: user?.role || "SALES", 
      userName: user?.name || "", 
      isAuthenticated: !!user,
      login,
      logout
    }}>
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
