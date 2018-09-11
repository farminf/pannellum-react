import React, { Component } from 'react';
import { render } from 'react-dom';
import "./index.css";
import Header  from "./components/Header";
import ImageDemo from "./components/ImageDemo";
import VideoDemo from "./components/VideoDemo";




class Demo extends Component {
  

  render() {
    return (
      <div className="app">
        <Header />
        <ImageDemo />
        <VideoDemo />
      </div>
    );
  }

}


render(<Demo />, document.querySelector('#demo'));
