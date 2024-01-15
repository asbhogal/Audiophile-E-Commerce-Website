import type { Meta, StoryObj } from "@storybook/react";
import Footer from "@/components/globals/Footer";

const meta = {
  title: "Audiophile/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainFooter: Story = {};
