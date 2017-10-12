import { observable, computed, action, transaction } from 'mobx';

export class CalcStore {

  @action.bound
  add(value) {
    console.log('running add');
    this.result += value;
  }
  
  @action.bound
  subtract(value) {
    console.log('running subtract');
    this.result -= value;
  }

  @action.bound
  doBoth() {
    console.log('called do both');
    console.log(this);
    this.add(4);
    this.subtract(8);
  } 

  @observable result = 0;
  @computed get doubleResult() {
    console.log('computing double result');
    return this.result * 2;
  }
}