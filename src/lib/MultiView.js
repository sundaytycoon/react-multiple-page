import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { withRouter } from 'react-router';


const styles={
  display: 'flex',
  width: 'auto',
}

class MultiView extends Component{
  constructor(props){
    super(props);
    this.state = {
      now: 0
    }
    this.pageUp = this.pageUp.bind(this)
  }
  pageUp(){
    const { history, location, children } = this.props

    if(location.state.page < children.length){
      this.setState({
        now: this.state.now+1
      })
      
      history.push(location.pathname, { page: location.state.page + 1 })
    }
  }
  pageDown(){
    const { location, history } = this.props
    if ( location.state.page > 0){
      history.goBack()
    }
  
  }
  render() {
    const { location, history, children } = this.props
    if(!location.state) location.state = { page: 0 }
    console.log(location)
    console.log(history)
    console.log(children)
    const { now } = this.state;
    return (
      <div style={styles}>
        {children[location.state.page]}
        <button onClick={this.pageUp}> Button</button>
      </div>
    )
  }
}

export default withRouter(MultiView);