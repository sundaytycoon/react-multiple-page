import React, { Component } from 'react'
import shortid from 'shortid'
export default class Section2 extends Component{
  constructor(props) {
    super(props)
    this.props.pageController.message("메시지를 작성중입니다 정말 이 페이지를 떠나시겠습니까?")
  }
  render() {
    const { inputs, handleChange, handleWhen,
      pageController } = this.props

    const nickname = shortid.generate()
    const phone = shortid.generate()
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