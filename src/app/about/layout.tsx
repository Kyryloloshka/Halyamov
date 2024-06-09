import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Halyamov",
  description: "About Halyamov, his education, and his work experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
