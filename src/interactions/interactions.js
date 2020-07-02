import React from 'react'

export default function Interactions ({ children, ...rest }) {
  return <div {...rest}>
    {children}
  </div>
}
