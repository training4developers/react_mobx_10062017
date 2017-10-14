import React from 'react';
import { shallow } from 'enzyme';
import { observable } from 'mobx';

import { MobxPropTypes } from './mobx-prop-types-validators';

// sets up a test suite
describe('Obserable Value PropTypes', () => {

  // variable for the component which will be used for each test
  let TestComponent;

  // will run before each test in the test suite
  beforeEach(() => {
    // reinitialize the component so the proptypes form the previous test
    // do not hang around
    // each test should run with its own environment
    TestComponent = () => null;
  });

  // nested test suites allow for beforeEach and afterEach functions
  // which only apply to some of the tests
  describe('Observable Value Only', () => {

    // will be used to spy on the console error function to look
    // for proptypes failures when testing the proptypes validation
    let consoleErrorSpy;

    beforeEach(() => {

      // setup spy on error function of console object
      consoleErrorSpy = jest.spyOn(console, 'error');

      // setup proptypes for this suite's tests
      TestComponent.propTypes = {
        test: MobxPropTypes.observableValue,
      };
    });

    // will run after each and every test in the suite
    afterEach(() => {
      // the spy on console.error must be cleaned up
      consoleErrorSpy.mockRestore();
    });

    // the test function defines a test
    test('Observable Value prop type fails', () => {
      
      const test = 'test';
      
      // using shallow rendering because it is faster the DOM rendering and
      // DOM testing is not needed
      shallow(<TestComponent test={test} />);

      // Jest uses the expect flavor assertions
      // checking to make sure the spied upon function was called
      // with the proper arguments
      expect(consoleErrorSpy).toHaveBeenCalledWith('Warning: Failed prop type: Invalid prop `test` of type `string` supplied to `TestComponent`, expected an `observable`.\n    in TestComponent');
    });
  
    test('Observable Value prop type succeeds', () => {
      
      const test = observable('test');
  
      shallow(<TestComponent test={test} />);
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

  });

});