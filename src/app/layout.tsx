import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "@/components/NavBar";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import SocialLinks from "@/components/SocialLinks";
import { themeInitScript } from "@/lib/theme";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Halyamov",
  description: "Halyamov's personal website with blog and portfolio.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a1e" },
    { media: "(prefers-color-scheme: light)", color: "#d096eb" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-theme / .dark / .js are set by the inline script before paint.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={
          inter.className + " relative common-container overflow-x-hidden"
        }
      >
        <BackgroundWrapper>
          <div className="relative z-[0]">
            <NavBar />
            <main className="relative z-[-3]">{children}</main>
            <SocialLinks />
          </div>
        </BackgroundWrapper>
      </body>
    </html>
  );
}
