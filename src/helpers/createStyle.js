import { Fill, Stroke, Style } from 'ol/style'
import hexToRgb from 'hex-to-rgba'

export const LINE_DASH = [30, 30]

export default function createStyle ({
  lineType = 0,
  fill = true,
  color = '#F91',
  lineDash = LINE_DASH,
  strokeOptions = {},
  fillOptions = {},
  ...rest
}) {
  // if (!defaultStyles) return
  return new Style({
    stroke: new Stroke({
      color: hexToRgb(color),
      width: 3,
      lineDash: lineType ? lineDash : undefined,
      ...strokeOptions
    }),
    fill: new Fill({
      color: hexToRgb(color, fill ? 0.7 : 0),
      ...fillOptions
    }),
    ...rest
  })
}
