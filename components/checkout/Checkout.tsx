"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/functions/formatCurrency";
import { staticCartItems } from "./Cart";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";

const CheckoutFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  cell: z.string(),
  address: z.string(),
  zip: z.string(),
  city: z.string(),
  country: z.string(),
  type: z.enum(["stripe", "cash on delivery"], {
    required_error: "Please select a payment method",
  }),
});

export default function Checkout() {
  const form = useForm<z.infer<typeof CheckoutFormSchema>>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues: {
      name: "",
      email: "",
      cell: "",
      address: "",
      zip: "",
      city: "",
      country: "",
    },
  });

  function onSubmit(data: z.infer<typeof CheckoutFormSchema>) {
    console.log(data);
  }

  return (
    <div className="flex gap-8">
      <div className="bg-black p-12 rounded-lg w-3/4">
        <h1>Checkout</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}></form>
          <FormField
            control={form.control}
            name="name"
            render={({ ...field }) => (
              <FormItem>
                <FormLabel className="form-label">Username</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </Form>

        <section>
          <h2 className="overhang">Billing Details</h2>
        </section>
        <section>
          <h2 className="overhang">Shipping Info</h2>
        </section>
        <section>
          <h2 className="overhang">Payment Method</h2>
        </section>
      </div>
      <div className="bg-black p-12 rounded-lg w-1/4">
        <form>
          <div className="flex flex-col gap-6 mt-6 mb-8">
            {staticCartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    className="bg-black p-3 rounded-lg"
                    src={`/images/products/thumbnails/${item.img}`}
                    height={80}
                    width={80}
                    alt={item.imgAlt}
                  />
                  <div>
                    <p className="cart-product-title">{item.product}</p>
                    <p className="cart-product-price">
                      {formatCurrency(item.price)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mb-6">
            <p className="cart-total-title">Total</p>
            <p className="cart-total">{formatCurrency(5396)}</p>
          </div>
          <div className="flex justify-between mb-6">
            <p className="cart-total-title">Shipping</p>
            <p className="cart-total">{formatCurrency(5396)}</p>
          </div>
          <div className="flex justify-between mb-6">
            <p className="cart-total-title">Vat (incl.)</p>
            <p className="cart-total">{formatCurrency(5396)}</p>
          </div>
          <div className="flex justify-between mb-6">
            <p className="cart-total-title">Grand Total</p>
            <p className="cart-total">{formatCurrency(5396)}</p>
          </div>
          <Button className="w-full rounded-none cart-checkout-button font-bold hover:bg-black hover:text-antiFlashWhite transition">
            Checkout
          </Button>
        </form>
      </div>
    </div>
  );
}
