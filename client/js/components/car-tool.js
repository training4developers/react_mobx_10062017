import * as React from 'react';
import * as PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';
import { CarForm } from './car-form';

class ErrorBoundary extends React.Component {

  componentDidCatch() {
    console.log('error occurred');
  }

  render() {
    return this.props.children;
  }

}

@inject('store')
@observer
export class CarTool extends React.Component {

  static propTypes = {
    store: PropTypes.object,
  };

  componentDidMount() {
    this.props.store.refreshCars();
  }

  render() {

    const {
      sortedCars, editCarId, addCar, deleteCar,
      editCar, cancelCar, saveCar, sortCars, filterCars
    } = this.props.store;

    return <div>
      <ErrorBoundary>
        <ToolHeader headerText="Car Tool" />
      </ErrorBoundary>
      <CarTable cars={sortedCars} editCarId={editCarId}
        onDeleteCar={deleteCar} onEditCar={editCar}
        onSaveCar={saveCar} onCancelCar={cancelCar}
        onSortCars={sortCars} onFilterCars={filterCars}  />
      <CarForm onSaveCar={addCar} />
    </div>;
  }
}


