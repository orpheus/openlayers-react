import SnapInteraction from 'ol/interaction/Snap'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function Snap ({
  options,
  events
}) {
  useInteraction({ Interaction: SnapInteraction, options, events })
  return null
}

const defaultOptions = {
  features: undefined,
  layers: undefined,
  filter: undefined,
  hitTolerance: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined,
  translateend: undefined,
  translatestart: undefined,
  translating: undefined
}

Snap.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
