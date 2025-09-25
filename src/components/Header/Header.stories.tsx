import type { Meta, StoryObj } from "@storybook/react";
import { Header, type HeaderProps } from "./Header";
import { Button } from "../Button";

const meta: Meta<HeaderProps> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<HeaderProps>;

export const Basic: Story = {
  args: {
    title: "Storybook MCP Demo",
    subtitle: "React components demo",
  },
};

export const WithActions: Story = {
  args: {
    title: "Storybook MCP Demo",
    subtitle: "With action button",
    rightSlot: <Button label="Sign in" variant="secondary" onClick={() => {}} />,
  },
};


