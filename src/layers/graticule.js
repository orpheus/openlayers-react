import GraticuleLayer from 'ol/layer/Graticule'
import useLayer from '../hooks/useLayer'

/**
 * @return {null}
 */
export default function Graticule ({ options, events }) {
  useLayer({ Layer: GraticuleLayer, options, events })
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
  maxLines: undefined,
  strokeStyle: undefined,
  targetSize: undefined,
  showLabels: undefined,
  lonLabelFormatter: undefined,
  latLabelFormatter: undefined,
  lonLabelPosition: undefined,
  latLabelPosition: undefined,
  lonLabelStyle: undefined,
  latLabelStyle: undefined,
  intervals: undefined,
  wrapX: undefined,
  // missing in docs?
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
  postcompose: undefined,
  postrender: undefined,
  precompose: undefined,
  prerender: undefined,
  propertychange: undefined,
  rendercomplete: undefined
}

Graticule.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
