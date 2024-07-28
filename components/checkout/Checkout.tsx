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
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CheckoutFormSchema = z.object({
  address: z.string().min(5, { message: "Must be 5 or more characters long" }),
  cell: z.string().min(5, { message: "Must be 5 or more characters long" }),
  city: z.string().min(5, { message: "Must be 5 or more characters long" }),
  country: z.string().min(3, { message: "Must be 5 or more characters long" }),
  email: z.string().email(),
  name: z.string().min(5, { message: "Must be 5 or more characters long" }),
  payment: z.enum(["stripe", "cash on delivery"], {
    required_error: "Please select a payment method",
  }),
  zip: z.string().min(5, { message: "Must be 5 or more characters long" }),
});

export function Checkout() {
  const form = useForm<z.infer<typeof CheckoutFormSchema>>({
    defaultValues: {
      address: "",
      cell: "",
      city: "",
      country: "",
      email: "",
      name: "",
      zip: "",
    },
    resolver: zodResolver(CheckoutFormSchema),
  });

  function onSubmit(data: z.infer<typeof CheckoutFormSchema>) {
    // console.log(data);
    toast(`${data}`);
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
                        className="radio-group"
                      >
                        <FormItem className="border border-jasperOrange rounded-lg w-max p-4 flex items-center gap-4">
                          <FormControl className="radio-group-item">
                            <RadioGroupItem
                              value="stripe"
                              id="stripe-btn"
                              aria-label="Stripe"
                              className="radio-group-indicator"
                            />
                          </FormControl>
                          <FormLabel className="sr-only" htmlFor="stripe-btn">
                            Stripe
                          </FormLabel>
                          <Image
                            src="/logos/Stripe-wordmark-blurple(small).png"
                            alt="Stripe logo"
                            width={75}
                            height={25}
                          />
                        </FormItem>
                        <FormItem className="border border-jasperOrange rounded-lg w-max p-4 flex items-center gap-4">
                          <FormControl className="radio-group-item">
                            <RadioGroupItem
                              value="cash on delivery"
                              id="cash-on-delivery-btn"
                              aria-label="cash on delivery"
                              className="radio-group-indicator"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="cash-on-delivery-btn"
                            className="form-label "
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
          <p>Product list</p>
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
