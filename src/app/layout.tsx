import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./auth-context";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Veda MTO System",
  description: "Make-to-Order Lifecycle Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <main style={{ flex: 1, padding: '2rem', marginLeft: '260px' }}>
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
