import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const eb_gramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["800"],
});

export const metadata: Metadata = {
  title: "Giovanna Falcon Dev - Portfolio",
  description: "Created with Next | React and Framer Motion ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          eb_gramond.variable,
          "bg-[#0e0620] text-[#EFEFEF] antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
