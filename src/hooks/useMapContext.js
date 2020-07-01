import { useContext } from 'react'
import { MapContext } from '../Map'

export default function useMapContext () {
  const context = useContext(MapContext)
  if (!context) {
    throw new Error(
      'Map compound components cannot be rendered outside the Map component'
    )
  }
  return context
}
