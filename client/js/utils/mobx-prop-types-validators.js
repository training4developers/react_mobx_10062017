import { isBoxedObservable } from 'mobx';
import { PropTypes as StandardMobxPropTypes } from 'mobx-react';

export const MobxPropTypes = Object.freeze(new class {

  constructor() {
    Object.assign(this, StandardMobxPropTypes);
    this.observableNumber = this.createObservableValueSpecificType('number', true);
    this.observableString = this.createObservableValueSpecificType('string', true);
    this.observableBoolean = this.createObservableValueSpecificType('boolean', true);
  }

  observableValue(props, propName, componentName) {
    
    return !isBoxedObservable(props[propName]) &&
      new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`, expected an \`observable\`.`);
  }

  createIsRequired(typeValidatorFn) {
    
    return (props, propName, componentName) =>
      !props.hasOwnProperty(propName)
        ? new Error(`Prop \`${propName}\` is marked required in \`${componentName}\`, but its value is \`${props[propName]}\`.`)
        : typeValidatorFn(props, propName, componentName);
  }

  createObservableValueSpecificType(typeName, supportIsRequired = true) {

    const validatorFn = (props, propName, componentName) => {
      
      const err = this.observableValue(props, propName, componentName);
      if (err) { return err; }

      if (typeof props[propName].get() !== typeName) {
        return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`, expected an \`observable\` of type \`${typeName}\`.`);
      }

    };

    supportIsRequired && (validatorFn.isRequired = this.createIsRequired(validatorFn));

    return validatorFn;
  }
});
