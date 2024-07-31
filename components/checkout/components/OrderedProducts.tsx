import { formatCurrency } from "@/lib/functions/formatCurrency";
import Image from "next/image";
import { toast } from "sonner";
import { useShoppingCart } from "use-shopping-cart";
import { Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import calculateTotalCost from "@/lib/functions/calculateTotalCost";
import { SHIPPING_RATE, TAX_RATE } from "@/lib/constants";
import { urlFor } from "@/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import QuantitySelect from "@/components/products/QuantitySelect";

export default function OrderedProducts() {
  const { cartDetails, removeItem, totalPrice } = useShoppingCart();

  return (
    <div className="bg-black p-6 sm:p-12 rounded-lg lg:w-1/3">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2>Summary</h2>
          <div className="flex flex-col gap-6 mt-6 mb-8">
            <h3 className="overhang my-4">Your order</h3>
          </div>
          <ScrollArea className="h-[450px] color-red">
            <div className="flex flex-col gap-4">
              {cartDetails &&
                Object.values(cartDetails).map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        className="h-28 w-28 rounded-lg object-cover"
                        src={`${urlFor(product.image || "").url()}`}
                        height={80}
                        width={80}
                        alt={product.name}
                      />
                      <div>
                        <p className="cart-product-title">{product.name}</p>
                        <p className="cart-product-price">
                          {formatCurrency(product.price)}
                        </p>
                        <p>Quantity: {product.quantity}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <QuantitySelect
                        id={product.id}
                        quantity={product.quantity}
                      />
                      <Button
                        title="Delete"
                        variant="outline"
                        onClick={() => {
                          removeItem(product.id);
                          toast("Product deleted");
                        }}
                      >
                        <Trash2Icon />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </ScrollArea>
        </div>
        <div>
          <div className="flex justify-between mb-6">
            <p className="text-lg uppercase font-bold">Total</p>
            <p className="cart-total">{formatCurrency(totalPrice || 0)}</p>
          </div>
          <div className="flex justify-between mb-6">
            <p className="text-lg uppercase font-bold">Shipping</p>
            <p className="cart-total">
              {totalPrice && totalPrice > 0
                ? formatCurrency(SHIPPING_RATE)
                : formatCurrency(0)}
            </p>
          </div>
          <div className="flex justify-between mb-6">
            <p className="text-lg uppercase font-bold">Vat</p>
            <p className="cart-total">
              {formatCurrency(TAX_RATE * (totalPrice || 0))}
            </p>
          </div>
          <div className="flex justify-between mb-6">
            <p className="text-lg uppercase font-bold">Grand Total</p>
            <p className="text-lg text-jasperOrange font-bold">
              {calculateTotalCost(totalPrice || 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
