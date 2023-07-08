import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

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
    <html lang="en" className="bg-image_background ">
      <body className={inter.className}>
        <Navbar />
        {children} <Footer />
      </body>
    </html>
  );
}
