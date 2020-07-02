import React, { useEffect, useRef } from 'react'
import { Vector as VectorSource } from 'ol/source'
import { GeoJSON } from 'ol/format'
import { Vector as VectorLayer } from 'ol/layer'
import useMapContext from '../hooks/useMapContext'
import createFeatures from '../helpers/create-features'
import Feature from '../feature'
import { applyEvents, removeEvents } from '../util'

export const VectorLayerContext = React.createContext(null)

const Vector = ({
  options,
  events,
  sourceOptions,
  sourceEvents,
  featureEvents,
  layerData,
  features,
  onFeatureCreate,
  children
}) => {
  const { map, init } = useMapContext()
  const layerRef = useRef(null)
  const layerSourceRef = useRef(null)
  const featuresRef = useRef(null)

  const getFeatures = React.useCallback(() => {
    if (featuresRef.current === null) {
      featuresRef.current = createFeatures({
        features,
        layerType: layerData.type,
        onCreateCb: onFeatureCreate
      })
    }
    return featuresRef.current
  }, [features, layerData, onFeatureCreate])

  const getLayerSource = React.useCallback(() => {
    if (layerSourceRef.current === null) {
      layerSourceRef.current = new VectorSource({
        ...sourceOptions,
        format: new GeoJSON(),
        features: getFeatures()
      })
    }
    return layerSourceRef.current
  }, [sourceOptions, getFeatures])

  const getLayer = React.useCallback(() => {
    if (layerRef.current === null) {
      layerRef.current = new VectorLayer({
        ...options,
        source: getLayerSource()
      })
    }
    return layerRef.current
  }, [options, getLayerSource])

  useEffect(() => {
    if (init) {
      map.addLayer(getLayer())
      applyEvents(getLayer(), events)
      applyEvents(getLayerSource(), sourceEvents)
    }
    return () => {
      if (init) {
        removeEvents(getLayer(), events)
        removeEvents(getLayerSource(), sourceEvents)
        map.removeLayer(getLayer())
      }
    }
  }, [map, init, getLayer, events, sourceEvents, getLayerSource])

  // if children return children with context provider (in case they want to render features individually)
  if (children) {
    return <VectorLayerContext value={{ layer: getLayer(), layerSource: getLayer().getSource() }}>
      {children}
    </VectorLayerContext>
  }

  // else return a map of features
  return getFeatures()?.map((feature, i) => {
    let id = feature.getId()
    if (!id) id = feature.ol_uid
    return <Feature
      key={id}
      feature={feature}
      events={featureEvents}
    />
  })
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
  updateWhileInteracting: undefined
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

const defaultSourceOptions = {
  attributions: undefined,
  features: undefined,
  format: undefined,
  loader: undefined,
  overlaps: undefined,
  strategy: undefined,
  url: undefined,
  useSpatialIndex: undefined,
  wrapX: undefined
}

const defaultSourceEvents = {
  addfeature: undefined,
  change: undefined,
  changefeature: undefined,
  clear: undefined,
  error: undefined,
  propertychange: undefined,
  removefeature: undefined
}

const defaultFeatureEvents = {
  change: undefined,
  'change:geometry': undefined,
  error: undefined,
  propertychange: undefined
}

Vector.defaultProps = {
  options: defaultOptions,
  events: defaultEvents,
  sourceOptions: defaultSourceOptions,
  sourceEvents: defaultSourceEvents,
  // removed featureOptions as 'features' contains all the data we need
  featureEvents: defaultFeatureEvents,
  layerData: {},
  features: []
}

export default Vector
