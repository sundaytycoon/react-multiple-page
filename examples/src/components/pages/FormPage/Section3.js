import React, { Component } from 'react'

export default class Section3 extends Component{
  constructor(props) {
    super(props)
    this.props.pageController.message("메시지를 작성중입니다 정말 이 페이지를 떠나시겠습니까?")
  }
  render() {
    const {
      pageController, // from `react-multiple-page` property. that have a role control about this lib
    } = this.props

    return (
      <div className="page">
        <div className="form-control">
          <h1>Contratulation! Now, you are in my service!</h1>
        </div>
        <div className="form-control">
          <button className="half-button" onClick={pageController.prevPage}>Prev</button>
          <button className="half-button" onClick={pageController.nextPage}>Next</button>
        </div>

      </div>
    )
  }
}