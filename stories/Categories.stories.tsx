import type { Meta, StoryObj } from "@storybook/react";
import Categories from "../components/blocks/Categories";

const meta = {
  component: Categories,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Audiophile/Categories",
} satisfies Meta<typeof Categories>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CategoryWidget: Story = {};
