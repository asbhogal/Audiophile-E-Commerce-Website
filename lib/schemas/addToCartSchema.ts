import { z } from "zod";

export const addToCartSchema = z.object({
  quantity: z.string().min(1).max(10),
});
