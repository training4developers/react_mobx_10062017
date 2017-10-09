import * as React from 'react';

import { ColorEditRow } from './color-edit-row';
import { ColorViewRow } from './color-view-row';

// Instructions

// 1. Ensure your delete, edit, save, cancel operations are working correctly

// 2. Convert ToolHeader, ViewRow to stateless functions

// 3. Two examples of coding an arrow function inline within the onClick curly braces



// presentational
export const ColorTable = props => <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>HexCode</th>
    </tr>
  </thead>
  <tbody>
    {props.colors.map(color => color.id === props.editRowId
      ? <ColorEditRow key={color.id} color={color} onSave={props.onSave} onCancel={props.onCancel} />
      : <ColorViewRow key={color.id} color={color} onEdit={props.onEdit} onDelete={props.onDelete} />)}
  </tbody>
</table>;
