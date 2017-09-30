import React from 'react';

import { CarRow } from './car-row';
import { CarEditRow } from './car-edit-row';

export class CarTable extends React.Component {

  render() {
    return <table>
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {this.props.cars.map(car => do {
          if (car.id === this.props.editCarId)
            <CarEditRow key={car.id} car={car} onSaveCar={this.props.onSaveCar} onCancelCar={this.props.onCancelCar} />
          else
            <CarRow key={car.id} car={car} onEditCar={this.props.onEditCar} onDeleteCar={this.props.onDeleteCar} />
        })}
      </tbody>
    </table>;
  }

}