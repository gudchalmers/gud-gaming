import type { Metadata } from "next";
import { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "G.U.D. Gaming",
  description: "Portal for G.U.D. Gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-950 font-sans text-slate-100 antialiased`}>{children}</body>
    </html>
  );
}
