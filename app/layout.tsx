import "./globals.css";
import { instrument_Sans } from "./ui/fonts";
import LenisScrollContainer from "./hooks/useLenisScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={`${instrument_Sans.className} antialiased`}>
        <LenisScrollContainer>{children}</LenisScrollContainer>
      </body>
    </html>
  );
}
