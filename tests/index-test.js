import expect from 'expect';
import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';


import {  Pannellum } from 'src/';


describe('Pannellum', () => {
  it('renders a Pannellum component', () => {
    expect(render(
      <Pannellum 
        height="500px"
        width="100%"
      />
    ))
      .toContain('<div id="panorama" style="width:100%;height:500px"></div>');
  });
});
