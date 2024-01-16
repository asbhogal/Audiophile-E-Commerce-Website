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
  name: z.string().min(5, { message: "Must be 5 or more characters long" }),
  email: z.string().email(),
  cell: z.string().min(5, { message: "Must be 5 or more characters long" }),
  address: z.string().min(5, { message: "Must be 5 or more characters long" }),
  zip: z.string().min(5, { message: "Must be 5 or more characters long" }),
  city: z.string().min(5, { message: "Must be 5 or more characters long" }),
  country: z.string().min(3, { message: "Must be 5 or more characters long" }),
  payment: z.enum(["stripe", "cash on delivery"], {
    required_error: "Please select a payment method",
  }),
});

export function Checkout() {
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
    <div className="flex flex-col md:flex-row gap-8">
      <div className="bg-black p-6 sm:p-12 rounded-lg md:w-2/3">
        <h1>Checkout</h1>

        <Form {...form}>
          <form
            className="flex flex-col gap-8 sm:gap-12"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <section>
              <h2 className="overhang my-4">Billing Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Username</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-black border border-jasperOrange active:outline-jasperOrange text-antiFlashWhite"
                          placeholder="John Doe"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-black border border-jasperOrange active:outline-jasperOrange text-antiFlashWhite"
                          placeholder="example@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cell"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Cell Number</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-black border border-jasperOrange active:outline-jasperOrange text-antiFlashWhite"
                          placeholder="+1-800-33243"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
              </div>
            </section>
            <section>
              <h2 className="overhang mb-4">Shipping Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Address</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-black border border-jasperOrange active:outline-jasperOrange text-antiFlashWhite"
                          placeholder="1 Argyle Way"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Zip Code</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-black border border-jasperOrange active:outline-jasperOrange text-antiFlashWhite"
                          placeholder="1234-978"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">City</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-black border border-jasperOrange active:outline-jasperOrange text-antiFlashWhite"
                          placeholder="Dallas"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Country</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-black border border-jasperOrange active:outline-jasperOrange text-antiFlashWhite"
                          placeholder="United States"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
              </div>
            </section>
            <section>
              <h2 className="overhang mb-4">Payment Method</h2>
              <FormField
                control={form.control}
                name="payment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Payment Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem
                              value="stripe"
                              id="stripe-btn"
                              aria-label="Stripe"
                            />
                          </FormControl>
                          <FormLabel
                            className="form-label"
                            htmlFor="stripe-btn"
                          >
                            Stripe
                          </FormLabel>
                        </FormItem>
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem
                              value="cash on delivery"
                              id="cash-on-delivery-btn"
                              aria-label="cash on delivery"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="cash-on-delivery-btn"
                            className="form-label"
                          >
                            Cash On Delivery
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </section>
            <Button
              type="submit"
              className="bg-jasperOrange uppercase font-bold border border-black hover:bg-black hover:text-jasperOrange hover:border hover:border-jasperOrange"
            >
              Checkout & Pay
            </Button>
          </form>
        </Form>
      </div>
      <div className="bg-black p-6 sm:p-12 rounded-lg md:w-1/3">
        <h2>Summary</h2>
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
              <p>x1</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mb-6">
          <p className="text-lg uppercase font-bold">Total</p>
          <p className="cart-total">{formatCurrency(5396)}</p>
        </div>
        <div className="flex justify-between mb-6">
          <p className="text-lg uppercase font-bold">Shipping</p>
          <p className="cart-total">{formatCurrency(50)}</p>
        </div>
        <div className="flex justify-between mb-6">
          <p className="text-lg uppercase font-bold">Vat (incl.)</p>
          <p className="cart-total">{formatCurrency(5396)}</p>
        </div>
        <div className="flex justify-between mb-6">
          <p className="text-lg uppercase font-bold">Grand Total</p>
          <p className="text-lg text-jasperOrange font-bold">
            {formatCurrency(5446)}
          </p>
        </div>
      </div>
    </div>
  );
}
