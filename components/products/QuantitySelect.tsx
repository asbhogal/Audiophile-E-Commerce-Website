import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";

export default function QuantitySelect() {
  const { incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex gap-3 items-center bg-black w-fit">
      <Button className="quantity-button" onClick={() => incrementItem}>
        -
      </Button>
      <span className="quantity">0</span>
      <Button className="quantity-button" onClick={() => decrementItem}>
        +
      </Button>
    </div>
  );
}
