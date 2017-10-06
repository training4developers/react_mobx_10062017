import * as React from 'react';

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

  onClick = () => {

    const nextId = Math.max(...this.state.colors.map(c => c.id)) + 1;

    const color = {
      id: nextId,
      name: this.state.newColorName,
      hexCode: this.state.newColorHexCode,
    };

    this.setState({
      colors: this.state.colors.concat(color),
      newColorName: '',
      newColorHexCode: '',
    });
  };

  render() {
    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {this.state.colors.map(color => <li key={color.id}>{color.name} - {color.hexCode}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="new-color-name-input">New Color Name:</label>
          <input type="text" id="new-color-name-input" name="newColorName"
            value={this.state.newColorName} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="new-color-hexcode-input">New Color HexCode:</label>
          <input type="color" id="new-color-hexcode-input" name="newColorHexCode"
            value={this.state.newColorHexCode} onChange={this.onChange} />
        </div>
        <button type="button" onClick={this.onClick}>Add Color</button>
      </form>
    </div>;
  }

}