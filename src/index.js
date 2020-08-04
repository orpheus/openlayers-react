// css import won't be necessary on ol.6.4 onwards
import 'ol/ol.css'
import Map from './map'
import { Layers, layer } from './layers'
import Feature from './feature'
import Interface from './interface'
import { Interactions, interaction } from './interactions'
import { Controls, control } from './controls'
import { Overlays, Overlay } from './overlays'
import * as hooks from './hooks'
import * as util from './util'
import * as helpers from './helpers'

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
  ...hooks,
  ...util,
  ...helpers
}
