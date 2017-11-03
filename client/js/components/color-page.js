import * as React from 'react';

import { ColorTable } from './color-table';

export class ColorPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: [
        { id: 1, name: 'red', hexCode: '#ff0000' },
        { id: 2, name: 'white', hexCode: '#ffffff' },
        { id: 3, name: 'blue', hexCode: '#0000ff' },
      ],
      editRowId: -1,
    };
  }

  deleteColor = colorId => {
    const colorToDeleteIndex = this.state.colors.findIndex(color => color.id === colorId);
    this.setState({
      colors: this.state.colors.slice(0, colorToDeleteIndex).concat(this.state.colors.slice(colorToDeleteIndex + 1)),
      editRowId: -1,
    });
  };

  saveColor = color => {
    const colorToReplaceIndex = this.state.colors.findIndex(c => c.id === color.id);
    console.log(colorToReplaceIndex);
    this.setState({
      colors: [
        ...this.state.colors.slice(0, colorToReplaceIndex),
        color,
        ...this.state.colors.slice(colorToReplaceIndex + 1),
      ],
      editRowId: -1,
    });
  };

  cancelColor = () => {
    this.setState({
      editRowId: -1,
    });
  };

  editColor = colorId => {
    this.setState({
      editRowId: colorId,
    });    
  };

  render() {
    return <ColorTable colors={this.state.colors} editRowId={this.state.editRowId}
      onEdit={this.editColor} onSave={this.saveColor} onCancel={this.cancel} />;
  }

}