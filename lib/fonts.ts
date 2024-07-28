import { Manrope } from "next/font/google";
import localFont from "next/font/local";

export const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const morganite = localFont({
  display: "swap",
  src: "../public/fonts/Morganite-Medium.woff2",
  variable: "--font-morganite",
});
