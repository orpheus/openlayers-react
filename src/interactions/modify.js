import ModifyInteraction from 'ol/interaction/Modify'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function Modify ({
  options,
  events
}) {
  useInteraction({ Interaction: ModifyInteraction, options, events })
  return null
}

const defaultOptions = {
  condition: undefined,
  deleteCondition: undefined,
  insertVertexCondition: undefined,
  pixelTolerance: undefined,
  style: undefined,
  source: undefined,
  features: undefined,
  wrapX: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  modifyend: undefined,
  modifystart: undefined,
  propertychange: undefined
}

Modify.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
