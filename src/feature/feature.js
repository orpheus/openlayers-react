import { useEffect } from 'react'
import { applyEvents, removeEvents } from '../util'

const Feature = ({
  feature,
  events
}) => {
  useEffect(() => {
    applyEvents(feature, events)

    return () => {
      removeEvents(feature, events)
    }
  }, [feature, events])

  return null
}

const defaultFeatureEvents = {
  change: undefined,
  'change:geometry': undefined,
  error: undefined,
  propertychange: undefined
}

Feature.defaultProps = {
  events: defaultFeatureEvents
}

export default Feature
