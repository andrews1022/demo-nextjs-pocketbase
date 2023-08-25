import Link from "next/link";
import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Next.js 13 + Pocketbase",
  description: "Generated by create next app"
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
