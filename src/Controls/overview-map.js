import OverviewMapControl from 'ol/control/OverviewMap'
import useControl from '../hooks/useControl'

/**
 * @return {null}
 */
export default function OverviewMap ({
  options,
  events
}) {
  useControl({ Control: OverviewMapControl, options, events })
  return null
}

const defaultOptions = {
  className: undefined,
  collapsed: undefined,
  collapseLabel: undefined,
  collapsible: undefined,
  label: undefined,
  layers: undefined,
  render: undefined,
  rotateWithView: undefined,
  target: undefined,
  tipLabel: undefined,
  view: undefined
}

const defaultEvents = {
  change: undefined,
  error: undefined,
  propertychange: undefined
}

OverviewMap.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
