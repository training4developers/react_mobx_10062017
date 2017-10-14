import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable } from 'mobx';

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

    const { so, no, bo} = this.props;

    return [
      <div key={1}>SO: {so.get()}, {typeof so.get()}</div>,
      <div key={2}>NO: {no.get()}, {typeof no.get()}</div>,
      <div key={3}>BO: {bo.get() ? 'true' : 'false'}, {typeof bo.get()}</div>,
    ];
  }
}

ReactDOM.render(
  <ObservableValuePropTypesDemo so={stringObservable} no={numberObservable} bo={booleanObservable}  />,
  document.querySelector('main')
);
