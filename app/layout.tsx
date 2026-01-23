import type { Metadata } from "next";
import "./globals.css";
import MouseMove from "@/components/common/MouseMove";

export const metadata: Metadata = {
  title: "Ancientika",
  description:
    "Ancientika is where contemporary minimalism meets modern elegance. We craft sophisticated menswear defined by clean lines, refined details, and timeless restraint. Our pieces blend sleek design with classic refinement, creating garments that feel both current and enduring. Discover a wardrobe that embodies effortless style and modern sophistication with Ancientika.",
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
