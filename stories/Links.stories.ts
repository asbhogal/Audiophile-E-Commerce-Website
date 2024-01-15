import type { Meta, StoryObj } from "@storybook/react";
import Link from "@/components/navigation/Link";

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
    children: "See product",
    href: "#",
    external: true,
    ariaLabel: "Test",
  },
};

export const Secondary: Story = {
  args: {
    label: "See product",
    children: "See product",
    href: "#",
    external: false,
    ariaLabel: "View product",
  },
};

export const Shop: Story = {
  args: {
    label: "Shop",
    children: "Shop",
    href: "#",
    icon: true,
    external: false,
    ariaLabel: "Shop",
  },
};
