import DragAndDropInteraction from 'ol/interaction/DragAndDrop'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function DragAndDrop ({
  options,
  events
}) {
  useInteraction({ Interaction: DragAndDropInteraction, options, events })
  return null
}

const defaultOptions = {
  formatConstructors: undefined,
  source: undefined,
  projection: undefined,
  target: undefined
}

const defaultEvents = {
  addfeatures: undefined,
  change: undefined,
  'change:active': undefined,
  error: undefined,
  propertychange: undefined
}

DragAndDrop.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
