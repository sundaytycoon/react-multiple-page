import React, { Component } from 'react'

import MultiplePageView from 'lib/MultiplePageView'
import { Prompt } from 'react-router-dom'

import NormalPage from 'components/templates/NormalPage'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

export default class FormPage extends Component{
  constructor(props) {
    super(props)
    this.header = {
      title: 'Form Page'
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
  handleChange = (name, value) =>
    this.setState({
      ...this.state,
      inputs: {
        ...this.state.inputs,
        [name]: {
          value,
          tips: '',
        }
      },
    })

  
  dirtyCheck = () =>
    Object.keys(this.state.inputs)
      .filter(key => this.state.inputs[key].value.length > 3) 
      .length !== 0 // if it was written 3 + 1 more characters
  

  render() {

    return (
      <NormalPage header={this.header}>
        getting started `react-multiple-page` !
        <MultiplePageView
          {...this.state}
          pathname={this.props.location.pathname}
          pages={[Section1, Section2, Section3]}
          // transmit custom props
          when={this.dirtyCheck()}
          message={"메시지를 작성중입니다 정말 이 페이지를 떠나시겠습니까?"}
          handleChange={this.handleChange}
        />
      </NormalPage>
    )
  }
}