"use client";
import "./globals.css";
import { inter } from "./ui/fonts";
import useLenisScroll from "@/app/hooks/useLenisScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenisScroll();
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
