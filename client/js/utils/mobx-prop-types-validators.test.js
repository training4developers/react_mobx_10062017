import React from 'react';
import { shallow } from 'enzyme';
import { observable } from 'mobx';

import { MobxPropTypes } from './mobx-prop-types-validators';

describe('Obserable Value PropTypes', () => {

  let TestComponent;

  beforeEach(() => {
    TestComponent = () => null;
  });

  describe('Observable Value Only', () => {

    let consoleErrorSpy;

    beforeEach(() => {

      consoleErrorSpy = jest.spyOn(console, 'error');

      TestComponent.propTypes = {
        test: MobxPropTypes.observableValue,
      };
    });

    afterEach(() => {
      consoleErrorSpy.mockRestore();
    });

    test('Observable Value prop type fails', () => {
      
      const test = 'test';
  
      shallow(<TestComponent test={test} />);
      expect(consoleErrorSpy).toHaveBeenCalledWith('Warning: Failed prop type: Invalid prop `test` of type `string` supplied to `TestComponent`, expected an `observable`.\n    in TestComponent');
    });
  
    test('Observable Value prop type succeeds', () => {
      
      const test = observable('test');
  
      shallow(<TestComponent test={test} />);
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

  });

});