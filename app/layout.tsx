import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/app/components";
import { Providers } from "@/app/context";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marvel Search Engine",
  description: "This app provides you a search engine for Marvel Heroes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
