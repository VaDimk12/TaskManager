// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.tasks);
    localStorage.setItem('tasks', serializedState);
  } catch (err) {
    console.error('Error saving state:', err);
  }
};

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
