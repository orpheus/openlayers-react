import ZoomControl from 'ol/control/Zoom'
import useControl from '../hooks/useControl'

/**
 * @return {null}
 */
export default function Zoom ({
  options,
  events
}) {
  useControl({ Control: ZoomControl, options, events })
  return null
}

const defaultOptions = {
  duration: undefined,
  className: undefined,
  zoomInLabel: undefined,
  zoomOutLabel: undefined,
  zoomInTipLabel: undefined,
  zoomOutTipLabel: undefined,
  delta: undefined,
  target: undefined,
}

const defaultEvents = {
  change: undefined,
  error: undefined,
  propertychange: undefined
}

Zoom.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
