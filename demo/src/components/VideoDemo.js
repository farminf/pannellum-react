import React, { Component } from 'react';
import { Pannellum, PannellumVideo }  from '../../../src';
import myVideo from "../images/jfk.mp4";
import myVideo2 from "../images/video.mp4";

export default class componentName extends Component {
  constructor(props){
    super(props);
    this.state ={
      mediaVideo : myVideo2,
      scene: 1
    };
    this.ref = React.createRef();
  }
    
  componentDidMount (){
    console.log(this.ref.current)
  }
    
  hanldeClick = (path)=>{
    console.log(path); 
    this.setState({
      mediaVideo : myVideo,
      title: "ooops", 
      scene: 2
    });
  };

  hanldeClickCheck = (path)=>{
    console.log(path);
    this.setState({
      mediaVideo : myVideo2,
      title: "oo",
      scene: 1
    });
  };

  
  render() {
    return (
      <div className="video_main">
        <h2 className="section_title">Video Component</h2>
        <button onClick={()=> {
            this.ref.current.video.pause()
        }} >stop</button>
        <button onClick={()=> {
            this.ref.current.video.play()
        }} >play</button>
        <div className="pannellum_div" >
          {this.state.scene === 1 
            ?
            ( 
              <PannellumVideo
                ref={this.ref}
                video={this.state.mediaVideo}
                loop
                autoplay
                width="800px"
                height="400px"
                pitch={10}
                yaw={180}
                hfov={120}
                minHfov={50}
                maxHfov={150}
                hotSpotDebug
                mouseZoom={false}
              >
                <Pannellum.Hotspot 
                  type="custom"
                  pitch={31}
                  yaw={150}
                  handleClick={(evt , args) => this.hanldeClick(args.name)}
                  handleClickArg={{ name : "video2" }}
                />

                <Pannellum.Hotspot
                  type="info"
                  pitch={31}
                  yaw={-57}
                  text="Info dfsdfs"
                  URL="https://github.com/farminf"
                />

              </PannellumVideo>
            )
            :
            (
              <PannellumVideo
                video={this.state.mediaVideo}
                loop
                autoplay
                width="600px"
                height="400px"
                pitch={10}
                yaw={180}
                hfov={110}
                minHfov={90}
                maxHfov={120}
                hotSpotDebug
                mouseZoom={false}
              >
                <Pannellum.Hotspot 
                  type="custom"
                  pitch={10}
                  yaw={120}
                  handleClick={(evt , args) => this.hanldeClickCheck(args.name)}
                  handleClickArg={{ name : "video1" }}
                />
                <Pannellum.Hotspot
                  type="info"
                  pitch={40}
                  yaw={160}
                  text="Info Hotspot Text 4"
                  URL="https://github.com/farminf"
                />
              </PannellumVideo>
            )}
          <div className="codebox">
            <pre>
              <code data-language="xml">
                {`
  <PannellumVideo
      video={this.state.mediaVideo}
      loop
      autoplay
      width="800px"
      height="400px"
      pitch={10}
      yaw={180}
      hfov={120}
      minHfov={50}
      maxHfov={150}
      hotSpotDebug
      mouseZoom={false}
  >
      <Pannellum.Hotspot 
      type="custom"
      pitch={31}
      yaw={150}
      handleClick={(evt , args) => this.hanldeClick(args.name)}
      handleClickArg={{ name : "video2" }}
      />

      <Pannellum.Hotspot
      type="info"
      pitch={31}
      yaw={-57}
      text="Info dfsdfs"
      URL="https://github.com/farminf"
      />

  </PannellumVideo>
              `}</code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
