import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
// import { Header } from "@/components/layouts/Header";
import { VersionProvider } from "@/contexts/VersionContext";

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
      <body>
        <VersionProvider>
          {/* <Header /> */}
          {children}
        </VersionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
