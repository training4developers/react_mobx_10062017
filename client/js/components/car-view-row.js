import * as React from 'react';
import * as PropTypes from 'prop-types';

export const CarViewRow = props => <tr>
  <td>{props.car.make}</td>
  <td>{props.car.model}</td>
  <td>{props.car.year}</td>
  <td>{props.car.color}</td>
  <td>{props.car.price}</td>
  <td>
    <button type="button" onClick={() => props.onEditCar(props.car.id)}>Edit</button>
    <button type="button" onClick={() => props.onDeleteCar(props.car.id)}>Delete</button>
  </td>
</tr>;

CarViewRow.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.make,
    model: PropTypes.model,
    year: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.number,
  }),
  onEditCar: PropTypes.func,
  onDeleteCar: PropTypes.func,
};
