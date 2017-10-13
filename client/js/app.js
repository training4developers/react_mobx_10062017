import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { CarStore } from './stores/car-store';
import { CarTool } from './components/car-tool';

ReactDOM.render(
  <CarTool store={new CarStore} />,
  document.querySelector('main')
);