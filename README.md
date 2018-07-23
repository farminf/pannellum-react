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
import { pannellum } from "pannellum-react";
```

> **Note:** Currently only `equirectangular` type is supported! planning to do also `multires`
> > **Note:** `Tours` currently is not supported but in WIP.

## Simple Example

```JavaScript
import React, { Component } from 'react';
import { render } from 'react-dom';

import { Pannellum }  from '../../src';
import myImage from "./images/alma.jpg";

const Demo = () => (
  <div>
    <h1>Pannellum React Component</h>
    <Pannellum
        width="100%"
        height="500px"
        image={myImage}
        pitch={10}
        yaw={180}
        hfov={500}
        autoLoad
        hotspots={[
            {
            pitch: 11,
            yaw: -167,
            type: "info",
            text: "Info Hotspot Text",
            URL: "https://github.com/farminf/pannellum-react"
            }
        ]}
        onLoad={() => {
            console.log("panorama loaded");
        }}
    />
    </div>
);

export default Demo;
```

## Demo

TBD

## API

pannellum-react has most of the official pannellum properties (not all of them). It just needed to be passed as props of the `pannellum` component like example above.

**Props API**

| Name                   | Type     | Default | Description                    |
| ---------------------- | -------- | ------- | ------------------------------ |
| width                  | String   | "100%"  | The width of the panorama div  |
| height                 | String   | "400px" | The height of the panorama div |
| image                  | String   | ""      | The 360 image                  |
| yaw                    | Number   | 0       |                                |
| pitch                  | Number   | 0       |                                |
| hfov                   | Number   | 200     |                                |
| compass                | Boolean  | false   |                                |
| title                  | String   | ""      |                                |
| author                 | String   | ""      |                                |
| preview                | String   | ""      |                                |
| previewTitle           | String   | ""      |                                |
| previewAuthor          | String   | ""      |                                |
| autoLoad               | Boolean  | false   |                                |
| orientationOnByDefault | Boolean  | false   |                                |
| showZoomCtrl           | Boolean  | true    |                                |
| keyboardZoom           | Boolean  | true    |                                |
| mouseZoom              | Boolean  | true    |                                |
| draggable              | Boolean  | true    |                                |
| showFullscreenCtrl     | Boolean  | true    |                                |
| showControls           | Boolean  | true    |                                |
| onLoad                 | Callback |         |                                |
| onError                | Callback |         |                                |
| onErrorcleared         | Callback |         |                                |
| onMousedown            | Callback |         |                                |
| onMouseup              | Callback |         |                                |
| onTouchstart           | Callback |         |                                |
| onTouchend             | Callback |         |                                |
| hotspots               | Array    | []      |                                |
| hotspotDebug           | Boolean  | false   |                                |

**HotSpot API**

It is same as the Pannellum properties

### Example with all the available props

```JavaScript
<Pannellum
  width="100%"
  height="500px"
  image={myImage}
  pitch={10}
  yaw={180}
  hfov={500}
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
  hotspots={[
    {
      pitch: 11,
      yaw: -167,
      type: "info",
      text: "Info Hotspot Text",
      URL: "https://github.com/farminf/pannellum-react"
    }
  ]}
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
