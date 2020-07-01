import useMapContext from './useMapContext'

export default function useInterface () {
  const { map, init } = useMapContext()
  // aggregate other contexts and return them

  return { map, init }
}
