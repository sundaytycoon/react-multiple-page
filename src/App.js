import React, { Fragment } from 'react'

import { Route, Switch, BrowserRouter } from 'react-router-dom'

import MainPage from 'components/pages/MainPage'
import FormPage from 'components/pages/FormPage'

const getConfirmation = (message, callback) => {
  console.log('외부의 BrowserRouter')
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}
const App = ({ location, history }) => (
  <Fragment>
    <BrowserRouter getUserConfirmation={getConfirmation}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/form" component={FormPage} />
      </Switch>
    </BrowserRouter>
  </Fragment>
)

export default App
