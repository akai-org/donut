import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Freestyle from '../containers/Freestyle'
import LandingPage from '../containers/LandingPage'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/freestyle" component={Freestyle} />
    </div>
  </BrowserRouter>
)

export default App