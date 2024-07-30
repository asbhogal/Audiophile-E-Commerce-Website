import { z } from "zod";

export const checkoutFormSchema = z.object({
  address: z.string().min(5, { message: "Must be 5 or more characters long" }),
  cell: z.string().min(5, { message: "Must be 5 or more characters long" }),
  city: z.string().min(5, { message: "Must be 5 or more characters long" }),
  country: z.string().min(3, { message: "Must be 5 or more characters long" }),
  email: z.string().email(),
  name: z.string().min(5, { message: "Must be 5 or more characters long" }),
  payment: z.enum(["stripe", "cash on delivery"], {
    required_error: "Please select a payment method",
  }),
  zip: z.string().min(5, { message: "Must be 5 or more characters long" }),
});
