import { useContext } from 'react'
import { MapContext } from '../Map'

export default function useInterface () {
  const { map, init } = useContext(MapContext)

  return { map, init }
}
