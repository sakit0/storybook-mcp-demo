import React, { useEffect } from 'react'
import { Button, type ButtonProps } from '../Button/Button'
import { cn } from '../../utils/cn'

export interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
  showFooter?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'danger'
  className?: string
}

const sizeClasses = {
  small: 'w-96 max-w-[90vw]',
  medium: 'w-[600px] max-w-[90vw]',
  large: 'w-[800px] max-w-[90vw]',
}

export function Dialog({
  isOpen,
  onClose,
  title,
  children,
  confirmText = 'OK',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  showFooter = true,
  size = 'medium',
  variant = 'default',
  className,
}: DialogProps) {
  // ESCキーでダイアログを閉じる
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // スクロールを無効化
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  const handleConfirm = () => {
    onConfirm?.()
    onClose()
  }

  const handleCancel = () => {
    onCancel?.()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5"
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          'bg-white rounded-lg shadow-2xl max-h-[90vh] flex flex-col',
          sizeClasses[size],
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h2
            className={cn(
              'm-0 text-lg font-semibold',
              variant === 'danger' ? 'text-danger-600' : 'text-gray-900'
            )}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="bg-none border-none text-2xl cursor-pointer text-gray-500 p-1 rounded flex items-center justify-center w-8 h-8 hover:bg-gray-100 transition-colors"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 flex-1 overflow-y-auto">
          {children}
        </div>

        {/* Footer */}
        {showFooter && (
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
            <Button
              label={cancelText}
              variant="secondary"
              onClick={handleCancel}
            />
            <Button
              label={confirmText}
              variant={variant === 'danger' ? 'danger' : 'primary'}
              onClick={handleConfirm}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Dialog