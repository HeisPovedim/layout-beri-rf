import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

// #Описание сайта
export const metadata: Metadata = {
  title: "Бери.рф",
  description: "Микрозаймы вместе с Бери.рф",
};

// ^Основная страница
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} root`}>{children}</body>
    </html>
  );
}
