import React from 'react'

const Container = ({ children, as = 'div' }) => {
  const Tag = as

  return (
    <Tag
      style={{
        maxWidth: as === 'footer' ? 'inherit' : 'var(--size-max-width)',
        margin: '0 auto',
        padding: 'var(--space-2xl) var(--size-gutter)',
        position: as === 'footer' ? 'absolute' : 'inherit',
        bottom: as === 'footer' ? '10vh' : 'inherit',
        width: as === 'footer' ? '100%' : 'inherit',
        height: as === 'footer' ? '2.5rem' : 'inherit',
      }}
    >
      {children}
    </Tag>
  )
}

export default Container
