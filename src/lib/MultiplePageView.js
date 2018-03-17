import React, { Component, Fragment } from 'react'
import { BrowserRouter, Prompt, Redirect } from 'react-router-dom'

import { withRouter } from 'react-router'

class MultiplePageView extends Component{
  nextPage = () => {
    const { location, history } = this.props
    history.push(location.pathname, { page : location.state.page + 1 })
  }
  prevPage = () => {
    const { location, history } = this.props
    history.goBack()
  }


  render() {
    const { nextPage, prevPage } = this
    const { location, history, pages } = this.props

    if(!location.state) location.state = { page: 0 }

    console.log(history)
    return (
      <Fragment>
        <div>
          {
            pages
              .map((PageComponent, index) => (
                <PageComponent
                  key={index}
                  pageController={{
                    nextPage,
                    prevPage,
                  }}
                  {...this.props}
                />))
              .filter((_, index) => index === location.state.page)
          }
          <Prompt when={history.action !== 'REPLACE' && this.props.when} message={this.props.message}/>
        </div>
      </Fragment>
    )

  }
}

export default withRouter(MultiplePageView)