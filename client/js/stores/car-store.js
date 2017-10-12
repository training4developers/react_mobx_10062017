import { observable, computed, action } from 'mobx';

export class CarStore {

  @observable
  cars = [
    { id: 2, make: ' Second Ford', model: 'Focus', year: 2015, color: 'yellow', price: 12000 },
    { id: 1, make: 'First Ford', model: 'Fusion Hybrid', year: 2017, color: 'blue', price: 23000 },
  ];

  @observable
  sortFieldName = 'id';

  @observable filterFieldName = '';
  @observable filterFieldValue = '';

  @observable
  editCarId = 0;

  @computed
  get filteredCars() {
    if (this.filterFieldName === '') {
      return this.cars;
    }
    return this.cars.filter( car => String(car[this.filterFieldName]).includes(String(this.filterFieldValue)) );
  }

  @computed
  get sortedCars() {
    return this.filteredCars.sort( (a, b) => a[this.sortFieldName] > b[this.sortFieldName] );
  }

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

  @action
  sortCars = sortFieldName => this.sortFieldName = sortFieldName;

  @action
  filterCars = (filterFieldName, filterFieldValue) => {
    this.filterFieldName = filterFieldName;
    this.filterFieldValue = filterFieldValue;
  };
}