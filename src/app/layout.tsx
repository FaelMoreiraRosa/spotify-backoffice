import type { ReactNode } from "react";
// @ts-ignore: CSS module import type declarations are not present in this project setup
import "./globals.css";

export const metadata = {
  title: "Spotify - Web Player: música para todos",
  description:
    "O Spotify é um serviço de música digital que dá acesso a milhões de músicas. Ouça o que quiser, quando quiser.",
  generator: "v0.app",
};

export const viewport = {
  colorScheme: "dark",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
