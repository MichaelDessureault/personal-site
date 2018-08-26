import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import App from '../../App'
import * as modules from '../../modules/'

export default () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='' component={App}/>
      <Route path='/about'  component={modules.AboutContainer}/>
    </Switch>
    </BrowserRouter>
  )
 }