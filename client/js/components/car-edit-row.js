import * as React from 'react';
import * as PropTypes from 'prop-types';

export class CarEditRow extends React.Component {

  static propTypes = {
    car: PropTypes.shape({
      id: PropTypes.number,
      make: PropTypes.string,
      model: PropTypes.string,
      year: PropTypes.number,
      color: PropTypes.string,
      price: PropTypes.number,
    }),
    onSaveCar: PropTypes.func,
    onCancelCar: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = Object.assign({}, props.car);
  }

  onChange = e => {
    this.setState({
      [ e.currentTarget.name ]: e.currentTarget.type === 'number'
        ? Number(e.currentTarget.value)
        : e.currentTarget.value, 
    });
  };  

  saveCar = () => {
    this.props.onSaveCar(Object.assign({}, this.state));

    this.setState({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }
  
  render() {
    return <tr>
      <td>
        <input type="text" id="edit-make-input" name="make" 
          value={this.state.make} onChange={this.onChange} />
      </td>
      <td>
        <input type="text" id="edit-model-input" name="model" 
          value={this.state.model} onChange={this.onChange} />
      </td>
      <td>
        <input type="number" id="edit-year-input" name="year" 
          value={this.state.year} onChange={this.onChange} />
      </td>
      <td>
        <input type="text" id="edit-color-input" name="color" 
          value={this.state.color} onChange={this.onChange} />
      </td>
      <td>
        <input type="number" id="edit-price-input" name="price" 
          value={this.state.price} onChange={this.onChange} />
      </td>
      <td>
        <button type="button" onClick={this.saveCar}>Save</button>
        <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
      </td>
    </tr>;
  }
}
