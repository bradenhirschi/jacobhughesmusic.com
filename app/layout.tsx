import Sidenav from "@/components/sidenav";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacob Hughes",
  description: "Portfolio website for singer/songwriter Jacob Hughes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-yellow-50"}>
        <div className="flex relative">
          <Sidenav />
          {children}
        </div>
      </body>
    </html>
  );
}
