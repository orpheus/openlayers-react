import ExtentInteraction from 'ol/interaction/Extent'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function Extent ({
  options,
  events
}) {
  useInteraction({ Interaction: ExtentInteraction, options, events })
  return null
}

const defaultOptions = {
  extent: undefined,
  boxStyle: undefined,
  pixelTolerance: undefined,
  pointerStyle: undefined,
  wrapX: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  extentchanged: undefined,
  propertychange: undefined
}

Extent.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
