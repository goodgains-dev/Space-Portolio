import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsWithParticles from "@/components/main/StarsWithParticles";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Sidebar from "@/components/main/Sidebar"; // Import Sidebar from the correct file path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsWithParticles />
        <Sidebar /> {/* Add Sidebar component here */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
