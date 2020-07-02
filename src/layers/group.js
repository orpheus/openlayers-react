import GroupLayer from 'ol/layer/Group'
import useLayer from '../hooks/useLayer'

/**
 * @return {null}
 */
export default function Group ({ options, events }) {
  useLayer({ Layer: GroupLayer, options, events })
  return null
}

const defaultOptions = {
  opacity: undefined,
  visible: undefined,
  extent: undefined,
  zIndex: undefined,
  minResolution: undefined,
  maxResolution: undefined,
  minZoom: undefined,
  maxZoom: undefined,
  layers: undefined
}

const defaultEvents = {
  change: undefined,
  'change:extent': undefined,
  'change:layers': undefined,
  'change:maxResolution': undefined,
  'change:maxZoom': undefined,
  'change:minResolution': undefined,
  'change:minZoom': undefined,
  'change:opacity': undefined,
  'change:visible': undefined,
  'change:zIndex': undefined,
  error: undefined,
  propertychange: undefined
}

Group.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
