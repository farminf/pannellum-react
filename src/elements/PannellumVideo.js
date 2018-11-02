import propTypes from 'prop-types';
import React, { Component } from 'react';
import videojs from 'video.js';
import '../pannellum/css/video-js.css';
import '../pannellum/css/pannellum.css';
import '../pannellum/css/style-textInfo.css';
import '../pannellum/js/libpannellum.js';
import '../pannellum/js/RequestAnimationFrame';
import '../pannellum/js/pannellum.js';
import '../pannellum/js/videojs-pannellum-plugin';


class PannellumVideo extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: Math.random().toString(36).substr(2, 9)
    };
  }

  static propTypes = {
    children: propTypes.oneOfType([
      propTypes.arrayOf(propTypes.node),
      propTypes.node
    ]),
    id: propTypes.string,
    width: propTypes.string,
    height: propTypes.string,
    video: propTypes.string,
    yaw : propTypes.number,
    pitch: propTypes.number,
    hfov: propTypes.number,
    minHfov: propTypes.number,
    maxHfov: propTypes.number,
    minPitch: propTypes.number,
    maxPitch: propTypes.number,
    minYaw: propTypes.number,
    maxYaw: propTypes.number,
    hotspotDebug: propTypes.bool,
    autoRotate: propTypes.number,
    mouseZoom: propTypes.bool,
    loop:propTypes.bool,
    autoplay:propTypes.bool,
    controls:propTypes.bool,
    muted:propTypes.bool,
    tooltip: propTypes.func,
    tooltipArg: propTypes.object,
    handleClick:propTypes.func,
    handleClickArg: propTypes.object,
    cssClass: propTypes.string,
  }

  static defaultProps = {
    children:[],
    width: '100%',
    height: '400px',
    video:'',
    yaw : 0,
    pitch: 0,
    hfov: 100,
    minHfov: 50,
    maxHfov: 150,
    minPitch: -90,
    maxPitch: 90,
    minYaw: -180,
    maxYaw: 180,
    hotspotDebug: false,
    autoRotate: 0,
    mouseZoom: true,
    loop:false,
    autoplay:true,
    controls:false,
    muted: true
  }

  renderVideo = (state) =>{
    const { children } = this.props;
    // make the array of sub components, even if its one, it become array of one 
    let hotspots = [...children];
    let hotspotArray = [];
    if (Array.isArray(hotspots)){
      hotspots.map(hotspot =>{
        switch (hotspot.props.type){

          case "info":
            return hotspotArray.push({
              "id": Math.random().toString(36).substr(2, 9),
              "type":hotspot.props.type,
              "pitch":hotspot.props.pitch ? hotspot.props.pitch : 10,
              "yaw":hotspot.props.yaw ? hotspot.props.yaw : 10,
              "text":hotspot.props.text ? hotspot.props.text : "",
              "URL":hotspot.props.URL ? hotspot.props.URL : ""
            });
          case "custom":
            return hotspotArray.push({
              "id": Math.random().toString(36).substr(2, 9),
              "pitch":hotspot.props.pitch ? hotspot.props.pitch : 10,
              "yaw":hotspot.props.yaw ? hotspot.props.yaw : 10,
              "cssClass": hotspot.props.cssClass ? hotspot.props.cssClass : 'tooltipcss',
              "createTooltipFunc": hotspot.props.tooltip ? hotspot.props.tooltip : this.hotspotTooltip,
              "createTooltipArgs": hotspot.props.tooltipArg ? hotspot.props.tooltipArg : {},
              "clickHandlerFunc": hotspot.props.handleClick ? hotspot.props.handleClick : this.handleClickHotspot ,
              "clickHandlerArgs": hotspot.props.handleClickArg ? hotspot.props.handleClickArg : { name:"test" },
            });
          default:
            return [];
        }
        
      });
    }

    if (state === "update"){
      
      this.video = videojs(this.videoNode);
      let cuurentHS = [...this.video.pnlmViewer.getConfig().hotSpots];
      this.video.pnlmViewer.setYaw(this.props.yaw);
      this.video.pnlmViewer.setPitch(this.props.pitch);
      this.video.pnlmViewer.setHfov(this.props.hfov);
      this.video.pnlmViewer.setHfovBounds([this.props.minHfov,this.props.maxHfov]);
      
      //remove all hotspots
      cuurentHS.map( hs => this.video.pnlmViewer.removeHotSpot(hs.id));
      // Adding new hotspots
      hotspotArray.map( hs => this.video.pnlmViewer.addHotSpot(hs));
      // setting new video
      this.video.src({ 
        type: 'video/mp4', 
        src: this.props.video 
      });
      return this.video.play();
    } else {
      this.video = videojs(this.videoNode, {
        loop:this.props.loop,
        autoplay:this.props.autoplay,
        controls:this.props.controls,
        muted: this.props.muted,
        plugins: {
          pannellum: {
            yaw : this.props.yaw,
            pitch: this.props.pitch,
            hfov: this.props.hfov,
            minHfov: this.props.minHfov,
            maxHfov: this.props.maxHfov,
            minPitch: this.props.minPitch,
            maxPitch: this.props.maxPitch,
            minYaw: this.props.minYaw,
            maxYaw: this.props.maxYaw,
            hotSpotDebug: this.props.hotspotDebug,
            autoRotate:this.props.autoRotate,
            mouseZoom:this.props.mouseZoom,
            hotSpots: hotspotArray
          }
        } 
      });
      this.video.src({ type: 'video/mp4', src: this.props.video });
      this.video.play();
    }
  }

  componentDidMount = () => {
    this.renderVideo("mount");    
  }

  componentDidUpdate (prevProps){
    // videojs(this.videoNode).dispose();
    // this.videoNode.setAttribute("src", this.props.video );
    this.renderVideo("update");


  }

  handleClickHotspot = (e , args) => {
    console.log("hotspot clicked" , args.name);
  }


  hotspotTooltip = (hotSpotDiv, args) => {
    hotSpotDiv.setAttribute("id", "textInfo");
    const hDiv = document.createElement('div');
    hDiv.classList.add('hotspot');
    const outDiv = document.createElement('div');
    outDiv.classList.add('out');
    const inDiv = document.createElement('div');
    inDiv.classList.add('in');
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    hotSpotDiv.appendChild(hDiv);
    hDiv.appendChild(inDiv);
    hDiv.appendChild(outDiv);
  }

  componentWillUnmount() {
    videojs(this.videoNode).dispose();
  }
  
  getViewer = () => {
    return this.video.pnlmViewer;
  }

  render() {
    let { width, height, video } = this.props;
    let divStyle = {
      width : width,
      height : height
    };
    return (

      <div data-vjs-player>
        <video
          id={this.props.id ? this.props.id : this.state.id}
          className="video-js vjs-default-skin vjs-big-play-centered" 
          ref={node => this.videoNode = node}
          preload="none" 
          crossOrigin="anonymous"
          style={divStyle}
        />
      </div>
    );
  }
}

export default PannellumVideo;
