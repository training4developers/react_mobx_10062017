import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { observable, computed, action, useStrict, autorun } from 'mobx';

useStrict(true);

const appStore = new class AppStore {

  // --- STEP 1: RUN AN ACTION

  // action executes
  // only change state in the action function

  @action.bound
  add(value) {
    console.log('updated result');
    this.result += value;
    // console.log('updated double result');
    // this.doubleResult = this.result * 2;
  }

  // action executes
  // only change state in the action function
  @action.bound
  subtract(value) {
    this.result -= value;
    // this.doubleResult = this.result * 2;
  }

  // --- STEP 2: STATE IS UPDATED

  // observable state is updated
  @observable result = 0;

  // --- STEP 3: DERIVATIONS

  // derivation
  // computed - pure functions (no side-effects allowed)
  @computed get doubleResult() {
    console.log('computed double result');
    return this.result * 2;
  }

};

// derivation
// reaction - purpose is to run side-effects
// bridge from reactive code to imperative code
autorun(() => {

  // side-effect
  console.log(appStore.result, appStore.doubleResult);
  console.log(appStore.result, appStore.doubleResult);
  //console.log(appStore.result);
});

appStore.add(10);
//appStore.subtract(2);



