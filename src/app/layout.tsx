import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@root/components/main-header";
import Footer from "@root/components/footer";
import Background from "@root/components/background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Store",
  description:
    "Order souvenirs delivered to your AirBnb available at your arrival",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Background />
        <div className="relative z-10">
          <MainHeader />
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {children}
          </div>
          <div className="w-full bg-black bg-opacity-60 backdrop-blur-sm p-4 mt-8">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
