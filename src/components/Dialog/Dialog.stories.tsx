import { Dialog, type DialogProps } from './Dialog'
import { Button } from '../Button/Button'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<DialogProps> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'danger'],
    },
    showFooter: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<DialogProps>

// Dialogを開くためのラッパーコンポーネント
const DialogWrapper = (args: Omit<DialogProps, 'isOpen' | 'onClose'>) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button label="Open Dialog" onClick={() => setIsOpen(true)} variant="primary" />
      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export const Default: Story = {
  render: (args) => (
    <DialogWrapper {...args} title="Default Dialog" confirmText="OK" cancelText="Cancel">
      <p>
        This is a default dialog with some content. You can put any content here including forms,
        images, or other components.
      </p>
    </DialogWrapper>
  ),
}

export const Small: Story = {
  render: (args) => (
    <DialogWrapper
      {...args}
      title="Small Dialog"
      size="small"
      confirmText="Got it"
      cancelText="Close"
    >
      <p>This is a small dialog for simple messages.</p>
    </DialogWrapper>
  ),
}

export const Large: Story = {
  render: (args) => (
    <DialogWrapper
      {...args}
      title="Large Dialog"
      size="large"
      confirmText="Save"
      cancelText="Cancel"
    >
      <div>
        <h3>Form Example</h3>
        <p>This is a large dialog that can contain more complex content.</p>
        <div style={{ marginTop: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Name:</label>
          <input
            type="text"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
            }}
            placeholder="Enter your name"
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Message:</label>
          <textarea
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              minHeight: '100px',
            }}
            placeholder="Enter your message"
          />
        </div>
      </div>
    </DialogWrapper>
  ),
}

export const Danger: Story = {
  render: (args) => (
    <DialogWrapper
      {...args}
      title="Delete Item"
      variant="danger"
      confirmText="Delete"
      cancelText="Cancel"
    >
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </DialogWrapper>
  ),
}

export const NoFooter: Story = {
  render: (args) => (
    <DialogWrapper {...args} title="Information" showFooter={false}>
      <p>This dialog has no footer buttons. Click outside or press ESC to close.</p>
    </DialogWrapper>
  ),
}

export const WithCustomActions: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleCustomAction = () => {
      alert('Custom action executed!')
    }

    return (
      <div>
        <Button label="Open Custom Dialog" onClick={() => setIsOpen(true)} variant="primary" />
        <Dialog
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Custom Actions"
          confirmText="Save & Close"
          cancelText="Discard"
          onConfirm={handleCustomAction}
          onCancel={() => alert('Cancelled!')}
        >
          <p>This dialog has custom action handlers.</p>
          <div style={{ marginTop: '16px' }}>
            <Button label="Custom Action" onClick={handleCustomAction} variant="secondary" />
          </div>
        </Dialog>
      </div>
    )
  },
}
