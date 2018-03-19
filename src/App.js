import React, { Fragment } from 'react'

import { Route, Switch, BrowserRouter } from 'react-router-dom'

import MainPage from 'components/pages/MainPage'
import FormPage from 'components/pages/FormPage'
import TestPage from 'components/pages/TestPage'

const App = ({ location, history }) => (
  <Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TestPage} />
        <Route path="/form" component={FormPage} />
      </Switch>
    </BrowserRouter>
  </Fragment>
)

export default App
