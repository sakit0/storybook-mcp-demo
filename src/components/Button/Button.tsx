import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

const stylesByVariant: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "#1ea7fd",
    color: "#ffffff",
    border: "1px solid #1ea7fd",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "#333333",
    border: "1px solid #cccccc",
  },
  danger: {
    backgroundColor: "#e5484d",
    color: "#ffffff",
    border: "1px solid #e5484d",
  },
};

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
};

export function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  fullWidth = false,
  style,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
    fontSize: 14,
    padding: "8px 14px",
    borderRadius: 6,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: fullWidth ? "100%" : undefined,
    transition: "background-color .15s ease, color .15s ease, opacity .15s ease",
  };

  const mergedStyle: React.CSSProperties = {
    ...baseStyle,
    ...(stylesByVariant[variant] || stylesByVariant.primary),
    ...style,
  };

  return (
    <button type="button" style={mergedStyle} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;


