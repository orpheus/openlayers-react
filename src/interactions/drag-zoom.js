import DragZoomInteraction from 'ol/interaction/DragZoom'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function DragZoom ({
  options,
  events
}) {
  useInteraction({ Interaction: DragZoomInteraction, options, events })
  return null
}

const defaultOptions = {
  className: undefined,
  condition: undefined,
  duration: undefined,
  out: undefined,
  minArea: undefined
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

DragZoom.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
