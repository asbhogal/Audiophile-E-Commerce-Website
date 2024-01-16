import { Checkout } from "@/components/checkout/Checkout";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout | Audiophile",
  description: "Checkout",
};

export default function Page() {
  return (
    <>
      <Link href="/">Go Back</Link>
      <Checkout />;
    </>
  );
}
