import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/globals/Header";

const meta = {
  title: "Audiophile/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainHeader: Story = {
  args: {
    viewCart: () => console.log("View cart clicked"),
  },
};
