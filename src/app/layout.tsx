import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./auth-context";
import LayoutWrapper from "./LayoutWrapper";

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
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
