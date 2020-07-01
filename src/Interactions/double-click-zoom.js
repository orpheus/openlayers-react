import DoubleClickZoomInteraction from 'ol/interaction/DoubleClickZoom'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function DoubleClickZoom ({
  options,
  events
}) {
  useInteraction({ Interaction: DoubleClickZoomInteraction, options, events })
  return null
}

const defaultOptions = {
  duration: undefined,
  delta: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined
}

DoubleClickZoom.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
