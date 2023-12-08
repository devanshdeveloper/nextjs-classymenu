"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Menu App</title>
      </head>
      <body className={`${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
