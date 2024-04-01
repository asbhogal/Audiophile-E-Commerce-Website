"use client";

import { Product } from "@/lib/types/data/types";
import { toast } from "sonner";
import QuantitySelect from "../products/QuantitySelect";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface AddToCartProps {
  productData: Product;
}

const addToCartSchema = z.object({
  quantity: z.string().min(1).max(10),
});

const quantity = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function AddToCart({ productData }: AddToCartProps) {
  const form = useForm<z.infer<typeof addToCartSchema>>({
    resolver: zodResolver(addToCartSchema),
    defaultValues: {
      quantity: "1",
    },
  });

  function onSubmit(data: z.infer<typeof addToCartSchema>) {
    const convertedData = {
      ...data,
      quantity: parseInt(data.quantity, 10),
    };
    toast(
      `${convertedData.quantity} x ${productData.name} has been added to your cart`,
    );
  }

  return (
    <Form {...form}>
      <form
        className="flex items-center gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Quantity</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-black text-antiFlashWhite border-black">
                    <SelectValue
                      defaultValue={field.value}
                      placeholder={field.value}
                    >
                      {field.value}
                    </SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-black text-antiFlashWhite">
                  {quantity.map((value) => (
                    <SelectItem
                      className="cursor-pointer hover:bg-chineseBlack"
                      key={value}
                      value={value}
                    >
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription className="sr-only">
                Select a quantity
              </FormDescription>
            </FormItem>
          )}
        />
        <Button
          className="font-sans text-antiFlashWhite bg-black"
          type="submit"
          title="Add to cart"
        >
          Add To Cart
        </Button>
      </form>
    </Form>
  );
}
