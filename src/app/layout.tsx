import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rwanda Computing Olympiad",
  description: "Rwanda Computing Olympiad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body>
          {children}
        </body>
      </html>
  );
}
