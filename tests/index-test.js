import expect from 'expect';
import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';


import {  Pannellum } from 'src/';


describe('Pannellum', () => {
  it('renders a Pannellum component', () => {
    expect(render(
      <Pannellum
        id="test"
        height="500px"
        width="100%"
      />
    ))
      .toInclude('<div id="test" style="width:100%;height:500px"></div>');
  });

  it('renders with other props ', () => {
    expect(render(
      <Pannellum
        id="test"
        height="500px"
        width="100%"
        image={"https://pannellum.org/images/alma.jpg"}
        pitch={10}
        yaw={180}
        hfov={500}
        autoLoad
        mouseZoom={false}
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
    ))
      .toInclude('<div id="test" style="width:100%;height:500px"></div>');
  });
});
