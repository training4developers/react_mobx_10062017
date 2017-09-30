import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { CarRow } from './car-row';
import { HelloWorld } from './hello-world';

jest.unmock('./car-row');

const Wrapper = class extends React.Component {
  
  render() {
    return <table>
      <tbody>
        <CarRow car={this.props.car} onEditCar={this.props.onEditCar} onDeleteCar={this.props.onDeleteCar} />
      </tbody>
    </table>;
  }

};

describe('<CarRow /> Test Utils Mock DOM', () => {

  const mockCar = {
    id: 1,
    make: 'Ford',
    model: 'T',
    color: 'black',
    year: 1908,
    price: 200,
  };

  const eventHandlers = {
    editCar: () => {},
    deleteCar: () => {},
  };

  let component;
  let componentDOMNode;
  let editCarSpy;
  let deleteCarSpy;
  
  beforeEach(() => {
    editCarSpy = jest.spyOn(eventHandlers, 'editCar');
    deleteCarSpy = jest.spyOn(eventHandlers, 'deleteCar');
    component = TestUtils.renderIntoDocument(
      <Wrapper car={mockCar} onEditCar={eventHandlers.editCar} onDeleteCar={eventHandlers.deleteCar} />
    );

    // <Wrapper2 car={mockCar} onEditCar={eventHandlers.editCar} onDeleteCar={eventHandlers.deleteCar} />
    // console.log(component);

    componentDOMNode = TestUtils.findRenderedDOMComponentWithTag(component, 'tr');
  });

  test('<CarRow /> renders', () => {

    expect(component.props.car).toBe(mockCar);
    expect(component.props.onEditCar).toBe(editCarSpy);
    expect(component.props.onDeleteCar).toBe(deleteCarSpy);
  });

  test('<CarRow /> edit button click', () => {

    expect(component.props.onEditCar).toBe(editCarSpy);

    TestUtils.Simulate.click(componentDOMNode.querySelector('button:first-child'));
    expect(editCarSpy).toHaveBeenCalledWith(mockCar.id);
  });

  test('<CarRow /> delete button click', () => {
  
    expect(component.props.onDeleteCar).toBe(deleteCarSpy);

    TestUtils.Simulate.click(componentDOMNode.querySelector('button:last-child'));
    expect(deleteCarSpy).toHaveBeenCalledWith(mockCar.id);
  });
  
});
