import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: { label: "Primary Button", variant: "primary" },
};

export const Secondary: Story = {
  args: { label: "Secondary Button", variant: "secondary" },
};

export const Danger: Story = {
  args: { label: "Delete", variant: "danger" },
};

export const Disabled: Story = {
  args: { label: "Disabled", disabled: true },
};


