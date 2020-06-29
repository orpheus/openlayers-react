import { Fill, Stroke, Style } from 'ol/style'
import hexToRgb from 'hex-to-rgba'

export const LINE_DASH = [30, 30]

const defaultStyle = { lineType: 0, fill: true, color: '#F91' }

export default function createStyle (defaultStyles = defaultStyle) {
  // if (!defaultStyles) return
  return new Style({
    stroke: new Stroke({
      color: hexToRgb(defaultStyles.color),
      width: 3,
      lineDash: defaultStyles.lineType ? LINE_DASH : undefined
    }),
    fill: new Fill({
      color: hexToRgb(defaultStyles.color, defaultStyles.fill ? 0.7 : 0)
    })
  })
}
