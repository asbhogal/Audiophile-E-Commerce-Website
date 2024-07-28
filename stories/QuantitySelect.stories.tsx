import type { Meta, StoryObj } from "@storybook/react";
import QuantitySelect from "@/components/products/QuantitySelect";

const meta = {
  component: QuantitySelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Audiophile/QuantitySelect",
} satisfies Meta<typeof QuantitySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Quantity: Story = {};
