import type { Meta, StoryObj } from "@storybook/react";
import Featured from "@/components/blocks/Featured";

const meta = {
  component: Featured,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Audiophile/Featured",
} satisfies Meta<typeof Featured>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FeaturedSection: Story = {};
