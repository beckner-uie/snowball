import React from 'react';
import Task from './Task.js';

const styles = {
    listStyle: 'none',
    margin: '0',
    padding: '0',
  }

function List(props) {
  return (
    <ul style={styles}>
    {props.map((task) => {
    return Task(task);
    })}
    </ul>
  );
}
export default List;