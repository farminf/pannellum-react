# pannellum-react

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

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
import {Pannellum , PannellumVideo} from 'pannellum-react';
```

> **Note:** Currently only `equirectangular` type is supported! planning to do also `multires`

> **Note:** `Tours` component currently is not supported but is WIP.
> **Note:** For having video tours, there is the custum hotspot which can implement the video scene changing using `handleClick`. In fact in can be the tour for videos and photos.

## Simple Example

```JavaScript
import React, { Component } from 'react';
import { render } from 'react-dom';

import { Pannellum } from "pannellum-react";
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



## Demo

WIP

## API

pannellum-react has most of the official pannellum properties (not all of them). It just needed to be passed as props of the `pannellum` component like example above.

**Props API**

| Name                   | Type     | Default                 | Description                                                                                    |
| ---------------------- | -------- | ----------------------- | ---------------------------------------------------------------------------------------------- |
| id                     | String   | Unique Generated String | If you pass it, it will use it for div id, if not it would be unique string for each component |
| width                  | String   | "100%"                  | The width of the panorama div                                                                  |
| height                 | String   | "400px"                 | The height of the panorama div                                                                 |
| image                  | String   | ""                      | The 360 image path                                                                             |
| yaw                    | Number   | 0                       | Starting yaw position in degrees                                                               |
| pitch                  | Number   | 0                       | Starting pitch position in degrees                                                             |
| hfov                   | Number   | 100                     | Starting horizontal field of view in degrees                                                   |
| maxHfov                | Number   | 150                     | Maximum field of view which user can zoom (in degrees)                                         |
| minHfov                | Number   | 50                      | Minimum field of view which user can zoom (in degrees)                                         |
| compass                | Boolean  | false                   | Showing compass if true                                                                        |
| title                  | String   | ""                      | Displays as the panorama’s title                                                              |
| author                 | String   | ""                      | Displays as the panorama’s author                                                             |
| preview                | String   | ""                      | Preview image path to display                                                                  |
| previewTitle           | String   | ""                      | Preview title to display                                                                       |
| previewAuthor          | String   | ""                      | Preview Author to display                                                                      |
| autoLoad               | Boolean  | false                   | Load and dsplay the image automatically if true                                                |
| orientationOnByDefault | Boolean  | false                   | If true Device orientation will work if device supported                                       |
| showZoomCtrl           | Boolean  | true                    | The zoom control display on the image                                                          |
| keyboardZoom           | Boolean  | true                    | Enables zoom control from keyboard if true                                                     |
| mouseZoom              | Boolean  | true                    | Enables zoom control with mouse if true                                                        |
| draggable              | Boolean  | true                    | If false, mouse and touch dragging is disabled                                                 |
| showFullscreenCtrl     | Boolean  | true                    | FullScreen control display                                                                     |
| showControls           | Boolean  | true                    | if False, no control displays                                                                  |
| onLoad                 | Function |                         | Callbakc function which fires after loading                                                    |
| onError                | Function |                         | Callbakc function which fires after error                                                      |
| onErrorcleared         | Function |                         | Callbakc function which calls after clearing the error                                         |
| onMousedown            | Function |                         | Callbakc function which calls after mouse button press                                         |
| onMouseup              | Function |                         | Callbakc function which calls after mouse button release                                       |
| onTouchstart           | Function |                         | Callbakc function which calls after touch starts                                               |
| onTouchend             | Function |                         | Callbakc function which calls after touch ends                                                 |
| hotspotDebug           | Boolean  | false                   | For debug pupose (finding correct point for hotspot)                                           |

**HotSpot API**

#### Info 

| Name  | Type   | Default | Description                              |
| ----- | ------ | ------- | ---------------------------------------- |
| type  | String | info    | you should pass it                       |
| pitch | Number | 0       | the pitch for hotspot                    |
| yaw   | Number | 0       | the yaw for hotspot                      |
| text  | String | ""      | on mouse over hotspot shows the text box |
| URL   | String | ""      | onClick of hotspot opens on new page     |

#### Custom

| Name        | Type     | Default          | Description                                                               |
| ----------- | -------- | ---------------- | ------------------------------------------------------------------------- |
| type        | String   | custom           | you should pass it                                                        |
| pitch       | Number   | 0                | the pitch for hotspot                                                     |
| yaw         | Number   | 0                | the yaw for hotspot                                                       |
| Tooltip     | Function | see demo         | the function pass div element and you can append any shape or html or ... |
| handleClick | Function | logging the name | fires onclick of hotspot                                                  |
| name        | String   | noName           | will be passed to handleClick                                             |

**Video API**

| Name     | Type    | Default | Description                   |
| -------- | ------- | ------- | ----------------------------- |
| video    | String  | " "     | Path to your 360 video        |
| loop     | Boolean | false   | Looping over video            |
| autoplay | Boolean | true    | Play the video as page loaded |
| controls | Boolean | false   | showing controls under        |

    width: '100%',
    height: '400px',
    video:'',
    yaw : 0,
    pitch: 0,
    hfov: 100,
    minHfov: 50,
    maxHfov: 150,
    hotspotDebug: false,
    autoRotate: 0,
    mouseZoom: true,

Hotspots

### Example with all the available props

```JavaScript
<Pannellum
  width="100%"
  height="500px"
  image={myImage}
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

/>
```

## License

pannellum-react is released under the MIT license.
