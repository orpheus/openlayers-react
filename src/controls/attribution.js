import AttributionControl from 'ol/control/Attribution'
import useControl from '../hooks/useControl'

/**
 * @return {null}
 */
export default function Attribution ({
  options,
  events
}) {
  useControl({ Control: AttributionControl, options, events })
  return null
}

const defaultOptions = {
  className: undefined,
  target: undefined,
  collapsible: undefined,
  collapsed: undefined,
  tipLabel: undefined,
  label: undefined,
  collapseLabel: undefined,
  render: undefined
}

const defaultEvents = {
  change: undefined,
  error: undefined,
  propertychange: undefined
}

Attribution.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
