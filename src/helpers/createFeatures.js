import createFeature from './createFeature'

/**
 * Helper function to create multiple features from an array of feature data
 * @param {Array<Object>} features
 * @param {number} layerType
 * @param {function} [featureCb] function to run after feature gets created to perform side-effects
 * @returns {Array<Feature>}
 */
export default function createFeatures (features = [], layerType, featureCb) {
  const tmpArr = []
  for (const feature of features) {
    tmpArr.push(createFeature(feature, layerType, featureCb))
  }
  return tmpArr
}