import { Button } from "./ui/button";

export default function QuantitySelect() {
  return (
    <div className="flex gap-3 items-center bg-black w-fit">
      <Button className="quantity-btn">-</Button>
      <span className="quantity">1</span>
      <Button className="quantity-btn">+</Button>
    </div>
  );
}
