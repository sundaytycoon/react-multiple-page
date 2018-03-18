import React, { Component, Fragment } from 'react'
import { BrowserRouter, Prompt, Redirect } from 'react-router-dom'

import { withRouter } from 'react-router'

class MultiplePageView extends Component{
  state = { when: this.props.when, message: this.props.message }

  nextPage = () => {
    const { location, history, pages } = this.props
    
    if ( location.state.page < pages.length ) history.push(location.pathname, { page : location.state.page + 1 })
    else console.error(`
      You wanna go to page index ${location.state.page + 1} on MultiplePageView.
      But, You've set page by ${pages.length - 1} pages.
      You'd better check your code to change \`pageController.nextPage\` to \`<Link to="/anywhere" />\`
      Or location.pushState(path, { page: ??? }).
    `)
  }

  prevPage = () => {
    const { location, history } = this.props
    if ( location.state.page > 0) history.goBack()
    else console.error(`
      You are in index 0 on MultiplePageView.
      Have no more previous Page.
      You'd better check your code to change \`pageController.prevPage\` to \`<Link to="/anywhere" />\`
      Or location.pushState(path, { page: ??? }).
    `)
  }
  goPage = (page) => {
    const { location, history, pages } = this.props
    if ( page >= 0 && page < pages.length) history.replace(location.pathname, { page })
    else console.error(`
    You are in index 0 on MultiplePageView.
    Have no more previous Page.
    You'd better check your code to change \`pageController.goPage\` to \`<Link to="/anywhere" />\`
    Or location.pushState(path, { page: ??? }).
  `)
  }

  when = (when) => {
    if(typeof when === 'function') this.setState({ when: when() })
    else if(typeof when === 'boolean') this.setState({ when })
    else return this.setState({ when: false })
  }

  message = (message) => {
    if(typeof message === 'function') this.setState({ message: message() })
    else if(typeof message === 'string') this.setState({ message })
    else return this.setState({ message: false })
  }

  render() {
    const { nextPage, prevPage, when, message } = this
    const { location, history, pages } = this.props

    if(!location.state) location.state = { page: 0 }

    return (
      <Fragment>
        {
          pages
            .map((PageComponent, index) => (
              <PageComponent
                key={index}
                pageController={{
                  nextPage,
                  prevPage,
                  when,
                  message,
                }}
                {...this.props}
              />))
            .filter((_, index) => index === location.state.page)
        }
        <Prompt when={this.state.when} message={this.state.message}/>
      </Fragment>
    )

  }
}

MultiplePageView.defaultProps = {
  when: false,
  message: 'Are you sure move away from this page?',
  pages: []
}

export default withRouter(MultiplePageView)
