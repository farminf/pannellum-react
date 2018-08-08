import React from 'react';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { renderToStaticMarkup as render } from 'react-dom/server';
import Enzyme, { shallow , mount}  from 'enzyme';
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

  // it('fires onLoad callback', () => {

  //   const component = shallow(
  //     <div>
  //       <Pannellum
  //         id="testtest"
  //         width="800px"
  //         height="300px"
  //         image="https://pannellum.org/images/alma.jpg"
  //         pitch={10}
  //         yaw={180}
  //         hfov={500}
  //         autoLoad
  //         onLoad={this.handleLoad}
  //       >
  //         <Pannellum.Hotspot 
  //           type="info"
  //           pitch={11}
  //           yaw={-167}
  //           text="Info Hotspot Text 3"
  //           URL="https://github.com/farminf"
  //         />
  //       </Pannellum>
  //     </div>
  //   );

  //   expect(component.handleLoad.callCount).tobe(1);
  // });


  it('renders with other props', () => {
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
