import * as React from 'react';

import { ToolHeader } from './tool-header';
import { ColorTable } from './color-table';
import { ColorForm } from './color-form';

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  
  componentDidCatch(error, info) {
    console.log(error, info);

    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return 'Something went wrong!';
    } else {
      return this.props.children;
    }
  }

}

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors.concat(),
      editRowId: -1,
    };
  }

  addColor = color => {
    color.id = Math.max(...this.state.colors.map(c => c.id)) + 1;
    this.setState({
      colors: this.state.colors.concat(color),
    });
  };

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
    return <div>
      <ErrorBoundary>
        <ToolHeader headerText="Color Tool!" />
      </ErrorBoundary>
      <ColorTable colors={this.state.colors} editRowId={this.state.editRowId}
        onEdit={this.editColor} onSave={this.saveColor} onCancel={this.cancel} />
      <ColorForm onSaveColor={this.addColor} />
    </div>;
  }

}