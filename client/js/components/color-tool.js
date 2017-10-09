import * as React from 'react';

import { ToolHeader } from './tool-header';
import { ColorForm } from './color-form';

// named export
export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: props.colors.concat(),
      newColorName: '',
      newColorHexCode: '',
    };

    // onChange on the instance = onChange on the prototype
    // producing a new function bound to the instance
    //this.onChange = this.onChange.bind(this);
  }

  // class arrow
  onChange = (e) => {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  }

  addNewColor = color => {

    const nextId = Math.max(...this.state.colors.map(c => c.id)) + 1;

    color.id = nextId;

    this.setState({
      colors: this.state.colors.concat(color),
    });
  };

  render() {
    return <div>
      <ToolHeader headerText="Color Tool!" />
      <ul>
        {this.state.colors.map(color => <li key={color.id}>{color.name} - {color.hexCode}</li>)}
      </ul>
      <ColorForm onSaveColor={this.addNewColor} />
    </div>;
  }

}