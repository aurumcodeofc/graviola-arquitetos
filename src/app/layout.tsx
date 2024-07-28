import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";

import "../utils/styles/styles.scss";

const museo = MuseoModerno({ weight:['400', '700'],subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Graviola Arquitetos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={museo.className}>
        {children}
      </body>  
    </html>
  );
}
