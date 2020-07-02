import VectorTileLayer from 'ol/layer/VectorTile'
import useLayer from '../hooks/useLayer'

/**
 * @return {null}
 */
export default function VectorTile ({ options, events }) {
  useLayer({ Layer: VectorTileLayer, options, events })
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
  renderMode: undefined,
  source: undefined,
  map: undefined,
  declutter: undefined,
  style: undefined,
  updateWhileAnimating: undefined,
  updateWhileInteraction: undefined,
  preload: undefined,
  useInterimTilesOnError: undefined
}

const defaultEvents = {
  change: undefined,
  'change:extent': undefined,
  'change:maxResolution': undefined,
  'change:maxZoom': undefined,
  'change:minResolution': undefined,
  'change:minZoom': undefined,
  'change:opacity': undefined,
  'change:preload': undefined,
  'change:source': undefined,
  'change:useInterimTilesOnError': undefined,
  'change:visible': undefined,
  'change:zIndex': undefined,
  error: undefined,
  postrender: undefined,
  prerender: undefined,
  propertychange: undefined
}

VectorTile.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
