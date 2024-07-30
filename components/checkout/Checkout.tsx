"use client";

import BillingForm from "./components/BillingForm";
import OrderedProducts from "./components/OrderedProducts";

export function Checkout() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="bg-black p-6 sm:p-12 rounded-lg md:w-2/3">
        <h1>Checkout</h1>
        <BillingForm />
      </div>
      <OrderedProducts />
    </div>
  );
}
