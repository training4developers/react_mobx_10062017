import { observable, computed, action } from 'mobx';

export class CalcStore {

  @action('Add a value to the result')
  add(value) {
    this.result += value;
  }
  
  @action('Subtract a value from the result')
  subtract(value) {
    this.result -= value;
  }

  @action.bound
  doBoth() {
    this.add(4);
    this.subtract(8);
  } 

  @observable result = 0;

  @computed get doubleResult() {
    return this.result * 2;
  }
}