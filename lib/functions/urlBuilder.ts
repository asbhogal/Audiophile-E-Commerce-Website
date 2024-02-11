import { builder } from "@/client";

export function urlFor(source: string) {
  return builder.image(source);
}
