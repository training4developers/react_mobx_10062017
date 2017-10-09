import * as React from 'react';

export class UnorderedList extends React.PureComponent {

  render() {

    console.log('rendering unordered list');

return <ul>
      {this.props.items.map(item =>
        <UnorderedListItem key={item.id} item={item} onDelete={this.props.onDelete} />
      )}
    </ul>;
  }
}

export class UnorderedListItem extends React.Component {

  delete = () => {
    this.props.onDelete(this.props.item.id);
  }

  render() {
    console.log('rendering unordered list item');
    return <li>{this.props.item.value} <button type="button" onClick={this.delete}>Delete</button></li>;
  }

}