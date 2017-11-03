import * as React from 'react';
import { mount } from 'enzyme';

import { ColorForm } from './color-form';

describe('<ColorForm /> Enzyme Tests', () => {

  const eventHandlers = { saveColor: () => {} };

  const colorNameValue = 'purple';
  const colorHexCodeValue = '#ed127f';

  let component;
  let saveColorSpy;

  beforeEach(() => {
    saveColorSpy = jest.spyOn(eventHandlers, 'saveColor');
    component = mount(<ColorForm onSaveColor={eventHandlers.saveColor} />);
  });

  test('<ColorForm /> test', () => {

    expect(component.props().onSaveColor).toBe(saveColorSpy);
    expect(component.state().colorName).toBe('junk');
    expect(component.state().colorHexCode).toBe('');

    const colorNameInput = component.find('#color-name-input');
    expect(colorNameInput.prop('value')).toBe('');

    const colorHexCodeInput = component.find('#color-hexcode-input');
    expect(colorHexCodeInput.prop('value')).toBe('');

    colorNameInput.simulate('change', {
      target: { value: colorNameValue, name: 'colorName' },
      currentTarget: { value: colorNameValue, name: 'colorName' },
    });

    expect(component.state().colorName).toBe(colorNameValue);

    colorHexCodeInput.simulate('change', {
      target: { value: colorHexCodeValue, name: 'colorHexCode' },
      currentTarget: { value: colorHexCodeValue, name: 'colorHexCode' },
    });

    expect(component.state().colorHexCode).toBe(colorHexCodeValue);    
    
    const saveColorButton = component.find('button');
    saveColorButton.simulate('click');

    expect(saveColorSpy).toBeCalledWith({
      name: colorNameValue,
      hexCode: colorHexCodeValue,
    });

    expect(component.state().colorName).toBe('');
    expect(component.state().colorHexCode).toBe('');

  });

});