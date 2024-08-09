import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@assets/reset-styles.scss";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

// Description site
export const metadata: Metadata = {
  title: "Бери.рф",
  description: "Микрозаймы вместе с Бери.рф",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} root`}>{children}</body>
    </html>
  );
}
