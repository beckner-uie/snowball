import React from 'react';
import App from src/App.js;

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
}
function Task(props) {
    return (
        <li style={taskStyles.li}>
        <input style={taskStyles.input} className="checkbox" type="checkbox" name="finished" checked={props.completed}></input>
        <p style={taskStyles.checkboxText} className="checkbox-text">{props.title}</p>
        </li>
    );
}
export default Task;