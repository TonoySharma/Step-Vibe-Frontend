import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBer from "@/components/NavBer";
import AnnouncementBar from "@/components/AnnouncementBar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StrideHub | Premium Sneakers & Footwear",
  description:
    "Discover premium sneakers, stylish footwear, authentic products, fast delivery, and everyday comfort with StrideHub.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AnnouncementBar></AnnouncementBar>
        <NavBer></NavBer>
       
        {children}
        
      </body>
    </html>
  );
}
