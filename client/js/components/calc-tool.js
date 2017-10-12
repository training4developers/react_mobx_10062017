import * as React from 'react';

import { observer } from 'mobx-react';

@observer
export class CalcTool extends React.Component {

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

    const { doBoth, result, doubleResult } = this.props.store;

    return <form>
      <div>
        <label htmlFor="num-input">Input Number:</label>
        <input type="number" id="num-input" defaultValue={0} ref={ input => this.numInput = input } />
        <button type="button" onClick={this.add}>Add</button>
        <button type="button" onClick={this.subtract}>Subtract</button>
        <button type="button" onClick={doBoth}>Do Both</button>
      </div>
      <div>
        <span>Result: {result}</span>
        <span>Double Result: {doubleResult}</span>
      </div>
    </form>;
  }

}