import keyMirror from 'key-mirror';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
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

const store = createStore(reducer, 0);

class Calculator extends React.Component {

  add = value => this.props.add(Number(this.input.value));
  subtract = value => this.props.subtract(Number(this.input.value));
  multiply = value => this.props.multiply(Number(this.input.value));
  divide = value => this.props.divide(Number(this.input.value));

  render() {
    return <form>
      <input type="text" ref={i => this.input = i} defaultValue="0" />
      <button type="button" onClick={this.add}>+</button>
      <button type="button" onClick={this.subtract}>-</button>
      <button type="button" onClick={this.multiply}>*</button>
      <button type="button" onClick={this.divide}>/</button>
      <div>Result: {this.props.result}</div>
    </form>;
  }
}

const mapStateToProps = state => ({ result: state });

const mapDispatchToProps = dispatch => bindActionCreators({
  add: addActionCreator,
  subtract: subtractActionCreator,
  multiply: multiplyActionCreator,
  divide: divideActionCreator,
}, dispatch);

// pass in two mapping functions
// const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {

//   // component = Calculator
//   return Component => {

//     return class Container extends React.Component {

//       componentWillMount() {
//         this.componentProps = mapDispatchToPropsFn(this.props.store.dispatch);
//       }

//       componentDidMount() {
//         this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       render() {

//         this.componentProps = Object.assign(
//           this.componentProps, mapStateToPropsFn(this.props.store.getState()))

//         return <Component {...this.componentProps} />;
//       }

//     };

//   };


// };

//returning a function which will create a container component which uses the mapping functions
//to connect redux to the presentation component
//const calculatorConnector = connect(mapStateToProps, mapDispatchToProps);

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);

// ReactDOM.render(<Provider store={store}>
//   <CalculatorContainer />
// </Provider>, document.querySelector('main'));




// store.subscribe(() => {
//   ReactDOM.render(<Calculator store={store} />, document.querySelector('main'));
// });

