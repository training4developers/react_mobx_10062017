import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { observable, computed, action, useStrict } from 'mobx';
import { observer } from 'mobx-react';

useStrict(true);

const appStore = new class AppStore {
  @action.bound add(value) { this.result += value; }
  @action.bound subtract(value) { this.result -= value; }
  @observable result = 0;
  @computed get doubleResult() { return this.result * 2; }
};

@observer
class CalcApp extends React.Component {

  componentDidMount() {
    this.numInput.focus();
  }

  add = () => {
    this.props.store.add(Number(this.numInput.value));
    this.numInput.value = 0;
  };

  subtract = () => {
    this.props.store.subtract(Number(this.numInput.value));
    this.numInput.value = 0;
  };

  render() {
    return <form>
      <div>
        <label htmlFor="num-input">Input Number:</label>
        <input type="number" id="num-input" defaultValue={0} ref={ input => this.numInput = input } />
        <button type="button" onClick={this.add}>Add</button>
        <button type="button" onClick={this.subtract}>Subtract</button>
      </div>
      <div>
        <span>Result: {this.props.store.result}</span>
        <span>Double Result: {this.props.store.doubleResult}</span>
      </div>
    </form>;
  }

}

ReactDOM.render(
  <CalcApp store={appStore} />,
  document.querySelector('main')
);

