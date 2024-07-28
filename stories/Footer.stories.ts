import type { Meta, StoryObj } from "@storybook/react";
import Footer from "@/components/globals/Footer";

const meta = {
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Audiophile/Footer",
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainFooter: Story = {};
