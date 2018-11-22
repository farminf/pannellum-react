import React, { Component } from "react";
import { Pannellum } from "../../../src";
import myImage from "../images/alma.jpg";
import myImage2 from "../images/milan.jpg";

export default class ImageDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaPhoto: myImage,
      yaww: 180,
      test: false,
      updateText: "initial",
      author: "author"
    };
    this.ref = React.createRef();
  }

  hanldeClickImage = (evt, args) => {
    console.log(args.name);
    this.setState({
      mediaPhoto: myImage2
    });
  };

  handleClick = () => {
    this.setState({
      mediaPhoto: myImage2,
      test: false
    });
  };

  render() {
    return (
      <div className="image_main">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button
            onClick={() => this.setState(prevState => ({ author: "change" }))}
          >
            {" "}
            change author{" "}
          </button>
          <button
            onClick={() =>
              this.setState(prevState => ({ yaww: prevState.yaww + 10 }))
            }
          >
            {" "}
            change yaw{" "}
          </button>
          <button onClick={() => this.setState({ updateText: "after update" })}>
            {" "}
            Should not update{" "}
          </button>
          <h3>{this.state.updateText}</h3>
          <button
            onClick={() => {
              this.setState({ test: true, yaww: 100, mediaPhoto: myImage });
            }}
          >
            {" "}
            enable{" "}
          </button>
          <div>
            {this.state.test && (
              <button onClick={this.handleClick}> disable </button>
            )}
          </div>
        </div>
        <h2 className="section_title">Image Component</h2>
        <div className="pannellum_div">
          <Pannellum
            ref={this.ref}
            width="800px"
            height="400px"
            image={this.state.mediaPhoto}
            pitch={10}
            yaw={this.state.yaww}
            hfov={120}
            autoLoad
            author={this.state.author}
            title=""
          >
            <Pannellum.Hotspot
              type="info"
              pitch={11}
              yaw={-167}
              text="Info Hotspot Text 3"
              URL="https://github.com/farminf"
            />

            <Pannellum.Hotspot
              type="custom"
              pitch={31}
              yaw={150}
              handleClick={(evt, args) => this.hanldeClickImage(evt, args)}
              handleClickArg={{ name: "test" }}
            />
          </Pannellum>

          <div className="codebox">
            <pre>
              <code data-language="xml">
                {`
    <Pannellum
        width="800px"
        height="400px"
        image={this.state.mediaPhoto}
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
        type="custom"
        pitch={31}
        yaw={150}
        handleClick={(evt , args) => this.hanldeClickImage(evt , args)}
        handleClickArg={{ "name":"test" }}
        />

    </Pannellum>
                `}
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
