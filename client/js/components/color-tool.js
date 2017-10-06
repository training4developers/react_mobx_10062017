import * as React from 'react';

// named export
export class ColorTool extends React.Component {

  render() {

    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {this.props.colors.map(color => <li key={color.id}>{color.name}</li>)}
      </ul>
    </div>;
  }

}