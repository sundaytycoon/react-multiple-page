import React from 'react'

import { Link } from 'react-router-dom'

const NormalPage = ({ header, children }) => (
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

export default NormalPage
