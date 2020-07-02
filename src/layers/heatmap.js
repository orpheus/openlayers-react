import HeatmapLayer from 'ol/layer/Heatmap'
import useLayer from '../hooks/useLayer'

/**
 * @return {null}
 */
export default function Heatmap ({ options, events }) {
  useLayer({ Layer: HeatmapLayer, options, events })
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
  gradient: undefined,
  radius: undefined,
  blur: undefined,
  weight: undefined,
  source: undefined
}

const defaultEvents = {
  change: undefined,
  'change:blur': undefined,
  'change:extent': undefined,
  'change:gradient': undefined,
  'change:maxResolution': undefined,
  'change:maxZoom': undefined,
  'change:minResolution': undefined,
  'change:minZoom': undefined,
  'change:opacity': undefined,
  'change:radius': undefined,
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

Heatmap.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
