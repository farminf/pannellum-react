import propTypes from "prop-types";
import React, { PureComponent } from "react";
import "../pannellum/css/pannellum.css";
import "../pannellum/css/style-textInfo.css";

import "../pannellum/js/libpannellum.js";
import "../pannellum/js/pannellum.js";
import "../pannellum/js/RequestAnimationFrame";

class Pannellum extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.random()
        .toString(36)
        .substr(2, 9)
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
    haov: propTypes.number,
    vaov: propTypes.number,
    vOffset: propTypes.number,
    yaw: propTypes.number,
    pitch: propTypes.number,
    hfov: propTypes.number,
    minHfov: propTypes.number,
    maxHfov: propTypes.number,
    minPitch: propTypes.number,
    maxPitch: propTypes.number,
    minYaw: propTypes.number,
    maxYaw: propTypes.number,
    autoRotate: propTypes.number,
    compass: propTypes.bool,
    preview: propTypes.string,
    previewTitle: propTypes.string,
    previewAuthor: propTypes.string,
    title: propTypes.string,
    author: propTypes.string,
    autoLoad: propTypes.bool,
    orientationOnByDefault: propTypes.bool,
    showZoomCtrl: propTypes.bool,
    keyboardZoom: propTypes.bool,
    mouseZoom: propTypes.bool,
    draggable: propTypes.bool,
    disableKeyboardCtrl : propTypes.bool,
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
    tooltip: propTypes.func,
    tooltipArg: propTypes.object,
    handleClick: propTypes.func,
    handleClickArg: propTypes.object,
    cssClass: propTypes.string,
    onRender: propTypes.func,
  };

  static defaultProps = {
    children: [],
    width: "100%",
    height: "400px",
    image: "",
    haov: 360,
    vaov: 180,
    vOffset: 0,
    yaw: 0,
    pitch: 0,
    hfov: 100,
    minHfov: 50,
    maxHfov: 150,
    minPitch: -90,
    maxPitch: 90,
    minYaw: -180,
    maxYaw: 180,
    autoRotate: 0,
    compass: false,
    preview: "",
    previewTitle: "",
    previewAuthor: "",
    title: "",
    author: "",
    autoLoad: false,
    orientationOnByDefault: false,
    showZoomCtrl: true,
    keyboardZoom: true,
    mouseZoom: true,
    draggable: true,
    disableKeyboardCtrl: false,
    showFullscreenCtrl: true,
    showControls: true,
    onLoad: () => {},
    onScenechange: () => {},
    onScenechangefadedone: () => {},
    onError: () => {},
    onErrorcleared: () => {},
    onMousedown: () => {},
    onMouseup: () => {},
    onTouchstart: () => {},
    onTouchend: () => {},
    hotspotDebug: false,
    onRender: null,
  };

  renderImage = state => {
    const { children } = this.props;
    // make the array of sub components, even if its one, it become array of one
    let hotspots = [...children];
    let hotspotArray = [];
    if (Array.isArray(hotspots)) {
      hotspots.map(hotspot => {
        switch (hotspot.props.type) {
          case "info":
            return hotspotArray.push({
              id: Math.random()
                .toString(36)
                .substr(2, 9),
              type: hotspot.props.type,
              pitch: hotspot.props.pitch ? hotspot.props.pitch : 10,
              yaw: hotspot.props.yaw ? hotspot.props.yaw : 10,
              text: hotspot.props.text ? hotspot.props.text : "",
              URL: hotspot.props.URL ? hotspot.props.URL : ""
            });
          case "custom":
            return hotspotArray.push({
              id: Math.random()
                .toString(36)
                .substr(2, 9),
              pitch: hotspot.props.pitch ? hotspot.props.pitch : 10,
              yaw: hotspot.props.yaw ? hotspot.props.yaw : 10,
              cssClass: hotspot.props.cssClass
                ? hotspot.props.cssClass
                : "tooltipcss",
              createTooltipFunc: hotspot.props.tooltip
                ? hotspot.props.tooltip
                : this.hotspotTooltip,
              createTooltipArgs: hotspot.props.tooltipArg
                ? hotspot.props.tooltipArg
                : {},
              clickHandlerFunc: hotspot.props.handleClick
                ? hotspot.props.handleClick
                : this.handleClickHotspot,
              clickHandlerArgs: hotspot.props.handleClickArg
                ? hotspot.props.handleClickArg
                : { name: "test" }
            });
          default:
            return [];
        }
      });
    }

    let jsonConfig = {
      type: "equirectangular",
      panorama: this.props.image,
      haov: this.props.haov,
      vaov: this.props.vaov,
      vOffset: this.props.vOffset,
      yaw: this.props.yaw,
      pitch: this.props.pitch,
      hfov: this.props.hfov,
      minHfov: this.props.minHfov,
      maxHfov: this.props.maxHfov,
      minPitch: this.props.minPitch,
      maxPitch: this.props.maxPitch,
      minYaw: this.props.minYaw,
      maxYaw: this.props.maxYaw,
      autoRotate: this.props.autoRotate,
      compass: this.props.compass,
      preview: this.props.preview,
      previewTitle: this.props.previewTitle,
      previewAuthor: this.props.previewAuthor,
      author: this.props.author,
      title: this.props.title,
      autoLoad: this.props.autoLoad,
      orientationOnByDefault: this.props.orientationOnByDefault,
      showZoomCtrl: this.props.showZoomCtrl,
      keyboardZoom: this.props.keyboardZoom,
      mouseZoom: this.props.mouseZoom,
      draggable: this.props.draggable,
      disableKeyboardCtrl: this.props.disableKeyboardCtrl,
      showFullscreenCtrl: this.props.showFullscreenCtrl,
      showControls: this.props.showControls,
      hotSpotDebug: this.props.hotspotDebug,
      hotSpots: hotspotArray,
      onRender: this.props.onRender,
    };

    Object.keys(jsonConfig).forEach(
      key => jsonConfig[key] === "" && delete jsonConfig[key]
    );
    // this.setState({ jsonConfig });

    if (state === "update") {
      this.panorama.destroy();
    } 
    this.panorama = pannellum.viewer(
      this.props.id ? this.props.id : this.state.id,
      jsonConfig
    );

    this.panorama.on("load", this.props.onLoad);
    this.panorama.on("scenechange", this.props.onScenechange);
    this.panorama.on("scenechangefadedone", this.props.onScenechangefadedone);
    this.panorama.on("error", this.props.onError);
    this.panorama.on("errorcleared", this.props.onErrorcleared);
    this.panorama.on("mousedown", this.props.onMousedown);
    this.panorama.on("mouseup", this.props.onMouseup);
    this.panorama.on("touchstart", this.props.onTouchstart);
    this.panorama.on("touchend", this.props.onTouchend);
    
  };

  componentDidMount = () => {
    this.renderImage("mount");
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.image !== this.props.image ||
      prevProps.width !== this.props.width ||
      prevProps.height !== this.props.height ||
      prevProps.compass !== this.props.compass ||
      prevProps.title !== this.props.title ||
      prevProps.author !== this.props.author ||
      prevProps.preview !== this.props.preview ||
      prevProps.previewTitle !== this.props.previewTitle ||
      prevProps.previewAuthor !== this.props.previewAuthor ||
      prevProps.showZoomCtrl !== this.props.showZoomCtrl ||
      prevProps.showFullscreenCtrl !== this.props.showFullscreenCtrl ||
      prevProps.showControls !== this.props.showControls ||
      prevProps.children.length !== this.props.children.length
    ) {
      this.renderImage("update");
    }
    if (prevProps.maxYaw !== this.props.maxYaw ||
      prevProps.minYaw !== this.props.minYaw ||
      prevProps.maxPitch !== this.props.maxPitch ||
      prevProps.minPitch !== this.props.minPitch ||
      prevProps.maxHfov !== this.props.maxHfov ||
      prevProps.minHfov !== this.props.minHfov){
      this.panorama.setYawBounds([this.props.minYaw,this.props.maxYaw]);
      this.panorama.setPitchBounds([this.props.minPitch,this.props.maxPitch]);
      this.panorama.setHfovBounds([this.props.minHfov,this.props.maxHfov]);
    }
    if (prevProps.yaw !== this.props.yaw) {
      this.panorama.setYaw(this.props.yaw);
    }
    if (prevProps.pitch !== this.props.pitch) {
      this.panorama.setPitch(this.props.pitch);
    }
    if (prevProps.hfov !== this.props.hfov) {
      this.panorama.setHfov(this.props.hfov);
    }
  }

  handleClickHotspot = (e, args) => {
    console.log("hotspot clicked", args.name);
  };

  hotspotTooltip = (hotSpotDiv, args) => {
    hotSpotDiv.setAttribute("id", "textInfo");
    const hDiv = document.createElement("div");
    hDiv.classList.add("hotspot");
    const outDiv = document.createElement("div");
    outDiv.classList.add("out");
    const inDiv = document.createElement("div");
    inDiv.classList.add("in");
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    hotSpotDiv.appendChild(hDiv);
    hDiv.appendChild(inDiv);
    hDiv.appendChild(outDiv);
  };

  getViewer = () => {
    return this.panorama;
  };

  forceRender = () => {
    this.renderImage("update");
  };

  render() {
    let { width, height } = this.props;
    let divStyle = {
      width: width,
      height: height
    };
    return (
      <div
        id={this.props.id ? this.props.id : this.state.id}
        style={divStyle}
        ref={node => (this.imageNode = node)}
      />
    );
  }
}
Pannellum.Hotspot = () => {};
Pannellum.Hotspot = () => {};
export default Pannellum;
