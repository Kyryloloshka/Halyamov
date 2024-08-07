import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "@/components/NavBar";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import StoreProvider from "@/components/StoreProvider";
import TransitionProvider from "@/components/TransitionProvider";
import SocialLinks from "@/components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Halyamov",
  description: "Halyamov&apos;s personal website with blog and portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={
          inter.className + " relative common-container overflow-x-hidden"
        }
      >
        <StoreProvider>
          <BackgroundWrapper>
            <div className="relative z-[0]">
              <NavBar />
              <TransitionProvider>
                <main className="relative z-[-3]">{children}</main>
              </TransitionProvider>
              <SocialLinks />
            </div>
          </BackgroundWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
