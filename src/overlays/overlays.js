import React from 'react'

export default function Overlays ({ children, ...rest }) {
  return <div {...rest}>
    {children}
  </div>
}
