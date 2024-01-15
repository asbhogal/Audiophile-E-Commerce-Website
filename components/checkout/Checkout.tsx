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
  /*cell: z.string({ required_error: "Please enter a valid cell phone number" }),
  address: z.string({ required_error: "Please enter a valid postal address" }),
  zip: z.string({ required_error: "Please enter a valid zip code" }),
  city: z.string({ required_error: "Please enter a valid city" }),
  country: z.string({ required_error: "Please enter a valid country" }),
  type: z.enum(["stripe", "cash on delivery"], {
    required_error: "Please select a payment method",
  }), */
});

export function Checkout() {
  const {
    formState: { errors },
  } = useForm();
  const form = useForm<z.infer<typeof CheckoutFormSchema>>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues: {
      name: "",
      email: "",
      /*cell: "",
      address: "",
      zip: "",
      city: "",
      country: "", */
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
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                  <FormLabel className="form-label">Email Address</FormLabel>
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
            <Button type="submit" className="bg-jasperOrange">
              Checkout & Pay
            </Button>
          </form>
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
      <div className="bg-black p-12 rounded-lg w-1/4"></div>
    </div>
  );
}

/* "use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function Checkout() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
 */
