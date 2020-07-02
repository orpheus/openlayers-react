import ZoomSliderControl from 'ol/control/ZoomSlider'
import useControl from '../hooks/useControl'

/**
 * @return {null}
 */
export default function ZoomSlider ({
  options,
  events
}) {
  useControl({ Control: ZoomSliderControl, options, events })
  return null
}

const defaultOptions = {
  duration: undefined,
  className: undefined,
  render: undefined
}

const defaultEvents = {
  change: undefined,
  error: undefined,
  propertychange: undefined
}

ZoomSlider.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
