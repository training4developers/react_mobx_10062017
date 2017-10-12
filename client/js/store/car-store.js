import { observable, action } from 'mobx';

export class CarStore {

  @observable
  cars = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2017, color: 'blue', price: 23000 },
    { id: 2, make: 'Ford', model: 'Focus', year: 2015, color: 'yellow', price: 12000 },
  ];

  @observable
  editCarId = 0;

  @action
  addCar = newCar => {
    newCar.id = Math.max(...this.cars.map(car => car.id)) + 1;
    this.cars.push(newCar);
    this.editCarId = 0;
  };

  @action
  deleteCar = deleteCarId => {
    this.cars.splice(this.cars.findIndex(car => car.id === deleteCarId), 1);
    this.editCarId = 0;
  };

  @action
  cancelCar = () => {
    this.editCarId = 0;
  };

  @action
  saveCar = carToSave => {
    const editCarIndex = this.cars.findIndex(car => car.id === carToSave.id);
    this.cars.splice(editCarIndex, 1, carToSave);
    this.editCarId = 0;
  };

  @action
  editCar = editCarId => {
    this.editCarId = editCarId;
  };
}