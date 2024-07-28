import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/globals/Header";

const meta = {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Audiophile/Header",
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainHeader: Story = {
  args: {
    // eslint-disable-next-line
    viewCart: () => console.log("View cart clicked"),
  },
};
