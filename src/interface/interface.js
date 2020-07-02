import React from 'react'

function Interface ({ children, style, ...rest }) {
  return <div style={{ position: 'fixed', zIndex: 1, ...style }} {...rest}>{children}</div>
}

Interface.defaultProps = {
  className: 'interface'
}

export default Interface
