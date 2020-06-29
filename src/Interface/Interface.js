import React, { useContext } from 'react'
import { MapContext } from '../Map'

function Interface ({ children, ...rest }) {
  const { map } = useContext(MapContext)
  return <div {...rest}>{children({ map })}</div>
}

Interface.defaultProps = {
  className: 'interface'
}

export default Interface
