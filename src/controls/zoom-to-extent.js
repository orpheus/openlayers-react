import ZoomToExtentControl from 'ol/control/ZoomToExtent'
import useControl from '../hooks/useControl'

/**
 * @return {null}
 */
export default function ZoomToExtent ({
  options,
  events
}) {
  useControl({ Control: ZoomToExtentControl, options, events })
  return null
}

const defaultOptions = {
  className: undefined,
  target: undefined,
  label: undefined,
  tipLabel: undefined,
  extent: undefined
}

const defaultEvents = {
  change: undefined,
  error: undefined,
  propertychange: undefined
}

ZoomToExtent.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
