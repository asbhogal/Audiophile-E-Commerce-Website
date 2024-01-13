import type { Meta, StoryObj } from "@storybook/react";
import Link from "@/components/Link";

const meta = {
  title: "Audiophile/Links",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "See product",
    href: "#",
  },
};

export const Secondary: Story = {
  args: {
    label: "See product",
    href: "#",
  },
};

export const Shop: Story = {
  args: {
    label: "Shop",
    href: "#",
    icon: true,
  },
};
