const CURRENCY_CONVERTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CURRENCY_CONVERTER.format(number);
}
