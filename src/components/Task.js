import React from 'react';
import { ReactComponent as DeleteVector} from '../assets/Delete-Vector.svg';

const taskStyles = {
  li: {
    border: 'black solid 1px',
    display: 'flex',
    alignContent: 'space-around',
    width: '100%',
    height: '75px',
    padding: '10px',
    fontSize: '24px',
  },
  checkboxText: {
    margin: 'auto 0',
  },
  listIcon: {
    width: '40px',
    height: '40px',
    margin: 'auto',
  },
  button: {
    margin: 'auto'
  }
}
export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }
  deleteToDo(id) {
    this.props.deleteToDo(id);
  }
  render() {
    return (
        <li style={taskStyles.li}>
        <input style={taskStyles.input} className="checkbox" type="checkbox" name="finished" checked={this.props.completed}></input>
        <p style={taskStyles.checkboxText} className="checkbox-text">{this.props.task.title}</p>
        <button onClick={(e) => this.deleteToDo(this.props.id)} style={taskStyles.button} ><DeleteVector className="list-icon" style={taskStyles.listIcon} /></button>
        </li>
    );
}}