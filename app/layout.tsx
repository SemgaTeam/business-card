import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import Snow from "./components/Show";

const inter = Inter({ subsets: ["latin"]});

 export const metadata: Metadata = {
  title: "Semga Team",
  description: "Пишем сайты для вас, быстро и без головной боли, пап, мам и посредников.",
   icons: {
    icon: "/favicon.ico",
  },
 };

 export default function RootLayout(
  { children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
      <html lang="ru">
        <Snow/>
        <body className={inter.className}>{children}</body>
      </html>
    );
 }