"use client";

import { CartProvider } from "use-shopping-cart";

interface ShoppingCartProps {
  children: React.ReactNode;
}

export default function ShoppingCart({ children }: ShoppingCartProps) {
  return (
    <CartProvider
      cartMode="client-only"
      mode="payment"
      shouldPersist
      successUrl="/"
      cancelUrl="/"
      allowedCountries={["UK", "US"]}
      currency="USD"
      stripe={process.env.NEXT_PUBLIC_STRIPE_API_KEY as string}
    >
      {children}
    </CartProvider>
  );
}
