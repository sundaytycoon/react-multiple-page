import React, { Component } from 'react'
import MultiView from 'lib/MultiView'
import Section1 from './Section1';
import Section2 from './Section2';

class TestPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <MultiView>
          <Section1 />
          <Section2 />
          <Section1 />
          <Section2 />
          <div>123</div>
          <button>123123</button>
          <Section1 />
          <Section2 />
        </MultiView>
      </div>
    )
  }
}
export default TestPage;