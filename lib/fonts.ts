import { Manrope } from "next/font/google";
import localFont from "next/font/local";

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const morganite = localFont({
  src: "../public/fonts/Morganite-Medium.woff2",
  display: "swap",
  variable: "--font-morganite",
});
