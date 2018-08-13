import propTypes from 'prop-types';
import React, { Component } from 'react';
import '../pannellum/css/pannellum.css';
import '../pannellum/css/style-textInfo.css';

import '../pannellum/js/libpannellum.js';
import '../pannellum/js/pannellum.js';
import '../pannellum/js/RequestAnimationFrame';


class Pannellum extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: Math.random().toString(36).substr(2, 9),
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
    image: propTypes.string,
    yaw : propTypes.number,
    pitch: propTypes.number,
    hfov: propTypes.number,
    minHfov: propTypes.number,
    maxHfov: propTypes.number,
    autoRotate: propTypes.number,
    compass: propTypes.bool,
    preview: propTypes.string,
    previewTitle: propTypes.string,
    previewAuthor: propTypes.string,
    title : propTypes.string,
    author: propTypes.string,
    autoLoad: propTypes.bool,
    orientationOnByDefault: propTypes.bool,
    showZoomCtrl: propTypes.bool,
    keyboardZoom: propTypes.bool,
    mouseZoom: propTypes.bool,
    draggable: propTypes.bool,
    showFullscreenCtrl: propTypes.bool,
    showControls: propTypes.bool,
    onLoad: propTypes.func,
    onScenechange: propTypes.func,
    onScenechangefadedone: propTypes.func,
    onError: propTypes.func,
    onErrorcleared: propTypes.func,
    onMousedown: propTypes.func,
    onMouseup: propTypes.func,
    onTouchstart: propTypes.func,
    onTouchend: propTypes.func,
    hotspotDebug: propTypes.bool,
    Tooltip: propTypes.func,
    handleClick:propTypes.func,
    name: propTypes.string
  }

  static defaultProps = {
    children:[],
    width: '100%',
    height: '400px',
    image:'',
    yaw : 0,
    pitch: 0,
    hfov: 100,
    minHfov: 50,
    maxHfov: 150,
    autoRotate: 0,
    compass: false,
    preview: '',
    previewTitle: '',
    previewAuthor: '',
    title : '',
    author: '',
    autoLoad: false,
    orientationOnByDefault: false,
    showZoomCtrl: true,
    keyboardZoom: true,
    mouseZoom: true,
    draggable: true,
    showFullscreenCtrl: true,
    showControls: true,
    onLoad: ()=>{},
    onScenechange: ()=>{},
    onScenechangefadedone: ()=>{},
    onError: ()=>{},
    onErrorcleared: ()=>{},
    onMousedown: ()=>{},
    onMouseup: ()=>{},
    onTouchstart: ()=>{},
    onTouchend: ()=>{},
    hotspotDebug: false,
  }

  renderImage = (state) =>{
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
              "createTooltipFunc": hotspot.props.Tooltip ? hotspot.props.Tooltip: this.hotspotTooltip,
              "cssClass": "tooltipcss",
              "createTooltipArgs":"",
              "clickHandlerArgs": hotspot.props.name ? hotspot.props.name : "noName",
              "clickHandlerFunc": hotspot.props.handleClick ? hotspot.props.handleClick : hotspot.handleClickHotspot,
            });
          default:
            return [];
        }
        
      });
    }

    

    let jsonConfig = {
      type: "equirectangular",
      panorama: this.props.image,
      yaw : this.props.yaw,
      pitch: this.props.pitch,
      hfov: this.props.hfov,
      minHfov: this.props.minHfov,
      maxHfov: this.props.maxHfov,
      autoRotate: this.props.autoRotate,
      compass: this.props.compass,
      preview: this.props.preview,
      previewTitle:this.props.previewTitle,
      previewAuthor:this.props.previewAuthor,
      author: this.props.author,
      title : this.props.title,
      autoLoad: this.props.autoLoad,
      orientationOnByDefault: this.props.orientationOnByDefault,
      showZoomCtrl: this.props.showZoomCtrl,
      keyboardZoom: this.props.keyboardZoom,
      mouseZoom: this.props.mouseZoom,
      draggable: this.props.draggable,
      showFullscreenCtrl: this.props.showFullscreenCtrl,
      showControls:this.props.showControls,
      hotSpotDebug: this.props.hotspotDebug,
      hotSpots: hotspotArray
    };
  
    Object.keys(jsonConfig).forEach((key) => (jsonConfig[key] === "") && delete jsonConfig[key]);
    
    if (state === "update"){

      this.state.renderer.destroy();
      let p = pannellum.viewer(this.props.id ? this.props.id : this.state.id, jsonConfig);

      p.on("load" , this.props.onLoad);
      p.on("scenechange" , this.props.onScenechange);
      p.on("scenechangefadedone" , this.props.onScenechangefadedone);
      p.on("error" , this.props.onError);
      p.on("errorcleared" , this.props.onErrorcleared);
      p.on("mousedown" , this.props.onMousedown);
      p.on("mouseup" , this.props.onMouseup);
      p.on("touchstart" , this.props.onTouchstart);
      p.on("touchend" , this.props.onTouchend);

    } else {
      const panorama = pannellum.viewer(this.props.id ? this.props.id : this.state.id, jsonConfig);
      this.setState({
        renderer: panorama
      });
      panorama.on("load" , this.props.onLoad);
      panorama.on("scenechange" , this.props.onScenechange);
      panorama.on("scenechangefadedone" , this.props.onScenechangefadedone);
      panorama.on("error" , this.props.onError);
      panorama.on("errorcleared" , this.props.onErrorcleared);
      panorama.on("mousedown" , this.props.onMousedown);
      panorama.on("mouseup" , this.props.onMouseup);
      panorama.on("touchstart" , this.props.onTouchstart);
      panorama.on("touchend" , this.props.onTouchend);
    }
    
  }

  componentDidMount = () => {
    // const { children } = this.props;
    // let hotspotArray = [];
    // if (Array.isArray(children)){
    //   children.map(hotspot =>{
    //     return hotspotArray.push({ 
    //       "type":hotspot.props.type,
    //       "pitch":hotspot.props.pitch,
    //       "yaw":hotspot.props.yaw,
    //       "text":hotspot.props.text,
    //       "URL":hotspot.props.URL
    //     });
    //   });
    // } else {
    //   hotspotArray.push(
    //     { 
    //       "type":children.props.type,
    //       "pitch":children.props.pitch,
    //       "yaw":children.props.yaw,
    //       "text":children.props.text,
    //       "URL":children.props.URL
    //     }
    //   );
    // }

    this.renderImage("mount");

  }


  componentDidUpdate (){
    this.renderImage("update");
  }

  handleClickHotspot = (e , id) => {
    console.log("hotspot clicked" , id);
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


  render() {
    let { width, height, ...props } = this.props;
    let divStyle = {
      width : width,
      height : height
    };
    return (
      <div 
        id={this.props.id ? this.props.id : this.state.id}
        style={divStyle}
        ref={node => this.imageNode = node}
      />
    );
  }
}
Pannellum.Hotspot = () => {};
Pannellum.Hotspot = () => {};
export default Pannellum;
