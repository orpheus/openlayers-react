import DrawInteraction from 'ol/interaction/Draw'
import PropTypes from 'prop-types'
import useInteraction from '../hooks/useInteraction'

/**
 * @return {null}
 */
export default function Draw ({
  options,
  events
}) {
  useInteraction({ Interaction: DrawInteraction, options, events })
  return null
}

const defaultOptions = {
  type: undefined,
  clickTolerance: undefined,
  features: undefined,
  source: undefined,
  dragVertexDelay: undefined,
  snapTolerance: undefined,
  stopClick: undefined,
  maxPoints: undefined,
  minPoints: undefined,
  finishCondition: undefined,
  style: undefined,
  geometryFunction: undefined,
  geometryName: undefined,
  condition: undefined,
  freehand: undefined,
  freehandCondition: undefined,
  wrapX: undefined
}

const defaultEvents = {
  change: undefined,
  'change:active': undefined,
  drawabort: undefined,
  drawend: undefined,
  drawstart: undefined,
  error: undefined,
  propertychange: undefined
}

Draw.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}

Draw.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.oneOf([
      'Point',
      'LineString',
      'LinearRing',
      'Polygon',
      'MultiPoint',
      'MultiLineString',
      'MultiPolygon',
      'GeometryCollection',
      'Circle'
    ]).isRequired
  })
}
