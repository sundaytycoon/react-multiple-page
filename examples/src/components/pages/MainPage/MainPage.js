import React, { Component } from 'react'

import NormalPage from 'components/templates/NormalPage'

export default class MainPage extends Component{

  header = {
    title: 'MainPage',
  }

  state = {
    inputs: {
      email: {
        value:'',
        tips: '',
      },
      password: {
        value:'',
        tips: '',
      },
      nickname: {
        value:'',
        tips: '',
      },
      phone: {
        value:'',
        tips: '',
      },
    },
  }

  render() {

    return (
      <NormalPage header={this.header}>
        <h1> getting started `react-multiple-page` ! </h1>
      </NormalPage>
    )
  }
}