import '../scss/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class Second extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor: second');
  }

  componentWillMount() {
    console.log('component will mount: second');
  }

  componentDidMount() {
    console.log('component did mount: second');
  }

  render() {
    console.log('render: second');
    return <div>
      Second
    </div>;
  }  

}

class First extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor: first');
  }

  componentWillMount() {
    console.log('component will mount: first');
  }

  componentDidMount() {
    console.log('component did mount: first');
  }

  componentWillReceiveProps(nextProps) {

    console.log('component will receive props: first', nextProps);

  }

  shouldComponentUpdate(nextProps) {
    //return this.props.nums !== nextProps.nums;
    //return this.props.msg !== nextProps.msg;
    return true;
  }

  componentWillUpdate() {

  }

  render() {
    console.log('render: first');
    return <div>
      First: {this.props.msg}
      <ul>{this.props.nums.map(n => <li key={n}>{n}</li>)}</ul>
      <Second />
    </div>;
  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {
    console.log('component will unmount: first');
  }

}

let nums = [1,2,3];

console.log('first reactdom render');
ReactDOM.render(<First msg="Hello World!" nums={nums} />, document.querySelector('main'));

nums = nums.concat(4);

console.log('second reactdom render');
ReactDOM.render(<First msg="Hello World!" nums={nums} />, document.querySelector('main'));



// // debugger;
// console.log('second reactdom render');
// ReactDOM.render(<First msg="Goodbye World!" nums={nums} />, document.querySelector('main'));

// console.log('third reactdom render');
// ReactDOM.render(<First msg="Goodbye World!" nums={nums} />, document.querySelector('main'));