import type { Metadata } from "next";
import "../styles/globals.css";
import localFont from "next/font/local";
import {
  Geist,
  Geist_Mono,
  Roboto,
  Bungee_Shade,
  Inter,
  Galdeano,
  DM_Sans,
  Poppins,
} from "next/font/google";

const lemon = localFont({
  src: [
    { path: "../public/fonts/Lemon-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-lemon",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const bungeeShade = Bungee_Shade({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee-shade",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const galdeano = Galdeano({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-galdeano",
});
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EarthLoop — Sustainability Product Prototype",
  description:
    "A sustainability-focused frontend prototype exploring carbon accounting and ESG product experiences for SMEs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lemon.variable} ${roboto.variable} ${bungeeShade.variable} ${inter.variable} ${galdeano.variable} ${dmSans.variable} ${poppins.variable}`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "#ffffff" }}
      >
        {children}
      </body>
    </html>
  );
}
