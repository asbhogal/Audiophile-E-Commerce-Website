import type { Meta, StoryObj } from "@storybook/react";
import QuantitySelect from "@/components/QuantitySelect";

const meta = {
  title: "Audiophile/QuantitySelect",
  component: QuantitySelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof QuantitySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Quantity: Story = {};
