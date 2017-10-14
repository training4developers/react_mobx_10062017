import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';

import { HelloWorld } from './hello-world';

xdescribe('<HelloWorld /> React Test Renderer Static HTML', () => {

  it('<HelloWorld /> renders', () => {

    const tree = renderer.create(<HelloWorld />).toJSON();
    expect(tree).toMatchSnapshot();

  });

});

xdescribe('<HelloWorld /> Enzyme Static HTML', () => {

  it('<HelloWorld /> renders', () => {
    const component = JSON.stringify(render(<HelloWorld />).html());
    expect(component).toMatchSnapshot();
  });

});
