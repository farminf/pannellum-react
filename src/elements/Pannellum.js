import propTypes from 'prop-types';
import React, { Component } from 'react';
import '../pannellum/css/pannellum.css';
import '../pannellum/js/libpannellum.js';
import '../pannellum/js/pannellum.js';
import '../pannellum/js/RequestAnimationFrame';

var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

class Pannellum extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: ID()
    };
  }

  static propTypes = {
    id: propTypes.string,
    width: propTypes.string,
    height: propTypes.string,
    image: propTypes.string,
    yaw : propTypes.number,
    pitch: propTypes.number,
    hfov: propTypes.number,
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
    hotspots: propTypes.array,
    hotspotDebug: propTypes.bool
  }

  static defaultProps = {
    width: '100%',
    height: '400px',
    image:'',
    yaw : 0,
    pitch: 0,
    hfov: 200,
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
    hotspots:[],
    hotspotDebug: false,
  }

  componentDidMount = () => {
    let jsonConfig = {
      type: "equirectangular",
      panorama: this.props.image,
      yaw : this.props.yaw,
      pitch: this.props.pitch,
      hfov: this.props.hfov,
      compass: this.props.compass,
      preview: this.props.preview,
      previewTitle:this.props.previewTitle,
      previewAuthor:this.props.previewAuthor,
      title : this.props.title,
      author: this.props.author,
      autoLoad: this.props.autoLoad,
      orientationOnByDefault: this.props.orientationOnByDefault,
      showZoomCtrl: this.props.showZoomCtrl,
      keyboardZoom: this.props.keyboardZoom,
      mouseZoom: this.props.mouseZoom,
      draggable: this.props.draggable,
      showFullscreenCtrl: this.props.showFullscreenCtrl,
      showControls:this.props.showControls,
      hotSpots: this.props.hotspots,
      hotSpotDebug: this.props.hotspotDebug
    };

    Object.keys(jsonConfig).forEach((key) => (jsonConfig[key] === "") && delete jsonConfig[key]);
    const panorama = pannellum.viewer(this.props.id ? this.props.id : this.state.id, jsonConfig);
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
      />
    );
  }
}

export default Pannellum;
