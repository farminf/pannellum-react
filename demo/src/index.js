import React, { Component } from 'react';
import { render } from 'react-dom';

import { Pannellum }  from '../../src';
import myImage from "./images/alma.jpg";
// import myImage from "./images/GironMuseum.jpg"

class Demo extends Component {
  state = { loading: false }

  handleToggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  render() {
    return (
      <div>
        <h1>Pannellum React Component</h1>
        <Pannellum 
          height="500px"
          image={myImage}
          width="100%"
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
