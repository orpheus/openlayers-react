import React from 'react'
import { useInterface } from '../hooks'

function Interface ({ children, ...rest }) {
  const { map } = useInterface()
  return <div {...rest}>{children({ map })}</div>
}

Interface.defaultProps = {
  className: 'interface'
}

export default Interface
