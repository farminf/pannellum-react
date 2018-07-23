import React, { Component } from 'react';
import { render } from 'react-dom';

import { Pannellum }  from '../../src';
import myImage from "./images/alma.jpg";

const Demo = () => (
  <div>
    <h1>Pannellum React Component</h1>
    <Pannellum
      width="100%"
      height="500px"
      image={myImage}
      pitch={10}
      yaw={180}
      hfov={500}
      autoLoad
      author=""
      title=""
      orientationOnByDefault={false}
      compass
      draggable
      keyboardZoom
      mouseZoom
      preview=""      
      previewAuthor=""
      previewTitle=""
      showControls
      showFullscreenCtrl
      showZoomCtrl
      onLoad={()=>{console.log("panorama loaded");}}
      onScenechange={(id)=>{console.log("Scene has change on " + id);}}
      onScenechangefadedone={()=>{console.log("panorama loaded");}}
      onError={(err)=>{console.log("Error" , err);}}
      onErrorcleared={()=>{console.log("Error Cleared");}}
      onMousedown={(evt)=>{console.log("Mouse Down" , evt);}}
      onMouseup={(evt)=>{console.log("Mouse Up", evt);}}
      onTouchstart={(evt)=>{console.log("Touch Start", evt);}}
      onTouchend={(evt)=>{console.log("Touch End", evt);}}
      hotspots={[
        {
          "pitch": 11,
          "yaw": -167,
          "type": "info",
          "text": "Info Hotspot Text",
          "URL": "https://github.com/farminf/pannellum-react"
        }
      ]}
      hotspotDebug={false}
    />
  </div>
);

render(<Demo />, document.querySelector('#demo'));
