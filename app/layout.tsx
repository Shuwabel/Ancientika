import type { Metadata } from "next";
import "./globals.css";
import MouseMove from "@/components/common/MouseMove";

export const metadata: Metadata = {
  title: "Ancientika",
  description: "A Brand for Yound People Who Love Modern Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <MouseMove />
        {children}
      </body>
    </html>
  );
}
