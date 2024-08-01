"use client";

import { CartProvider } from "use-shopping-cart";

interface ShoppingCartProps {
  children: React.ReactNode;
}

export default function ShoppingCart({ children }: ShoppingCartProps) {
  if (!process.env.NEXT_PUBLIC_STRIPE_API_KEY) {
    throw new Error("Missing environment variable NEXT_PUBLIC_STRIPE_API_KEY.");
  }

  return (
    <CartProvider
      cartMode="client-only"
      mode="payment"
      shouldPersist
      successUrl="/success"
      cancelUrl="/cancel"
      allowedCountries={["UK", "US"]}
      currency="USD"
      stripe={process.env.NEXT_PUBLIC_STRIPE_API_KEY}
    >
      {children}
    </CartProvider>
  );
}
