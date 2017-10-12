import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { autorun, when } from 'mobx';
import { useStrict } from 'mobx';

import { CalcStore } from './stores/calc-store';
import { CalcTool } from './components/calc-tool';

useStrict(true);

const calcStore = new CalcStore();

when(
  // predicate
  () => { return calcStore.result > 4; },
  // reaction - will run when the predicate is true
  () => {
    console.log('calcstore result is greater than 4');
  },
);

// always run the reaction, use autorun
autorun(() => {
  console.log('result', calcStore.result);
  console.log('double result', calcStore.doubleResult);
});

ReactDOM.render(
  <CalcTool store={calcStore} />,
  document.querySelector('main')
);

