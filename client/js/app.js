import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import DevTools from 'mobx-react-devtools';
 
import { CalcStore } from './stores/calc-store';
import { CalcTool } from './components/calc-tool';

useStrict(true);

ReactDOM.render(
  <div>
    <Provider calcStore={new CalcStore()}>
      <CalcTool />
    </Provider>
  </div>,
  document.querySelector('main')
);

