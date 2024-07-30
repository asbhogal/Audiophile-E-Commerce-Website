"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Icon from "../globals/Icon";
import QuantitySelect from "../products/QuantitySelect";

export type CartItemsType = {
  id: number;
  img: string;
  imgAlt: string;
  product: string;
  price: number;
};

export default function Cart() {
  const { cartDetails, cartCount, totalPrice, clearCart } = useShoppingCart();
  const navigate = useRouter();

  return (
    <div className="relative">
      {cartCount && cartCount > 0 && (
        <p className="absolute block bottom-5 left-3 w-7 text-xs">
          <span className="flex items-center justify-center border bg-chineseBlack border-jasperOrange w-7 h-7 px-2 py-1 rounded-full">
            {cartCount}
          </span>
        </p>
      )}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            aria-labelledby="open-cart"
            className="rounded-none p-0 h-[90px] md:h-[97px]"
          >
            <span id="open-cart" hidden>
              Open Cart
            </span>
            <Icon
              svgProps={{
                fill: "none",
                height: "20",
                viewBox: "0 0 24 20",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg",
              }}
            >
              <path
                id="Combined Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.01883 13.1946H8.01776C7.64161 13.1955 7.33595 13.491 7.33595 13.8542C7.33595 14.2179 7.64268 14.5139 8.01954 14.5139H20.4154C20.793 14.5139 21.099 14.8092 21.099 15.1736C21.099 15.538 20.793 15.8333 20.4154 15.8333H19.25H9.25H8.01954C6.88876 15.8333 5.96876 14.9455 5.96876 13.8542C5.96876 13.0421 6.47843 12.343 7.20493 12.0382L4.73686 1.31944H1.18359C0.806016 1.31944 0.5 1.02412 0.5 0.659722C0.5 0.295329 0.806016 0 1.18359 0H5.28516C5.6056 0 5.88295 0.214753 5.95256 0.516611L6.44122 2.63889H23.1498C23.3643 2.63889 23.5663 2.73613 23.6956 2.9014C23.8246 3.06668 23.8659 3.28074 23.807 3.47986L21.0726 12.716C20.9888 12.9991 20.7205 13.1944 20.4154 13.1944H8.0215L8.01883 13.1946ZM9.25 15.8333C10.3987 15.8333 11.3333 16.7679 11.3333 17.9167C11.3333 19.0654 10.3987 20 9.25 20C8.10127 20 7.16667 19.0654 7.16667 17.9167C7.16667 16.7679 8.10127 15.8333 9.25 15.8333ZM19.25 15.8333C20.3987 15.8333 21.3333 16.7679 21.3333 17.9167C21.3333 19.0654 20.3987 20 19.25 20C18.1013 20 17.1667 19.0654 17.1667 17.9167C17.1667 16.7679 18.1013 15.8333 19.25 15.8333ZM19.8997 11.875L22.2435 3.95833H6.74492L8.56784 11.875H19.8997ZM9.94444 17.9167C9.94444 17.5338 9.63285 17.2222 9.25 17.2222C8.86715 17.2222 8.55556 17.5338 8.55556 17.9167C8.55556 18.2995 8.86715 18.6111 9.25 18.6111C9.63285 18.6111 9.94444 18.2995 9.94444 17.9167ZM19.25 17.2222C19.6328 17.2222 19.9444 17.5338 19.9444 17.9167C19.9444 18.2995 19.6328 18.6111 19.25 18.6111C18.8672 18.6111 18.5556 18.2995 18.5556 17.9167C18.5556 17.5338 18.8672 17.2222 19.25 17.2222Z"
                fill="white"
              />
            </Icon>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-chineseBlack max-w-[23.5625rem] w-full h-fit border border-antiFlashWhite rounded-lg pt-8 absolute top-24 cart"
        >
          <SheetHeader>
            <div className="flex items-center justify-between">
              <SheetTitle className="overhang">Cart ({cartCount})</SheetTitle>
              {cartCount && cartCount >= 0 && (
                <Button
                  onClick={() => {
                    clearCart();
                    toast("Cart cleared");
                  }}
                  className="cart-remove-button"
                >
                  Remove all
                </Button>
              )}
            </div>
            <SheetDescription>
              <React.Fragment>
                <div className="flex flex-col gap-6 mt-6 mb-8">
                  <p>Products</p>
                  {cartDetails &&
                    Object.values(cartDetails).map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <Image
                            className="bg-black p-3 rounded-lg"
                            src={`/ images / products / thumbnails / ${product.image}`}
                            height={80}
                            width={80}
                            alt={product.name}
                          />
                          <div>
                            <p className="cart-product-title">{product.name}</p>
                            <p className="cart-product-price">
                              {product.value}
                            </p>
                          </div>
                        </div>
                        <QuantitySelect />
                      </div>
                    ))}
                </div>
                <div className="flex justify-between mb-6">
                  <p className="cart-total-title">Total</p>
                  <p className="cart-total">{totalPrice}</p>
                </div>
                {cartCount && cartCount > 0 ? (
                  <SheetClose asChild>
                    <Button
                      type="button"
                      className="w-full rounded-none cart-checkout-button font-bold hover:bg-black hover:text-antiFlashWhite transition"
                      onClick={() => navigate.push("/checkout")}
                    >
                      Checkout
                    </Button>
                  </SheetClose>
                ) : null}
              </React.Fragment>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
