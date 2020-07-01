import React, { useRef } from 'react'
import useOverlay from '../hooks/useOverlay'

export default function Overlay ({ options, events, children }) {
  const ref = useRef(null)
  useOverlay({ options, events, element: ref.current })

  return <div ref={ref}>
    {children}
  </div>
}

const defaultOptions = {
  id: undefined,
  element: undefined,
  offset: undefined,
  position: undefined,
  positioning: undefined,
  stopEvent: undefined,
  insertFirst: undefined,
  autoPan: undefined,
  autoPanAnimation: undefined,
  autoPanMargin: undefined,
  autoPanOptions: undefined,
  className: undefined
}

const defaultEvents = {
  change: undefined,
  'change:element': undefined,
  'change:map': undefined,
  'change:offset': undefined,
  'change:position': undefined,
  'change:positioning': undefined,
  error: undefined,
  propertychange: undefined
}

Overlay.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
