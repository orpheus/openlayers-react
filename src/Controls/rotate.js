import RotateControl from 'ol/control/Rotate'
import useControl from '../hooks/useControl'

/**
 * @return {null}
 */
export default function Rotate ({
  options,
  events
}) {
  useControl({ Control: RotateControl, options, events })
  return null
}

const defaultOptions = {
  className: undefined,
  label: undefined,
  tipLabel: undefined,
  duration: undefined,
  autoHide: undefined,
  render: undefined,
  resetNorth: undefined,
  target: undefined
}

const defaultEvents = {
  change: undefined,
  error: undefined,
  propertychange: undefined
}

Rotate.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
