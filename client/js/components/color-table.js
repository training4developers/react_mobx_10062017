import * as React from 'react';

import { ColorEditRow } from './color-edit-row';
import { ColorViewRow } from './color-view-row';

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
