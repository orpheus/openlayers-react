import { useEffect, useRef, useContext, useCallback } from 'react'
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile'
import { MapContext } from '../../Map'

const Tile = ({ options }) => {
  const { map, init } = useContext(MapContext)
  const layerRef = useRef(null)

  const getLayer = useCallback(() => {
    if (layerRef.current === null) {
      layerRef.current = new TileLayer({
        ...options
      })
    }
    return layerRef.current
  }, [options])

  useEffect(() => {
    if (init) {
      map.addLayer(getLayer())
    }
    return () => {
      if (init) {
        map.removeLayer(getLayer())
      }
    }
  }, [init, map, getLayer])
  return null
}

Tile.defaultProps = {
  options: {
    source: new OSM()
  }
}

export default Tile
