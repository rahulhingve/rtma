import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SessionWraper from "@/components/SessionWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MeetHub",
  description: "Video Call with MeetHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <SessionWraper>
      
      <html lang="en" className="!scroll-smooth">
      
        <body className={inter.className}>
        
          {children}
          
        </body>
      </html>
    </SessionWraper>

  );
}