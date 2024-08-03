import Stripe from "stripe";

if (!process.env.NEXT_PUBLIC_STRIPE_TEST_KEY) {
  throw new Error("Missing environment variable NEXT_PUBLIC_STRIPE_TEST_KEY.");
}

export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_TEST_KEY, {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  apiVersion: "2024-06-20; custom_checkout_beta=v1" as any,
  appInfo: {
    name: "audiophile",
    url: process.env.BASE_URL,
  },
});

export default async function stripePaymentMethod() {
  const paymentMethod = await stripe.paymentMethods.create({
    card: {
      cvc: "314",
      exp_month: 12,
      exp_year: 2025,
      number: "4242424242424242",
    },
    type: "card",
  });

  return paymentMethod;
}
