import React from 'react';
import ReactDOM from 'react-dom';

import { observable, computed, autorun, whyRun } from 'mobx';
import { observer } from 'mobx-react';

class CarStore {

  @observable cars = [
    { id: 1, make: 'Ford', model: 'Fusion', year: 2017, color: 'red', price: 17000 },
    { id: 2, make: 'Ford', model: 'F-150', year: 2016, color: 'blue', price: 27000 },
  ];

  @observable carForm = {
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  };

  @computed get inventoryTotal() {
    whyRun();
    return this.cars.reduce( (acc, car) => acc + car.price, 0 );
  }

  add(car) {
    car.id = Math.max( ...this.cars.map(c => c.id) ) + 1;
    this.cars.push(car);
  }

  onChange = e => {
    this.carForm[e.currentTarget.name] = e.currentTarget.value;
  }

}

const CarTool = observer(props => {

  const saveCar = () => {

    props.store.add(props.store.carForm);
    props.store.carForm = {
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    };

  };

  return <div>
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
        {props.store.cars.map(car => <tr key={car.id}>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.year}</td>
          <td>{car.color}</td>
          <td>{car.price}</td>
        </tr>)}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4" style={{textAlign:'right'}}>Total:</td>
          <td>{props.store.inventoryTotal}</td>
        </tr>
      </tfoot>
    </table>
    <form>
      <div>
        <label htmlFor="make-input">Make:</label>
        <input type="text" id="make-input" name="make"
          value={props.store.carForm.make} onChange={props.store.onChange} />
      </div>
      <div>
        <label htmlFor="model-input">Model:</label>
        <input type="text" id="model-input" name="model"
          value={props.store.carForm.model} onChange={props.store.onChange} />
      </div>
      <div>
        <label htmlFor="year-input">Year:</label>
        <input type="number" id="year-input" name="year"
          value={props.store.carForm.year} onChange={props.store.onChange} />
      </div>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={props.store.carForm.color} onChange={props.store.onChange} />
      </div>
      <div>
        <label htmlFor="price-input">Price:</label>
        <input type="number" id="price-input" name="price"
          value={props.store.carForm.price} onChange={props.store.onChange} />
      </div>
      <button type="button" onClick={saveCar}>Save Car</button>
    </form>
  </div>;

});

ReactDOM.render(<CarTool store={new CarStore()} />, document.querySelector('main'));
