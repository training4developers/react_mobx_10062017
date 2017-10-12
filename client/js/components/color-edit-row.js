import * as React from 'react';

export const ColorEditRow = props => {

  let colorNameInput;
  let colorNameHexCode;
  
  return <tr>
    <td><input type="text" defaultValue={props.color.name} ref={input => colorNameInput = input} /></td>
    <td><input type="text" defaultValue={props.color.hexCode} ref={input => colorNameHexCode = input} /></td>
    <td>
      <button type="button" onClick={() => {
        props.onSave({
          id: props.color.id,
          name: colorNameInput.value,
          hexCode: colorNameHexCode.value,
        });
      }}>Save</button>
      <button type="button" onClick={props.onCancel}>Cancel</button>
    </td>
  </tr>;
};