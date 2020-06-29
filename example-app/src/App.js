import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Map1, Map2 } from './pages'
import './App.css'

function App () {
  return <Router>
    <Switch>
      <Route exact path={'/'} component={Map1} />
      <Route path={'/map1'} component={Map1} />
      <Route path={'/map2'} component={Map2} />
      <Route path={'*'} component={() => <h4>404</h4>} />
    </Switch>
  </Router>
}

export default App
