import * as React from 'react';

// named export
export class ColorTool extends React.Component {

  Exercise #2

  1. Add a table of cars to your Car Tool component.
  2. Please use a table tag and the other related tags for tables.
  3. Columns
    Id: number
    Make: string
    Model: string
    Year: number
    Color: string
    Price: number
  4. Add column headers
  5. Display two rows of cars


  render() {
    //return React.createElement('h1', null, 'Color Tool');
    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        <li>red</li>
        <li>white</li>
        <li>blue</li>
      </ul>
    </div>;
  }

}