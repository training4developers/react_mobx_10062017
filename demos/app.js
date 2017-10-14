import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { CarStore } from './stores/car-store';
// import { CarTool } from './components/car-tool';

// ReactDOM.render(
//   <CarTool store={new CarStore} />,
//   document.querySelector('main')
// );


class Demo extends React.Component {

  render() {

    return <div className="critical" style={{ display: 'none' }}>Some Text</div>;


  }

}

ReactDOM.render(
  <Demo />,
  document.querySelector('main')
);