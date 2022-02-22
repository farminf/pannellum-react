import propTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "../pannellum/css/pannellum.css";
import "../pannellum/css/style-textInfo.css";

import "../pannellum/js/libpannellum.js";
import "../pannellum/js/pannellum.js";
import "../pannellum/js/RequestAnimationFrame";

const Pannellum = (props) => {
  const [id, setId] = useState(Math.random().toString(36).substr(2, 9));

  const renderImage = (state) => {
    const { children } = props;
    // make the array of sub components, even if its one, it become array of one
    let hotspots = [...children];
    let hotspotArray = [];
    if (Array.isArray(hotspots)) {
      hotspots.map((hotspot) => {
        switch (hotspot.props.type) {
          case "info":
            return hotspotArray.push({
              id: Math.random().toString(36).substr(2, 9),
              type: hotspot.props.type,
              pitch: hotspot.props.pitch ? hotspot.props.pitch : 10,
              yaw: hotspot.props.yaw ? hotspot.props.yaw : 10,
              text: hotspot.props.text ? hotspot.props.text : "",
              URL: hotspot.props.URL ? hotspot.props.URL : "",
            });
          case "custom":
            return hotspotArray.push({
              id: Math.random().toString(36).substr(2, 9),
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
                : { name: "test" },
            });
          default:
            return [];
        }
      });
    }

    let jsonConfig = {
      type: "equirectangular",
      panorama: props.image,
      haov: props.haov,
      vaov: props.vaov,
      vOffset: props.vOffset,
      yaw: props.yaw,
      pitch: props.pitch,
      hfov: props.hfov,
      minHfov: props.minHfov,
      maxHfov: props.maxHfov,
      minPitch: props.minPitch,
      maxPitch: props.maxPitch,
      minYaw: props.minYaw,
      maxYaw: props.maxYaw,
      autoRotate: props.autoRotate,
      compass: props.compass,
      preview: props.preview,
      previewTitle: props.previewTitle,
      previewAuthor: props.previewAuthor,
      author: props.author,
      title: props.title,
      autoLoad: props.autoLoad,
      orientationOnByDefault: props.orientationOnByDefault,
      showZoomCtrl: props.showZoomCtrl,
      keyboardZoom: props.keyboardZoom,
      mouseZoom: props.mouseZoom,
      draggable: props.draggable,
      disableKeyboardCtrl: props.disableKeyboardCtrl,
      showFullscreenCtrl: props.showFullscreenCtrl,
      showControls: props.showControls,
      hotSpotDebug: props.hotspotDebug,
      hotSpots: hotspotArray,
      onRender: props.onRender,
    };

    Object.keys(jsonConfig).forEach(
      (key) => jsonConfig[key] === "" && delete jsonConfig[key]
    );

    if (state === "update") {
      this.panorama.destroy();
    }
    this.panorama = pannellum.viewer(props.id ? props.id : id, jsonConfig);

    this.panorama.on("load", props.onLoad);
    this.panorama.on("scenechange", props.onScenechange);
    this.panorama.on("scenechangefadedone", props.onScenechangefadedone);
    this.panorama.on("error", props.onError);
    this.panorama.on("errorcleared", props.onErrorcleared);
    this.panorama.on("mousedown", props.onMousedown);
    this.panorama.on("mouseup", props.onMouseup);
    this.panorama.on("touchstart", props.onTouchstart);
    this.panorama.on("touchend", props.onTouchend);
  };

  useEffect(() => {
    renderImage("mount");
  }, []);

  // useEffect(() => {
  //   if (
  //     prevProps.image !== props.image ||
  //     prevProps.width !== props.width ||
  //     prevProps.height !== props.height ||
  //     prevProps.compass !== props.compass ||
  //     prevProps.title !== props.title ||
  //     prevProps.author !== props.author ||
  //     prevProps.preview !== props.preview ||
  //     prevProps.previewTitle !== props.previewTitle ||
  //     prevProps.previewAuthor !== props.previewAuthor ||
  //     prevProps.showZoomCtrl !== props.showZoomCtrl ||
  //     prevProps.showFullscreenCtrl !== props.showFullscreenCtrl ||
  //     prevProps.showControls !== props.showControls ||
  //     prevProps.children.length !== props.children.length
  //   ) {
  //     renderImage("update");
  //   }
  //   if (
  //     prevProps.maxYaw !== props.maxYaw ||
  //     prevProps.minYaw !== props.minYaw ||
  //     prevProps.maxPitch !== props.maxPitch ||
  //     prevProps.minPitch !== props.minPitch ||
  //     prevProps.maxHfov !== props.maxHfov ||
  //     prevProps.minHfov !== props.minHfov
  //   ) {
  //     this.panorama.setYawBounds([props.minYaw, props.maxYaw]);
  //     this.panorama.setPitchBounds([props.minPitch, props.maxPitch]);
  //     this.panorama.setHfovBounds([props.minHfov, props.maxHfov]);
  //   }
  //   if (prevProps.yaw !== props.yaw) {
  //     this.panorama.setYaw(props.yaw);
  //   }
  //   if (prevProps.pitch !== props.pitch) {
  //     this.panorama.setPitch(props.pitch);
  //   }
  //   if (prevProps.hfov !== props.hfov) {
  //     this.panorama.setHfov(props.hfov);
  //   }
  // }, [props]);

  const handleClickHotspot = (e, args) => {
    console.log("hotspot clicked", args.name);
  };

  const hotspotTooltip = (hotSpotDiv, args) => {
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

  const getViewer = () => {
    return this.panorama;
  };

  const forceRender = () => {
    renderImage("update");
  };

  let { width, height } = this.props;
  let divStyle = {
    width: width,
    height: height,
  };
  return (
    <div
      id={props.id ? props.id : id}
      style={divStyle}
      ref={(node) => (imageNode = node)}
    />
  );
};

Pannellum.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
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
  disableKeyboardCtrl: propTypes.bool,
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

Pannellum.defaultProps = {
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

Pannellum.Hotspot = () => {};

export default Pannellum;
