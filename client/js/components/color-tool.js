import * as React from 'react';

import { ToolHeader } from './tool-header';
import { UnorderedList } from './unordered-list';
import { ColorForm } from './color-form';

// Instructions:

// 1. Create an edit car row.

// 2. Add to the view car row an Edit button. When the edit button is clicked, the view car changes to
// the edit car row for that particular row. Only one row may be edited at a time.

// 3. The edit car row will display an input field for each column, pre-populated with the current value.

// 4. In the actions column of the edit car row, there will be two buttons. One to save and one to cancel.

// 5. If you click save, the car is saved to the array and the row changes to view mode.

// 6. If you click cancel, the car is not saved, and the row changes to view mode.


export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: props.colors.map(c => ({ id: c.id, value: c.name + ' ' + c.hexCode })),
    };
  }

  addNewColor = color => {

    const nextId = Math.max(...this.state.colors.map(c => c.id)) + 1;

    const newColor = { id: nextId, value: color.name + ' ' + color.hexCode };

    this.setState({
      colors: this.state.colors.concat(newColor),
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