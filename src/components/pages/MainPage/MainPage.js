import React, { Component } from 'react'

import NormalPage from 'components/templates/NormalPage'

export default class MainPage extends Component{
  constructor(props) {
    super(props)
    this.header = {
      title: 'MainPage',
    }
    this.state = {
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
  }

  render() {

    return (
      <NormalPage header={this.header}>
        getting started `react-multiple-page` !
      </NormalPage>
    )
  }
}