import { isBoxedObservable } from 'mobx';
import { PropTypes as StandardMobxPropTypes } from 'mobx-react';

// intended to replace the PropTypes from 'mobx-react';
// freezing the exported object to prevent changes to it
export const MobxPropTypes = Object.freeze(new class {

  constructor() {
    // the original PropTypes from 'mobx-react' is frozen
    // copy the PropTypes to this replacement version
    Object.assign(this, StandardMobxPropTypes);

    // configure PropTypes for observable values of primitive types
    this.observableValue.isRequired = this.createIsRequired(this.observableValue);
    this.observableNumber = this.createObservableValueSpecificType('number', true);
    this.observableString = this.createObservableValueSpecificType('string', true);
    this.observableBoolean = this.createObservableValueSpecificType('boolean', true);
  }

  // default PropType for an ObservableValue
  observableValue(props, propName, componentName) {

    // MobX provides a low level function to check if a value is boxed primitive value
    return !isBoxedObservable(props[propName]) &&
      new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`, expected an \`observable\`.`);
  }

  // provides the isRequired function will be chained to the end of the other PropTypes
  // the param validatorFn is the PropType validation function to which the isRequired
  // function will be chained
  createIsRequired(validatorFn) {
    
    return (props, propName, componentName) =>
      // only checking to see if the props has the property
      // if props has the property, but's it undefined it will be caught
      // by the validatorFn
      !props.hasOwnProperty(propName)
        ? new Error(`Prop \`${propName}\` is marked required in \`${componentName}\`, but its value is \`${props[propName]}\`.`)
        : validatorFn(props, propName, componentName);
  }

  // creates PropTypes for specific kind of ObservableValue such as number or string
  createObservableValueSpecificType(typeName, supportIsRequired = true) {

    // return the validator function for the specific observable primitive type
    const validatorFn = (props, propName, componentName) => {
      
      // check if the props is a boxed obserable value
      const err = this.observableValue(props, propName, componentName);
      if (err) { return err; }

      // check the type of the unboxed value
      if (typeof props[propName].get() !== typeName) {
        return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`${componentName}\`, expected an \`observable\` of type \`${typeName}\`.`);
      }

    };

    // true if a chained isRequired function should be added
    supportIsRequired && (validatorFn.isRequired = this.createIsRequired(validatorFn));

    return validatorFn;
  }
});
