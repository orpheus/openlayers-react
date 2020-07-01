// css import won't be necessary on ol.6.4 onwards
import 'ol/ol.css'
import Map from './Map'
import { Layers, layer } from './Layers'
import Feature from './Feature'
import Interface from './Interface'
import { UseMapClick } from './components'
import { Interactions, interaction } from './Interactions'
import { Controls, control } from './Controls'
import { Overlays, Overlay } from './Overlays'
import * as hooks from './hooks'
import * as util from './util'

module.exports = {
  Map,
  Layers,
  layer,
  Interactions,
  interaction,
  Controls,
  control,
  Overlays,
  Overlay,
  Feature,
  Interface,
  UseMapClick,
  ...hooks,
  ...util
}
