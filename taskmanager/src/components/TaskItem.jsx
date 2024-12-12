// src/components/TaskItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../store/tasksSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={() => dispatch(toggleTask(task.id))}>{task.text}</span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </li>
  );
};

export default TaskItem;
