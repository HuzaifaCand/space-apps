import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "Parade scn",
  description: "We winning this bros",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
