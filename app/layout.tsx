import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Victor Boynton",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gradient from-slate-600 to-slate-900">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
