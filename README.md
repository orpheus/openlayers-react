## React Wrapper for Open Layer 6
___

### Install
1) `npm i -S ol6-react`

2) `npm i ol^6.3.1`

   `> ol is a peer dependency so you must manually install it`


### Use

All modules are exported at the root of the project. Look into tree shaking if using webpack or rollup.
Or import using absolute paths. See github repo for paths.

`import Map from 'ol6-react/map`

vs

`import { Map } from 'ol6-react`

Basic example:

```js
import { Map, Layers, layers } from 'ol6-react'
import TileSource from '../some/folder'
import features from '../features/folder'

function App () {
  return <Map>
    <Layers>
      <layer.Tile options={{ source: TileSource }}  />
      <layer.Vector
        features={features}
      />
    </Layers>
  </Map>
}
```

That's a very contrived example, but here's the jist:

### Explanation
The following open layer classes:
- Controls
- Overlay
- Layers
- Feature

Are wrapped in React components that accept `options` and `events` props that feed directly
into the open layers apis they wrap. Any documentation that is listed by openlayers for 
their v6 api is valid. 

example: https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html

All options for the TileLayer are able to be used like:
```js
import { layer } from 'ol6-react'

function App () {
  return <layer.Tile 
    // any option you see in the docs can be controlled through the options prop
    options={{
      className: 'tile',
      opacity: 1,
      visible: true,
      // etc 
    }}
    // to control the class' events, use the event prop
    events={{
      change: (e) => console.log('some change event', e),
      // see events listed below options in openlayers api documentation
    }}
  />
}
```

> There is exception to this in the entire library which is the VectorLayer component (`layer.Vector`)

### Vector Layer

Because Vector layers are the meat of the application I made this lib for, it is special.

the `layer.Vector` component takes `options` and `events` like every other wrapper, but
it also excepts `features` and `layerData` so that it can build and add features directly.
This also helper performance dramatically by adding all the features to a layer at once. 

i.e.

```js
  const features = { 1: [...featuresHere]}
  const layer = { id: 1, defaultStyle: { color: '#fff' }}
  return <layer.Vector
    key={layer.id}
    features={features[layer.id]}
    layerData={layer}
    options={{ style: createStyle(layer.defaultStyle) }}
    // see code propTypes for the rest of the options
  />
```

if you just want a simple wrapper without the custom functionality of the one above
you can easily just make your own vector component using the exported hooks

```js
import { useLayer } from 'ol6-react'
import VectorLayer from 'ol/layer/Vector'

const Vector = ({ options, events }) => {
  // this adds the layer to the map for you and handles applying all options and events
  // will re-apply options/events on change as well
  const layer = useLayer(VectorLayer, options, events )
  // do whatever you want
 
  // return whatever you want
  return null
}
```
