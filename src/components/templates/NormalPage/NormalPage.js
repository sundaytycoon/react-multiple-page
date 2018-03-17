import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class NormalPage extends Component{
  constructor(props) {
    super(props)
  }


  render() {
    const { header, children } = this.props

    return (
      <main>
        <header>
          <h1>{header.title}</h1>
          <ul className="header-tab">
            <li><Link to="/">MAIN</Link></li>
            <li><Link to="/form">FORM</Link></li>
          </ul>
        </header>
        <hr/>
        <section>
          {children}
        </section>
      </main>
    )
  }
}