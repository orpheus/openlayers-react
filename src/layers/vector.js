import React, { useEffect, useRef } from 'react'
import { Vector as VectorSource } from 'ol/source'
import { GeoJSON } from 'ol/format'
import { Vector as VectorLayer } from 'ol/layer'
import useMapContext from '../hooks/useMapContext'
import createFeatures from '../helpers/create-features'
import Feature from '../feature'

export const VectorLayerContext = React.createContext(null)

const Vector = ({
  options,
  sourceOptions = {},
  layerData = {},
  features = [],
  onFeatureCreate,
  featureOptions,
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
        onCreateCb: onFeatureCreate,
        featureOptions
      })
    }
    return featuresRef.current
  }, [features, layerData, onFeatureCreate, featureOptions])

  const getLayer = React.useCallback(() => {
    if (layerRef.current === null) {
      const source = new VectorSource({
        format: new GeoJSON(),
        features: getFeatures(),
        ...sourceOptions
      })
      layerRef.current = new VectorLayer({
        source,
        ...options
      })
      layerSourceRef.current = source
    }
    return layerRef.current
  }, [getFeatures, options, sourceOptions])

  useEffect(() => {
    if (init) {
      map.addLayer(getLayer())
    }
    return () => {
      if (init) {
        map.removeLayer(getLayer())
      }
    }
  }, [map, init, getLayer])

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
    />
  })
}

Vector.defaultProps = {
  options: {},
  sourceOptions: {},
  layerData: {},
  features: []
}

export default Vector
