import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as PropTypes from 'prop-types';
import { observable, isBoxedObservable } from 'mobx';
import { PropTypes as MobxPropTypes } from 'mobx-react';

const Demo = props => {
  return <div>{props.someText}</div>;
};

Demo.propTypes = {
  someText: PropTypes.string.isRequired,
};

Demo.defaultProps = {
  someText: 'It\'s a wonderful day!',
};

// class Demo extends React.Component {

//   static propTypes = {
//     // someText: PropTypes.string.isRequired,
//     // someNum: PropTypes.number,
//     // someBool: PropTypes.bool,
//     // cars: PropTypes.array,
//     // cars: PropTypes.arrayOf(PropTypes.shape({
//     //   id: PropTypes.number,
//     //   make: PropTypes.string
//     // })),
//     // addCar: PropTypes.func,
//   };

//   static defaultProps = {
//     someText: 'It\'s a wonderful day!',
//   };

//   render() {
//     return <div>{this.props.someText}</div>;
//   }
// }

// Demo.propTypes = {
//   someText: PropTypes.string.isRequired,
// };

// Demo.defaultProps = {
//   someText: 'It\'s a wonderful day!',
// };

class Demo extends React.Component {

  static propTypes = {
    items: MobxPropTypes.observableArray,
    age: MobxPropTypes.observableValue,
    person: PropTypes.observableArray,
  };

  static defaultProps = {
    someText: 'It\'s a wonderful day!',
  };

  render() {
    return <div>{this.props.someText}</div>;
  }
}


const items = observable([]);

// console.log(items);




const age = observable(40);

console.log('is observable', isBoxedObservable(age));

console.log(age.get());
age.set(41);
console.log(age.get());

const person = observable({
  age: 40
});

console.log(age);
console.log(person.age);

ReactDOM.render(
  <Demo items={items} age={age} person={person} />,
  document.querySelector('main')
);
