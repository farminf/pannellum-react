import React, { Component } from 'react';
import { render } from 'react-dom';

import { Pannellum, PannellumVideo }  from '../../src';
import myImage from "./images/alma.jpg";
import myVideo from "./images/jfk.mp4";


const Demo = () => (
  <div>
    <h1>Pannellum React Component</h1>
    <Pannellum
      width="700px"
      height="400px"
      image={myImage}
      pitch={10}
      yaw={180}
      hfov={110}
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
          "text": "Info Hotspot Text 1",
          "URL": "https://github.com/farminf/pannellum-react"
        }
      ]}
      hotspotDebug={false}
    />
    <Pannellum
      width="800px"
      height="300px"
      image={myImage}
      pitch={10}
      yaw={180}
      hfov={500}
      autoLoad
      author=""
      title=""
      orientationOnByDefault={false}
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
      hotspotDebug={false}
    >
      <Pannellum.Hotspot 
        type="info"
        pitch={11}
        yaw={-167}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf"
      />

      <Pannellum.Hotspot 
        type="info"
        pitch={31}
        yaw={-107}
        text="Info Hotspot Text 4"
        URL="https://github.com/farminf"
      />

    </Pannellum>
    <PannellumVideo
      video={myVideo}
      width="800px"
      height="300px"
      pitch={10}
      yaw={180}
      hfov={500}
    />
    <PannellumVideo
    video={myVideo}
    width="800px"
    height="300px"
    pitch={10}
    yaw={180}
    hfov={500}
  />
    
  </div>
);

render(<Demo />, document.querySelector('#demo'));
