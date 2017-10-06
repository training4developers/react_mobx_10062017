import * as React from 'react';
import * as ReactDOM from 'react-dom';

// named import
import { ColorTool } from './components/color-tool';

const myColors = [
  { id: 1, name: 'red', hexCode: '#ff0000' },
  { id: 2, name: 'white', hexCode: '#ffffff' },
  { id: 3, name: 'blue', hexCode: '#0000ff' },
];

ReactDOM.render(<ColorTool colors={myColors} />, document.querySelector('main'));
