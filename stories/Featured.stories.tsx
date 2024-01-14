import type { Meta, StoryObj } from "@storybook/react";
import Featured from "@/components/Featured";

const meta = {
  title: "Audiophile/Featured",
  component: Featured,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Featured>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FeaturedSection: Story = {};
