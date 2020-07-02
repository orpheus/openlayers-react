import SelectInteraction from 'ol/interaction/Select'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function Select ({
  options,
  events
}) {
  useInteraction({ Interaction: SelectInteraction, options, events })
  return null
}

const defaultOptions = {
  addCondition: undefined,
  condition: undefined,
  layers: undefined,
  style: undefined,
  removeCondition: undefined,
  toggleCondition: undefined,
  multi: undefined,
  features: undefined,
  filter: undefined,
  hitTolerance: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined,
  select: undefined
}

Select.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
