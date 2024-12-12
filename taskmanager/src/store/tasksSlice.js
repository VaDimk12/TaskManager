// src/store/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    console.error('Error loading state:', err);
    return [];
  }
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
