import React, { Component } from 'react'
import shortid from 'shortid'


export default class Section1 extends Component{
  constructor(props) {
    super(props)
    this.props.pageController.message("메시지를 작성중입니다 정말 이 페이지를 떠나시겠습니까?")
  }
  render() {
    const { inputs, handleChange, handleWhen,
      pageController } = this.props

    const email =  shortid.generate()
    const password = shortid.generate()
    return (
      <div className="page">
        <div className="form-control">
          <p className="attr">E-Mail</p>
          <label htmlFor={email}>
            <input
              type="email"
              value={inputs.email.value}
              id={email}
              name={email}
              onChange={(e) => {
                handleChange('email', e.target.value)
                pageController.when(handleWhen)
              }}
            />
            <span>{inputs.email.tips}</span>
          </label>
        </div>
        <div className="form-control">
          <p className="attr">Password</p>
          <label htmlFor={password}>
            <input
              type="password"
              value={inputs.password.value}
              id={password}
              name={password}
              onChange={(e) => {
                handleChange('password', e.target.value)
                pageController.when(handleWhen)
              }}
            />
            <span>{inputs.password.tips}</span>
          </label>
        </div>
        <div className="form-control">
          <button className="half-button" onClick={pageController.prevPage}>Prev</button>
          <button className="half-button" onClick={pageController.nextPage}>Next</button>
        </div>
      </div>
    )
  }
}