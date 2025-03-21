import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "tech blog",
  description: "最新のWeb開発技術とベストプラクティスについて、実践的な知識を共有するテックブログです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
