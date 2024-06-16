import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const glory = localfont({
  src: "../fonts/Gilroy-Regular.ttf",
  variable: "--Glory-font",
});

export const metadata: Metadata = {
  title: "Kandarp's Portfolio",
  description: "Personal Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={glory.variable}>{children}</body>
    </html>
  );
}
