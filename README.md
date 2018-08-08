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

    {/******  for video component *******/}

    <PannellumVideo
      video={myVideo}
    />

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

It is same as the Pannellum properties , cut and paste from [pannellum refrence page](https://pannellum.org/documentation/reference/)
``` text
pitch (number)
Specifies the pitch portion of the hot spot’s location, in degrees.

yaw (number)
Specifies the yaw portion of the hot spot’s location, in degrees.

type (string)
Specifies the type of the hot spot. Can be scene for scene links or info for information hot spots. A tour configuration file is required for scene hot spots.

text (string)
This specifies the text that is displayed when the user hovers over the hot spot.

URL (string)
If specified for an info hot spot, the hot spot links to the specified URL. Not applicable for scene hot spots.

sceneId (string)
Specifies the ID of the scene to link to for scene hot spots. Not applicable for info hot spots.

targetPitch (number)
Specifies the pitch of the target scene, in degrees. Can also be set to same, which uses the current pitch of the current scene as the initial pitch of the target scene.

targetYaw (number)
Specifies the yaw of the target scene, in degrees. Can also be set to same or sameAzimuth. These settings use the current yaw of the current scene as the initial yaw of the target scene; same uses the current yaw directly, while sameAzimuth takes into account the northOffset values of both scenes to maintain the same direction with regard to north.

targetHfov (number)
Specifies the HFOV of the target scene, in degrees.

id
Specifies hot spot ID, for use with API’s removeHotSpot function.

cssClass (string)
If specified, string is used as the CSS class for the hot spot instead of the default CSS classes.

createTooltipFunc (function) and createTooltipArgs (object)
If createTooltipFunc is specified, this function is used to create the hot spot tooltip DOM instead of the default function. The contents of createTooltipArgs are passed to the function as arguments.

clickHandlerFunc (function) and clickHandlerArgs (object)
If clickHandlerFunc is specified, this function is added as an event handler for the hot spot’s click event. The event object and the contents of clickHandlerArgs are passed to the function as arguments.
```
**Video API**
| Name  | Type   | Default | Description            |
| ----- | ------ | ------- | ---------------------- |
| video | String | ''      | Path to your 360 video |



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
