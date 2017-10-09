import * as React from 'react';


export const ColorViewRow = props => <tr>
  <td>{props.color.name}</td>
  <td>{props.color.hexCode}</td>
  <td>
    <button type="button" onClick={() => props.onEdit(props.color.id)}>Edit</button>
    <button type="button" onClick={() => props.onDelete(props.color.id)}>Delete</button>
  </td>
</tr>;

// export class ColorViewRow extends React.Component {

//   render() {

//     const { id, name, hexCode } = this.props.color;

//     return <tr>
//       <td>{name}</td>
//       <td>{hexCode}</td>
//       <td>
//         <button type="button" onClick={() => this.props.onEdit(id)}>Edit</button>
//         <button type="button" onClick={() => this.props.onDelete(id)}>Delete</button>
//       </td>
//     </tr>;
//   }


// }