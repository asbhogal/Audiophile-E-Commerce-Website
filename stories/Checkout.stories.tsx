import type { Meta, StoryObj } from "@storybook/react";
import { Checkout } from "@/components/checkout/Checkout";

const meta = {
  title: "Audiophile/Checkout",
  component: Checkout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Checkout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckoutPage: Story = {};
