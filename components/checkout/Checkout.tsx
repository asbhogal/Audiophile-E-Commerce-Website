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
import { error } from "console";

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
    <div className="flex flex-col sm:flex-row gap-8">
      <div className="bg-black p-6 sm:p-12 rounded-lg sm:w-3/4">
        <h1>Checkout</h1>

        <Form {...form}>
          <form
            className="flex flex-col gap-8 sm:gap-12"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <section>
              <h2 className="overhang">Billing Details</h2>
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
                      <FormMessage />
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
                      <FormMessage />
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </section>
            <section>
              <h2 className="overhang">Shipping Info</h2>
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
                      <FormMessage />
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
                      <FormMessage />
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
                      <FormMessage />
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </section>
            <section>
              <h2 className="overhang">Payment Method</h2>
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
      <div className="bg-black p-6 sm:p-12 rounded-lg sm:w-1/4"></div>
    </div>
  );
}
