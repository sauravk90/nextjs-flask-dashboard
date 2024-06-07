import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNavBar from "@/components/side-navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dahboard",
  description: "Dashboard for monitoring processing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex ",
          inter.className,
          {
            "debug-screens": process.env.NODE_ENV === "development",
          }
        )}
      >
        <SideNavBar />
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
