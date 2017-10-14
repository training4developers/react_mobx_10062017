import * as React from 'react';
import * as ReactDOM from 'react-dom';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    console.log('list item constructor');
    this.state = {
      name: props.item.name,
    };
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      name: nextProps.item.name,
    });

  }

  render() {
    console.log('list item render');
    return <li>props: {this.props.item.name}, state: {this.state.name}</li>;
  }
}

class UnorderedList extends React.Component {
  render() {
    return <ul>
      {this.props.items.map( (item) => <ListItem item={item} />)}
    </ul>;
  }
}

const colors = [
  {id: 1, name: 'red'},
  {id: 2, name: 'green'},
  {id: 3, name: 'blue'},
];

ReactDOM.render(
  <UnorderedList items={colors} />,
  document.querySelector('main')
);

setTimeout(function() {
  colors.splice(1,1);
  ReactDOM.render(
    <UnorderedList items={colors} />,
    document.querySelector('main')
  );
}, 4000);