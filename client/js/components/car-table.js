import * as React from 'react';
import * as PropTypes from 'prop-types';

import { CarViewRow } from './car-view-row';
import { CarEditRow } from './car-edit-row';

export const CarTable = props =>
  <table>
    <thead>
      <tr>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {props.cars.map(car =>
        car.id === props.editCarId
          ? <CarEditRow car={car} onSaveCar={props.onSaveCar} onCancelCar={props.onCancelCar} />
          : <CarViewRow car={car} onEditCar={props.onEditCar} onDeleteCar={props.onDeleteCar} />
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