import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js & Sanity Test Site",
  description: "Created to test the functionality of Next.js & Sanity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
