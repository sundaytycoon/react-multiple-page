import React, { Component } from 'react'

export default class Section2 extends Component{
  render() {
    const {
      inputs, // custom
      handleChange, // custom
      handleWhen, // custom
      pageController, // from `react-multiple-page` property. that have a role control about this lib
    } = this.props

    const nickname = 'section2-nickname'
    const phone = 'section2-phone'
    return (
      <div className="page">
        <div className="form-control">
          <p className="attr">Nickname</p>
          <label htmlFor={nickname}>
            <input
              type="text"
              value={inputs.nickname.value}
              id={nickname}
              name={nickname}
              onChange={(e) => {
                handleChange('nickname', e.target.value)
                pageController.when(handleWhen)
              }}
            />
            <span>{inputs.nickname.tips}</span>
          </label>
        </div>
        <div className="form-control">
          <p className="attr">Phone</p>
          <label htmlFor={phone}>
            <input type="tel"
              value={inputs.phone.value}
              id={phone}
              name={phone}
              onChange={(e) => {
                handleChange('phone', e.target.value)
                pageController.when(handleWhen)
              }}
            />
            <span>{inputs.phone.tips}</span>
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