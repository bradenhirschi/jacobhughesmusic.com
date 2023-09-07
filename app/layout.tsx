import Sidenav from "@/components/sidenav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musician website",
  description: "Concept website for a musician",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidenav />
          {children}
        </div>
      </body>
    </html>
  );
}
