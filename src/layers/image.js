import ImageLayer from 'ol/layer/Image'
import useLayer from '../hooks/useLayer'

/**
 * @return {null}
 */
export default function Image ({ options, events }) {
  useLayer({ Layer: ImageLayer, options, events })
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
  map: undefined,
  source: undefined
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

Image.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
