import type { Meta, StoryObj } from "@storybook/react";
import { Checkout } from "@/components/checkout/Checkout";

const meta = {
  component: Checkout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Audiophile/Checkout",
} satisfies Meta<typeof Checkout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckoutPage: Story = {};
