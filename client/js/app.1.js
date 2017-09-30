import keyMirror from 'key-mirror';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const actionTypes = keyMirror({
  ADD: null,
  SUBTRACT: null,
  MULTIPLY: null,
  DIVIDE: null,
});

const addActionCreator = value => ({ type: actionTypes.ADD, value });
const subtractActionCreator = value => ({ type: actionTypes.SUBTRACT, value });
const multiplyActionCreator = value => ({ type: actionTypes.MULTIPLY, value });
const divideActionCreator = value => ({ type: actionTypes.DIVIDE, value });

const reducer = ( state = 0, action ) => {
  switch (action.type) {
    case actionTypes.ADD:
      return state + action.value;
    case actionTypes.SUBTRACT:
      return state - action.value;
    case actionTypes.MULTIPLY:
      return state * action.value;
    case actionTypes.DIVIDE:
      return state / action.value;
    default:
      return state;
  }
};

// const createStore = (reducer, initialState) => {

//   let state = initialState;

//   const subscribers = [];

//   return {
//     dispatch: (action) => {
//       state = reducer(state, action);
//       subscribers.forEach(subscription => subscription());
//     },
//     subscribe: (subscription) => {
//       subscribers.push(subscription);
//     },
//     getState: () => state,
//   };

// };

const store = createStore(reducer, 0);


class Calculator extends React.Component {

  add = value => this.props.store.dispatch(addActionCreator(Number(this.input.value)));
  subtract = value => this.props.store.dispatch(subtractActionCreator(Number(this.input.value)));
  multiply = value => this.props.store.dispatch(multiplyActionCreator(Number(this.input.value)));
  divide = value => this.props.store.dispatch(divideActionCreator(Number(this.input.value)));

  render() {
    return <form>
      <input type="text" ref={i => this.input = i} defaultValue="0" />
      <button type="button" onClick={this.add}>+</button>
      <button type="button" onClick={this.subtract}>-</button>
      <button type="button" onClick={this.multiply}>*</button>
      <button type="button" onClick={this.divide}>/</button>
      <div>Result: {this.props.store.getState()}</div>
    </form>;
  }
}

store.subscribe(() => {
  ReactDOM.render(<Calculator store={store} />, document.querySelector('main'));
});

ReactDOM.render(<Calculator store={store} />, document.querySelector('main'));
