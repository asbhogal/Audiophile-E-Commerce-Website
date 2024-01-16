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
      <div className="pb-4">
        <Link href="/" className="text-jasperOrange uppercase font-bold">
          Go Back
        </Link>
      </div>
      <Checkout />
    </>
  );
}
