import * as React from 'react';

import { observer, inject } from 'mobx-react';

export const CalcTool = inject('calcStore')(observer(

  props => {

    let numInput;

    const add = () => {
      props.calcStore.add(Number(numInput.value));
      numInput.value = 0;
    };
  
    const subtract = () => {
      props.calcStore.subtract(Number(numInput.value));
      numInput.value = 0;
    };

    const { doBoth, result, doubleResult } = props.calcStore;
    
    return <form>
      <div>
        <label htmlFor="num-input">Input Number:</label>
        <input type="number" id="num-input" defaultValue={0} ref={ input => numInput = input } />
        <button type="button" onClick={add}>Add</button>
        <button type="button" onClick={subtract}>Subtract</button>
        <button type="button" onClick={doBoth}>Do Both</button>
      </div>
      <div>
        <span>Result: {result}</span>
        <span>Double Result: {doubleResult}</span>
      </div>
    </form>;
  } 

));