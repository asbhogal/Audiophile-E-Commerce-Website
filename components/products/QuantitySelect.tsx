import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";

interface QuantitySelectProps {
  id: string;
  quantity: number;
}

export default function QuantitySelect({ id, quantity }: QuantitySelectProps) {
  const { incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex gap-3 items-center bg-black w-fit">
      <Button
        title="Reduce quantity"
        className="quantity-button"
        onClick={() => decrementItem(id)}
      >
        -
      </Button>
      <span className="quantity">{quantity}</span>
      <Button
        title="Increase quantity"
        className="quantity-button"
        onClick={() => incrementItem(id)}
      >
        +
      </Button>
    </div>
  );
}
