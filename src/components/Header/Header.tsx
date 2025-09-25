import React from 'react'

export interface HeaderProps {
  title?: string
  subtitle?: string
  rightSlot?: React.ReactNode
}

export function Header({ title = 'Demo App', subtitle, rightSlot }: HeaderProps) {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderBottom: '1px solid #e5e7eb',
        background: '#ffffff',
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: 20 }}>{title}</h1>
        {subtitle ? <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>{subtitle}</p> : null}
      </div>
      <div>{rightSlot}</div>
    </header>
  )
}

export default Header
