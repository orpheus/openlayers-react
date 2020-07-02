import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import useLayer from '../hooks/useLayer'

/**
 * @return {null}
 */
export default function Tile ({ options, events }) {
  useLayer({ Layer: TileLayer, options, events })
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
  preload: undefined,
  source: new OSM(),
  map: undefined,
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

Tile.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
