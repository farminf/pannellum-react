# pannellum-react

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

React Component library for the [Pannellum](https://github.com/mpetroff/pannellum/) project.

_Special thanks to [Matthew Petroff](https://github.com/mpetroff)_

[build-badge]: https://travis-ci.org/farminf/pannellum-react.svg?branch=master
[build]: https://travis-ci.org/farminf/pannellum-react
[npm-badge]: https://img.shields.io/npm/v/pannellum-react.svg
[npm]: https://www.npmjs.org/package/pannellum-react
[coveralls-badge]: https://coveralls.io/repos/github/farminf/pannellum-react/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/farminf/pannellum-react

## Install and Import

Install pannellum-react component

```bash
npm install pannellum-react --save
```

Import pannellum-react in your react component file by

```js
import { Pannellum, PannellumVideo } from "pannellum-react";
```

> **Note:** Currently only `equirectangular` type is supported! planning to do also `multires`

> **Note:** `Tours` component currently is not supported but is WIP.
> **Note:** For having video tours, there is the custum hotspot which can implement the video scene changing using `handleClick`. In fact in can be the tour for videos and photos.
> **Note:** You can also create your tour with custom hotspot, by changing the image dynamically.
> **Note:** If you manage the props by state, you can update the component smoothly (example: updating yaw, pitch or hfov won't re-render the image and it will dynamically update)

## Demo

https://farminf.github.io/pannellum-react/

you can also use codesandbox playground

[![Edit q27rq5p6](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/q27rq5p6)

## Simple Example

```JavaScript
import React, { Component } from 'react';
import { render } from 'react-dom';

import { Pannellum, PannellumVideo } from "pannellum-react";
import myImage from "./images/alma.jpg";
import myVideo from "./images/video.mp4";


const PannellumReact = () => (
  <div>
    <h1>Pannellum React Component</h>
    <Pannellum
        width="100%"
        height="500px"
        image={myImage}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
            console.log("panorama loaded");
        }}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={11}
        yaw={-167}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf/pannellum-react"
      />

      <Pannellum.Hotspot
        type="info"
        pitch={31}
        yaw={-107}
        text="Info Hotspot Text 4"
        URL="https://github.com/farminf/pannellum-react"
      />
    </Pannellum>

    {/******  for video 360 component *******/}

    <PannellumVideo
      video={myVideo}
      loop
      width="100%"
      height="600px"
      pitch={10}
      yaw={180}
      hfov={140}
      minHfov={50}
      maxHfov={180}
    >
      <Pannellum.Hotspot
        type="custom"
        pitch={31}
        yaw={150}
        handleClick={(evt , name) => this.hanldeClick(name)}
        name="hs1"
      />

      <Pannellum.Hotspot
        type="info"
        pitch={31}
        yaw={-57}
        text="Info"
        URL="https://github.com/farminf"
      />
    </PannellumVideo>

    </div>
);

export default PannellumReact;
```

## API

pannellum-react has most of the official pannellum properties (not all of them). It just needed to be passed as props of the `pannellum` component like example above.on

### **Props API**

| Name                   | Type     | Default                 | Description                                                                                     |
| ---------------------- | -------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| id                     | String   | Unique Generated String | If you pass it, it will use it for div id, if not it would be unique string for each component  |
| width                  | String   | "100%"                  | The width of the panorama div                                                                   |
| height                 | String   | "400px"                 | The height of the panorama div                                                                  |
| image                  | String   | ""                      | The 360 image path                                                                              |
| haov                   | Number   | 360                     | Initial horizontal angle of view                                                                |
| vaov                   | Number   | 180                     | Initial vertical angle of view                                                                  |
| vOffsect               | Number   | 0                       | Initial vertical offset angle                                                                   |
| yaw                    | Number   | 0                       | Starting yaw position in degrees                                                                |
| pitch                  | Number   | 0                       | Starting pitch position in degrees                                                              |
| hfov                   | Number   | 100                     | Starting horizontal field of view in degrees                                                    |
| maxHfov                | Number   | 150                     | Maximum field of view which user can zoom (in degrees)                                          |
| minHfov                | Number   | 50                      | Minimum field of view which user can zoom (in degrees)                                          |
| maxPitch               | Number   | 90                      | Maximum field of view pitch (in degrees)                                                        |
| minPitch               | Number   | -90                     | Minimum field of view pitch (in degrees)                                                        |
| maxYaw                 | Number   | 180                     | Maximum field of view yaw (in degrees)                                                          |
| minYaw                 | Number   | -180                    | Minimum field of view yaw (in degrees)                                                          |
| autoRotate             | Number   | 0                       | rotation speed in degrees per second. Positive is counter-clockwise, and negative is clockwise. |
| compass                | Boolean  | false                   | Showing compass if true                                                                         |
| title                  | String   | ""                      | Displays as the panorama’s title                                                                |
| author                 | String   | ""                      | Displays as the panorama’s author                                                               |
| preview                | String   | ""                      | Preview image path to display                                                                   |
| previewTitle           | String   | ""                      | Preview title to display                                                                        |
| previewAuthor          | String   | ""                      | Preview Author to display                                                                       |
| autoLoad               | Boolean  | false                   | Load and dsplay the image automatically if true                                                 |
| orientationOnByDefault | Boolean  | false                   | If true Device orientation will work if device supported                                        |
| showZoomCtrl           | Boolean  | true                    | The zoom control display on the image                                                           |
| keyboardZoom           | Boolean  | true                    | Enables zoom control from keyboard if true                                                      |
| disableKeyboardCtrl    | Boolean  | false                   | Disables control from keyboard if true                                                          |
| mouseZoom              | Boolean  | true                    | Enables zoom control with mouse if true                                                         |
| draggable              | Boolean  | true                    | If false, mouse and touch dragging is disabled                                                  |
| showFullscreenCtrl     | Boolean  | true                    | FullScreen control display                                                                      |
| showControls           | Boolean  | true                    | if False, no control displays                                                                   |
| onLoad                 | Function |                         | Callback function which fires after loading                                                     |
| onRender               | Function |                         | Callback function which fires after each render, helpful if you need to react to yaw/pitch/roll/zoom changes                                                     |
| onError                | Function |                         | Callback function which fires after error                                                       |
| onErrorcleared         | Function |                         | Callback function which calls after clearing the error                                          |
| onMousedown            | Function |                         | Callback function which calls after mouse button press                                          |
| onMouseup              | Function |                         | Callback function which calls after mouse button release                                        |
| onTouchstart           | Function |                         | Callback function which calls after touch starts                                                |
| onTouchend             | Function |                         | Callback function which calls after touch ends                                                  |
| hotspotDebug           | Boolean  | false                   | For debug pupose (finding correct point for hotspot)                                            |

Additionally, by Getting refrence of the component, you can get the pannellum **Viewer** calling `getViewer()` which gives all the available functions of the viewer such as `getPitch`, `setPitch` , `getyaw` and etc. find [here](https://pannellum.org/documentation/api/#viewer)

Moreover, you can force render the component using `forceRender()` in case if you change a prop and didn't change constantly.(example would be hotspot: if you want to update hotspot dynamically, better to call forceRender after updating the hotspots)

> example `this.PanImage.current.getViewer().getPitch()`, PanImage is ref of the component.

> This is working also for the video component

---

### **HotSpot API**

#### Info

| Name  | Type   | Default | Description                              |
| ----- | ------ | ------- | ---------------------------------------- |
| type  | String | info    | you should pass it                       |
| pitch | Number | 0       | the pitch for hotspot                    |
| yaw   | Number | 0       | the yaw for hotspot                      |
| text  | String | ""      | on mouse over hotspot shows the text box |
| URL   | String | ""      | onClick of hotspot opens on new page     |

---

#### Custom

| Name           | Type     | Default                    | Description                                                                                   |
| -------------- | -------- | -------------------------- | --------------------------------------------------------------------------------------------- |
| type           | String   | custom                     | you should pass it                                                                            |
| pitch          | Number   | 0                          | the pitch for hotspot                                                                         |
| yaw            | Number   | 0                          | the yaw for hotspot                                                                           |
| tooltip        | Function | see demo                   | (createTooltipFunc) the function pass div element and you can append any shape or html or ... |
| tooltipArg     | Object   | {}                         | (createTooltipArgs) will be passed to handleClick                                             |
| handleClick    | Function | logging the handleClickArg | (clickHandlerFunc) fires onclick of hotspot                                                   |
| handleClickArg | Object   | {}                         | (clickHandlerArgs) will be passed to handleClick                                              |
| cssClass       | String   | tooltipcss                 | String is used as the CSS class for the hotspot                                               |

---

### **Video API**

these are videojs configuration properties which can be used

| Name     | Type    | Default | Description                   |
| -------- | ------- | ------- | ----------------------------- |
| video    | String  | " "     | Path to your 360 video        |
| loop     | Boolean | false   | Looping over video            |
| autoplay | Boolean | true    | Play the video as page loaded |
| controls | Boolean | false   | showing controls under        |
| muted    | Boolean | true    | making video mute             |

in addition there are also pannellum properties(panorama) which works on video

| Name         | Type    | Default | Description                                                                                     |
| ------------ | ------- | ------- | ----------------------------------------------------------------------------------------------- |
| width        | String  | "100%"  | The width of the panorama div                                                                   |
| height       | String  | "400px" | The height of the panorama div                                                                  |
| video        | String  | ""      | The 360 video path                                                                              |
| yaw          | Number  | 0       | Starting yaw position in degrees                                                                |
| pitch        | Number  | 0       | Starting pitch position in degrees                                                              |
| hfov         | Number  | 100     | Starting horizontal field of view in degrees                                                    |
| maxHfov      | Number  | 150     | Maximum field of view which user can zoom (in degrees)                                          |
| minHfov      | Number  | 50      | Minimum field of view which user can zoom (in degrees)                                          |
| maxPitch     | Number  | 90      | Maximum field of view pitch (in degrees)                                                        |
| minPitch     | Number  | -90     | Minimum field of view pitch (in degrees)                                                        |
| maxYaw       | Number  | 180     | Maximum field of view yaw (in degrees)                                                          |
| minYaw       | Number  | -180    | Minimum field of view yaw (in degrees)                                                          |
| autoRotate   | Number  | 0       | rotation speed in degrees per second. Positive is counter-clockwise, and negative is clockwise. |
| mouseZoom    | Boolean | true    | Enables zoom control with mouse if true                                                         |
| hotspotDebug | Boolean | false   | For debug pupose (finding correct point for hotspot)                                            |

> if you are using chrome, try to keep muted true for autoplay.

---

### Example with all the available props

```JavaScript
<Pannellum
  width="100%"
  height="500px"
  image={myImage}
  haov={180}
  vaov={90}
  vOffset={1}
  pitch={10}
  yaw={180}
  hfov={110}
  maxHfov={170}
  minHfov={30}
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
  hotspotDebug={false}
  onLoad={() => {
    console.log("panorama loaded");
  }}
  onError={err => {
    console.log("Error", err);
  }}
  onErrorcleared={() => {
    console.log("Error Cleared");
  }}
  onMousedown={evt => {
    console.log("Mouse Down", evt);
  }}
  onMouseup={evt => {
    console.log("Mouse Up", evt);
  }}
  onTouchstart={evt => {
    console.log("Touch Start", evt);
  }}
  onTouchend={evt => {
    console.log("Touch End", evt);
  }}
>
  <Pannellum.Hotspot
    type="info"
    pitch={11}
    yaw={-167}
    text="Info Hotspot Text"
    URL="https://github.com/farminf"
  />

  <Pannellum.Hotspot
    type="custom"
    pitch={31}
    yaw={150}
    handleClick={(evt , args) => console.log(args.name)}
    handleClickArg={{ "name":"test" }}
    {/* there are 3 other props. see the custom hotspot doc above*/}
  />

</Pannellum>
```

## License

pannellum-react is released under the MIT license.
