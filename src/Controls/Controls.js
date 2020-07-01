import React from 'react'

export default function Controls ({ children, ...rest }) {
  return <div {...rest}>
    {children}
  </div>
}
