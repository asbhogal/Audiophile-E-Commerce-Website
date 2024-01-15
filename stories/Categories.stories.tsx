import type { Meta, StoryObj } from "@storybook/react";
import Categories from "../components/blocks/Categories";

const meta = {
  title: "Audiophile/Categories",
  component: Categories,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Categories>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CategoryWidget: Story = {};
