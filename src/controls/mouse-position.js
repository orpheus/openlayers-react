import MousePositionControl from 'ol/control/MousePosition'
import useControl from '../hooks/useControl'

/**
 * @return {null}
 */
export default function MousePosition ({
  options,
  events
}) {
  useControl({ Control: MousePositionControl, options, events })
  return null
}

const defaultOptions = {
  className: undefined,
  coordinateFormat: undefined,
  projection: undefined,
  render: undefined,
  target: undefined,
  undefinedHTML: undefined
}

const defaultEvents = {
  change: undefined,
  'change:coordinateFormat': undefined,
  'change:projection': undefined,
  error: undefined,
  propertychange: undefined
}

MousePosition.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
