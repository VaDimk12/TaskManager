// src/components/TaskManager.js
import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TaskManager = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default TaskManager;
