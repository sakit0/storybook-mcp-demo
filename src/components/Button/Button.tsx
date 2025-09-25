import React from 'react'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'danger'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary-600 text-white border-primary-600 hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-transparent text-gray-700 border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
  danger: 'bg-danger-600 text-white border-danger-600 hover:bg-danger-700 focus:ring-danger-500',
}

export interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: ButtonVariant
  disabled?: boolean
  fullWidth?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  fullWidth = false,
  className,
  type = 'button',
}: ButtonProps) {
  const baseClasses = [
    'font-sans text-sm px-3.5 py-2 rounded-md',
    'inline-flex items-center justify-center gap-2',
    'border transition-all duration-150 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-60',
    fullWidth ? 'w-full' : '',
    variantClasses[variant],
  ]

  return (
    <button
      type={type}
      className={cn(baseClasses, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button
