import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/layouts/Header";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joyful-Sun Data Integration",
  description: "Joyful Sun data integration with Next.js",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body
      // className={notoSansJP.className}
      >
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
