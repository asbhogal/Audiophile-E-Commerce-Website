import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing environment variable STRIPE_SECRET_KEY.");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "audiophile",
    url: process.env.BASE_URL,
  },
});
