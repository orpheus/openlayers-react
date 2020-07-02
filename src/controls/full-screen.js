import FullScreenControl from 'ol/control/FullScreen'
import useControl from '../hooks/useControl'

/**
 * @return {null}
 */
export default function FullScreen ({
  options,
  events
}) {
  useControl({ Control: FullScreenControl, options, events })
  return null
}

const defaultOptions = {
  className: undefined,
  label: undefined,
  labelActive: undefined,
  tipLabel: undefined,
  keys: undefined,
  target: undefined,
  source: undefined
}

const defaultEvents = {
  change: undefined,
  enterfullscreen: undefined,
  error: undefined,
  leavefullscreen: undefined,
  propertychange: undefined
}

FullScreen.defaultProps = {
  options: defaultOptions,
  events: defaultEvents
}
