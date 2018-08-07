import expect, { createSpy, spyOn, isSpy } from 'expect';
import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
import Enzyme, { shallow }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import {  Pannellum } from 'src/';

Enzyme.configure({ adapter: new Adapter() });

describe('Pannellum', () => {

  beforeEach(function(){
    spyOn(console, 'error');
  });

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
    const component = shallow(
      <Pannellum
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
        onLoad={this.handleLoad}
      />
    );

    expect(handleLoad.callCount).tobe(1);
  });


  it('fires onLoad callback', () => {
    expect(render(
      <Pannellum
        id="test"
        height="500px"
        width="100%"
        image={"https://pannellum.org/images/alma.jpg"}
        onLoad={this.handleLoad}
      />
    ))
      .toInclude('<div id="test" style="width:100%;height:500px"></div>');
  });


  
});
