import t from 'prop-types'
import React, {Component} from 'react';
import '../pannellum/css/pannellum.css';
import '../pannellum/js/libpannellum.js';
import '../pannellum/js/pannellum.js';

class Pannellum extends Component {

  static propTypes = {
    width: t.string,
    height: t.string,
    image:t.string
  }

  static defaultProps = {
    width: '100%',
    height: '400px',
    image:''
  }

  componentDidMount = () => {
    pannellum.viewer('panorama', {
        type: "equirectangular",
        panorama: this.props.image,
        yaw : this.props.yaw,
        pitch: this.props.pitch,
        hfov: this.props.hfov,
        preview: "",
        previewTitle:"",
        previewAuthor:"",
        title : "title",
        author: "Farmin",
        autoLoad: true,
        orientationOnByDefault: true,
        showZoomCtrl: true,
        keyboardZoom: true,
        mouseZoom: true,
        draggable: true,
        showFullscreenCtrl: true,
        showControls:true
    });
  }
  
  render() {
    let {children, width, height, ...props} = this.props

    let divStyle = {
        width : width,
        height : height
    };
    
    return (
        <div id="panorama" style={divStyle}>
        </div>
    )
  }
}

export default Pannellum;