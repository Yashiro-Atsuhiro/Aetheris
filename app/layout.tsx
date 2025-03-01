import type { Metadata } from "next";
import { Abhaya_Libre,Noto_Sans_JP } from "next/font/google";
import "./css/globals.css";

const notosansjp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['500']
})

const abhayaLibre = Abhaya_Libre({
  subsets: ['latin'],
  weight: ['500']
})

export const metadata: Metadata = {
  title: "artist",
  description: "アーティストである",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body style={{ 
        fontFamily: `${abhayaLibre.style.fontFamily}, ${notosansjp.style.fontFamily}, Arial, Helvetica, sans-serif`
      }}>
        {children}
      </body>
    </html>
  );
}
