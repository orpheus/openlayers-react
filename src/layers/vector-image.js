import VectorImageLayer from 'ol/layer/VectorImage'
import useLayer from '../hooks/useLayer'

/**
 * @return {null}
 */
export default function VectorImage ({ options, events }) {
  useLayer({ Layer: VectorImageLayer, options, events })
  return null
}

const defaultOptions = {
  className: undefined,
  opacity: undefined,
  visible: undefined,
  extent: undefined,
  zIndex: undefined,
  minResolution: undefined,
  maxResolution: undefined,
  minZoom: undefined,
  maxZoom: undefined,
  renderOrder: undefined,
  renderBuffer: undefined,
  source: undefined,
  map: undefined,
  declutter: undefined,
  style: undefined,
  updateWhileAnimating: undefined,
  updateWhileInteraction: undefined,
  imageRatio: undefined
}

const defaultEvents = {
  change: undefined,
  'change:extent': undefined,
  'change:maxResolution': undefined,
  'change:maxZoom': undefined,
  'change:minResolution': undefined,
  'change:minZoom': undefined,
  'change:opacity': undefined,
  'change:source': undefined,
  'change:visible': undefined,
  'change:zIndex': undefined,
  error: undefined,
  postrender: undefined,
  prerender: undefined,
  propertychange: undefined
}

VectorImage.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
