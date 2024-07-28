import type { Meta, StoryObj } from "@storybook/react";
import Link from "@/components/navigation/Link";

const meta = {
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Audiophile/Links",
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ariaLabel: "Test",
    children: "See product",
    external: true,
    href: "#",
    label: "See product",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    ariaLabel: "View product",
    children: "See product",
    external: false,
    href: "#",
    label: "See product",
  },
};

export const Shop: Story = {
  args: {
    ariaLabel: "Shop",
    children: "Shop",
    external: false,
    href: "#",
    icon: true,
    label: "Shop",
  },
};
