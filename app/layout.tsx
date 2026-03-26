import type { Metadata } from "next";
import { Inter, Quicksand, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/Provider";
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Loadlink",
  description:
    "Loadlink connects businesses and individuals with trusted truck owners to safe and reliable freight transportation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <Providers>
        <body className={`${quicksand.variable} antialiased`}>{children}</body>
      </Providers>
    </html>
  );
}
