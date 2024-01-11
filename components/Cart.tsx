import Image from "next/image";
import QuantitySelect from "./QuantitySelect";
import { formatCurrency } from "@/lib/functions/formatCurrency";
import { Button } from "./ui/button";

type CartItemsType = {
  id: number;
  img: string;
  product: string;
  price: number;
};

const staticCartItems: CartItemsType[] = [
  {
    id: 1,
    img: "XX99-MK-II.png",
    product: "XX99 MK II",
    price: 2999,
  },
  {
    id: 2,
    img: "XX59.png",
    product: "XX59",
    price: 899,
  },
  {
    id: 3,
    img: "YX1.png",
    product: "YX1",
    price: 599,
  },
];

export default function Cart() {
  return (
    <form>
      <div className="flex flex-col gap-6">
        {staticCartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                className="bg-black p-3 rounded-lg"
                src={`/images/products/thumbnails/${item.img}`}
                height={80}
                width={80}
                alt=""
              />
              <div>
                <p className="cart-product-title">{item.product}</p>
                <p className="cart-product-price">
                  {formatCurrency(item.price)}
                </p>
              </div>
            </div>
            <QuantitySelect />
          </div>
        ))}
      </div>
      <Button className="bg-jasperOrange w-full cart-checkout-button">
        Checkout
      </Button>
    </form>
  );
}
