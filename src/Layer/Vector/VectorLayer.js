import React, { useEffect, useContext, useRef } from 'react'

import { MapContext } from '../Map'
import Feature from './Feature'

import createVectorLayer from '../helpers/createVectorLayer'
import createFeatures from '../helpers/createFeatures'

const Vector = ({ layerData = {}, features = [] }) => {
  const { map, init } = useContext(MapContext)
  const layerRef = useRef(null)
  const layerSourceRef = useRef(null)
  const featuresRef = useRef(null)

  const getFeatures = React.useCallback(() => {
    if (featuresRef.current === null) {
      featuresRef.current = createFeatures(features, layerData)
    }
    return featuresRef.current
  }, [features, layerData])

  const getLayer = React.useCallback(() => {
    if (layerRef.current === null) {
      const { layer, source } = createVectorLayer(
        layerData.options,
        getFeatures()
      )
      layerRef.current = layer
      layerSourceRef.current = source
    }
    return layerRef.current
  }, [getFeatures, layerData])

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

  return getFeatures()
    ? getFeatures()?.map((feature, i) => {
      return <Feature feature={feature} key={i} i={i} />
    })
    : null
}

export default Vector
