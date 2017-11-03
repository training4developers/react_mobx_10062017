import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable } from 'mobx';
import * as PropTypes from 'prop-types';

import { MobxPropTypes } from './utils/mobx-prop-types-validators';

const stringObservable = observable('test');
const numberObservable = observable(42);
const booleanObservable = observable(false);

class ObservableValuePropTypesDemo extends React.Component {

  static propTypes= { 
    so: MobxPropTypes.observableString.isRequired,
    no: MobxPropTypes.observableNumber.isRequired,
    bo: MobxPropTypes.observableBoolean.isRequired,
  }

  render() {

    // do not use
    // var a = 2;

    // variable is immutable
    // const b = 2; 
    // b = 3; // throws an error

    // variable is mutable
    // let c = 2;
    // c = 3; // allowed

    // const nums = [ 1, 2, 3, 4 ];
    
    // [ 1, 2, 3, 4, 5 ]
    // nums.push(5);
  
    // [ 1, 2, 3, 4 ]
    // nums.pop();
    
    // [ 1, 2, 9, 4 ]
    // nums.splice(2, 1, 9);

    // const oldNums = [ 1, 2, 3, 4 ];
    
    // oldNums: [ 1, 2, 3, 4 ]
    // newNums: [ 1, 2, 3, 4, 5 ] 
    // let newNums = oldNums.concat(5);

    // oldNums: [ 1, 2, 3, 4 ]
    // newNums: [ 2, 3 ] 
    // newNums = oldNums.slice(1,3);

    // const oldNums = [ 1, 2, 3, 4 ];
    
    // oldNums: [ 1, 2, 3, 4 ]
    // removeItem: 1
    // newNums [ 2, 3, 4 ]
    // const [ removeItem, newNums ] = oldNums;

    // oldNums: [ 1, 2, 3, 4 ]
    // newNums [ 1, 2, 3, 4, 5 ]
    // const newNums = [ ...oldNums, 5 ];
    
    // const oldPerson = {
    //   firstName: 'Bob',
    //   lastName: 'Smith',
    // };

    // oldPerson => { firstName: 'Bob', lastName: 'Smith' }
    // newPerson => { firstName: 'Jane', lastName: 'Smith' }
    // let newPerson = Object.assign({}, oldPerson, { firstName: 'Jane' });

    // oldPerson => { firstName: 'Bob', lastName: 'Smith' }
    // newPerson => { firstName: 'Jane', lastName: 'Smith' }
    // newPerson = { ...oldPerson, firstName: 'Jane' };
    

    const { so, no, bo } = this.props;

    return [
      <div key={1}>SO: {so.get()}, {typeof so.get()}</div>,
      <div key={2}>NO: {no.get()}, {typeof no.get()}</div>,
      <div key={3}>BO: {bo.get() ? 'true' : 'false'}, {typeof bo.get()}</div>,
    ];

    // const message = 'Hello World';

    // <ShowMessage message={message}/>


  }
}

class ShowMessage extends React.Component {


  shouldComponentUpdate(nextProps, nextState) {

    const propsPropertyNames = new Set(Object.keys(this.props), Object.keys(nextProps))

    for (let propName of propsPropertyNames) {

      if (this.props[propName] !== nextProps[propName]) {
        return true;
      }
      
    }

    const statePropertyNames = new Set(Object.keys(this.state), Object.keys(nextState))

    for (let propName of Object.keys(statePropertyNames)) {
      
      if (this.state[propName] !== nextState[propName]) {
        return true;
      }
      
    }

    return false;

  }

  static propTypes = {
    message: (props, propName, componentName) => {
      if (props[propName] == null) {
        return Error(`${propName} is required`);
      }
      if (typeof props[propName] !== 'string') {
        return Error(`${propName} should be a string`);
      }
    },
  };

  render() {
    return <span>{this.props.message}</span>;
  }
}

class SimpleForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.onChange.bind = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    return <input type="text" value={this.state.message} onChange={this.onChange}>;
  }
}


ReactDOM.render(
  <ObservableValuePropTypesDemo so={stringObservable} no={numberObservable} bo={booleanObservable}  />,
  document.querySelector('main')
);
