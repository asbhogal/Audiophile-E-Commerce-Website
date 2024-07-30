import { SHIPPING_RATE, TAX_RATE } from "../constants";
import { formatCurrency } from "./formatCurrency";

export default function calculateTotalCost(cost: number): string {
  return formatCurrency(cost + SHIPPING_RATE * TAX_RATE);
}
