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

    const myContent = '<b>Andrew we hope you feel better!</b><script>alert(0);</script>';

    return <div>
      <div dangerouslySetInnerHTML={ ({ __html: myContent }) }></div>
      <div>{myContent}</div>
    </div>;
  }

}

ReactDOM.render(
  <Demo />,
  document.querySelector('main')
);