import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Food Cost Inflation Tracker | Restaurant Menu Pricing Tool",
  description:
    "Monitor wholesale food prices and get automated menu pricing recommendations to protect your restaurant profit margins."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="1d5f33fd-70d0-4503-81b5-de43751fbaf1"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
