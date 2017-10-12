import * as React from 'react';
import * as PropTypes from 'prop-types';

import { CarViewRow } from './car-view-row';
import { CarEditRow } from './car-edit-row';

export class CarFilter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filterFieldName: '',
      filterFieldValue: '',
    };
  }

  onChange = e => {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  };

  onKeyUp = () => {
    this.props.onFilter(this.state.filterFieldName, this.state.filterFieldValue);
  };

  render() {

    return <form>
      <label htmlFor="filter-field-name-select">Filter Field:</label>
      <select id="filter-field-name-select" name="filterFieldName" value={this.state.filterFieldName} onChange={this.onChange}>
        <option value="">Select One...</option>
        <option value="make">Make</option>
        <option value="model">Model</option>
        <option value="year">Year</option>
        <option value="color">Color</option>
        <option value="price">Price</option>
      </select>
      <label htmlFor="filter-field-value-input">Filter Value:</label>
      <input type="text" id="filter-field-value-input" name="filterFieldValue" value={this.state.filterFieldValue}
        onChange={this.onChange} onKeyUp={this.onKeyUp} />
    </form>;
  }

}

export const CarTable = props =>
  <table>
    <thead>
      <tr>
        <th colSpan="6">
          <CarFilter onFilter={props.onFilterCars} />
        </th>
      </tr>
      <tr>
        <th onClick={() => props.onSortCars('make')}>Make</th>
        <th onClick={() => props.onSortCars('model')}>Model</th>
        <th onClick={() => props.onSortCars('year')}>Year</th>
        <th onClick={() => props.onSortCars('color')}>Color</th>
        <th onClick={() => props.onSortCars('price')}>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.cars.map(car =>
        car.id === props.editCarId
          ? <CarEditRow key={car.id} car={car} onSaveCar={props.onSaveCar} onCancelCar={props.onCancelCar} />
          : <CarViewRow key={car.id} car={car} onEditCar={props.onEditCar} onDeleteCar={props.onDeleteCar} />
      )}
    </tbody>
  </table>;

CarTable.propTypes = {
  cars: PropTypes.array,
  onSaveCar: PropTypes.func,
  onCancelCar: PropTypes.func,
  onEditCar: PropTypes.func,
  onDeleteCar: PropTypes.func,
  editCarId: PropTypes.number,
};
