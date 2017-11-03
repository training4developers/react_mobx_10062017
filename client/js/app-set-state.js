import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Fourth extends React.Component {
  
  constructor(props) {
    super(props);
    console.log('constructor: fourth');
  }

  componentWillMount() {
    console.log('component will mount: fourth');
  }

  componentDidMount() {
    console.log('component did mount: fourth');
  }

  componentWillUnmount() {
    console.log('component will unmount: fourth');
  }
  
  
  render() {
    console.log('render: fourth');
    return <div>
      <div>Fourth</div>
    </div>;
  }
}

class Third extends React.PureComponent {

  constructor(props) {
    super(props);
    console.log('constructor: third');
  }

  componentWillMount() {
    console.log('component will mount: third');
  }

  componentDidMount() {
    console.log('component did mount: third');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('component should update: third');
  //   return false;
  // }
  
  render() {
    console.log('render: third');
    return <div>
      <div>Third. nums: {JSON.stringify(this.props.nums)}</div>
    </div>;
  }
}

class Second extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor: second');

    this.state = {
      message: '',
    };
  }

  componentWillMount() {
    console.log('component will mount: second');
  }

  componentDidMount() {
    console.log('component did mount: second');
  }

  componentWillReceiveProps(nextProps) {
    console.log('component will receive props: second');
    console.log(nextProps);

    console.log('calling set state second');
    
    this.setState({
      message: 'new counter prop: ' + nextProps.counter,
    }, () => {
      console.log('set start second completed');
    });

  }

  shouldComponentUpdate() {
    console.log('component should update: second');
    return true;
  }

  componentWillUpdate() {
    console.log('component will update: second');
  }

  render() {
    console.log('render: second');
    return <div>
      <div>Second, counter: {this.props.counter}</div>
      <Third nums={this.props.nums} />
    </div>;
  }

  componentDidUpdate() {
    console.log('component did update: second');
  }
}

class First extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor: first');

    this.state = {
      counter: 1,
      nums: [ 1 ],
    };
  }

  componentWillMount() {
    console.log('component will mount: first');
  }

  componentDidMount() {
    console.log('component did mount: first');
  }

  render() {
    console.log('render: first');
    return <div>
      <div>First</div>
      <button type="button"
        onClick={() => {

          console.log('calling set state first a');
          
          const originalState = this.state;

          this.setState({
            nums: (this.state.nums.push(this.state.counter), this.state.nums),
            counter: this.state.counter + 1
          }, () => {
            console.log('set start first a completed');
            console.log(originalState === this.state);
          });

          console.log('calling set state first b');

          this.setState((lastState) => {
            console.log('running set state first b');
            return {
              nums: (lastState.nums.push(this.state.counter), lastState.nums),
              counter: lastState.counter + 1
            };
          }, () => {
            console.log('set start first b completed');
          });



        }}>Increment</button>
      <Second {...this.state} />
      {(this.state.counter < 3) ? <Fourth /> : null}
    </div>;
  }
}

ReactDOM.render(
  <First />,
  document.querySelector('main')
);

