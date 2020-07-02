import ScaleLineControl from 'ol/control/ScaleLine'
import useControl from '../hooks/useControl'

/**
 * @return {null}
 */
export default function ScaleLine ({
  options,
  events
}) {
  useControl({ Control: ScaleLineControl, options, events })
  return null
}

const defaultOptions = {
  className: undefined,
  minWidth: undefined,
  render: undefined,
  target: undefined,
  units: undefined,
  bar: undefined,
  steps: undefined,
  text: undefined
}

const defaultEvents = {
  change: undefined,
  'change:units': undefined,
  error: undefined,
  propertychange: undefined
}

ScaleLine.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
