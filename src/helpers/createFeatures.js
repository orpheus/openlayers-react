import createFeature from './createFeature'

export default function createFeatures (features = [], layerData = {}) {
  const tmpArr = []
  for (const feature of features) {
    tmpArr.push(createFeature(feature, layerData.type))
  }
  return tmpArr
}
