import React from 'react';
import ReactDOM from 'react-dom';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

class ObservableCalculatorStore {
  
  @observable result = 0;

  add(value) {
    this.result = this.result + value;
  }

  subtract(value) {
    this.result = this.result - value;
  }

  multiply(value) {
    this.result = this.result * value;
  }

  divide(value) {
    this.result = this.result / value;
  }
}

//@observer
const Calculator = observer(props => {

  let input;

  const add = () => props.store.add(Number(input.value));
  const subtract = () => props.store.subtract(Number(input.value));
  const multiply = () => props.store.multiply(Number(input.value));
  const divide = () => props.store.divide(Number(input.value));

  return <form>
    <input type="text" ref={i => input = i} defaultValue="0" />
    <button type="button" onClick={add}>+</button>
    <button type="button" onClick={subtract}>-</button>
    <button type="button" onClick={multiply}>*</button>
    <button type="button" onClick={divide}>/</button>
    <div>Result: {props.store.result}</div>
  </form>;
});

ReactDOM.render(
  <Calculator store={new ObservableCalculatorStore()} />,
  document.querySelector('main'),
);
