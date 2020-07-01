import React from 'react'

export default function Layers ({ children, ...rest }) {
  return <div {...rest}>{children}</div>
}
