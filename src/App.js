import React, { Fragment } from 'react'

import { Route, Switch, BrowserRouter } from 'react-router-dom'

import MainPage from 'components/pages/MainPage'
import FormPage from 'components/pages/FormPage'


const App = ({ location, history }) => (
  <Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/form" component={FormPage} />
      </Switch>
    </BrowserRouter>
  </Fragment>
)

export default App
