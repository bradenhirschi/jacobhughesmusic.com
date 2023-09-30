import Sidenav from "@/components/sidenav";
import "./globals.css";
import type { Metadata } from "next";
import MobileMenu from "@/components/mobile-menu";

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
          <div className="hidden md:flex">
            <Sidenav />
          </div>
          <div className="flex md:hidden">
            <MobileMenu />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
