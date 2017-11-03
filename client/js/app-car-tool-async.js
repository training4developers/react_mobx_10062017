import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import { CarStore } from './stores/car-store';
import { CarTool } from './components/car-tool';

useStrict(true);

ReactDOM.render(
  <Provider store={new CarStore()}>
    <CarTool />
  </Provider>,
  document.querySelector('main')
);

