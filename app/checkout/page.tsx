import { Checkout } from "@/components/checkout/Checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Audiophile",
  description: "Checkout",
};

export default function Page() {
  return <Checkout />;
}
