import DragBoxInteraction from 'ol/interaction/DragBox'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function DragBox ({
  options,
  events
}) {
  useInteraction({ Interaction: DragBoxInteraction, options, events })
  return null
}

const defaultOptions = {
  className: undefined,
  condition: undefined,
  minArea: undefined,
  boxEndCondition: undefined,
  onBoxEnd: undefined
}

const defaultEvents = {
  boxdrag: undefined,
  boxend: undefined,
  boxstart: undefined,
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined
}

DragBox.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
