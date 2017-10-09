import * as React from 'react';

import { ToolHeader } from './tool-header';
import { UnorderedList } from './unordered-list';
import { ColorForm } from './color-form';


export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: props.colors.map(c => ({ id: c.id, value: c.name + ' ' + c.hexCode })),
    };
  }

  addNewColor = color => {

    const nextId = Math.max(...this.state.colors.map(c => c.id)) + 1;

    color.id = nextId;

    this.setState({
      colors: this.state.colors.concat(color),
    });
  };

  deleteColor = colorId => {

    const colorToDeleteIndex = this.state.colors.findIndex(color => color.id === colorId);

    //this.state.colors.splice(colorToDeleteIndex, 1);

    this.setState({
      colors: this.state.colors.slice(0, colorToDeleteIndex).concat(this.state.colors.slice(colorToDeleteIndex + 1)),
//      colors: [ ...this.state.colors.slice(0, colorToDeleteIndex), ...this.state.colors.slice(colorToDeleteIndex + 1) ],
        //colors: this.state.colors,
    });

  }

  onChange = (e) => {
    this.setState({
      someValue: e.target.value,
    });
  }

  render() {
    return <div>
      <div>
        <input type="text" value={this.someValue} onChange={this.onChange} />
      </div>
      <ToolHeader headerText="Color Tool!" />
      <UnorderedList onDelete={this.deleteColor}
        items={this.state.colors} />
      <ColorForm onSaveColor={this.addNewColor} />
    </div>;
  }

}