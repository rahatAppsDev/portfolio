import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/projectsfolder/calculatorcomps/Calculatorpage/Calculatorpage.css";
import Navbar from "@/components/Navbar/Navbar"
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
