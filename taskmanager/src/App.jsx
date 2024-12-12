// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TaskManager from './components/TaskManager';

const App = () => (
  <Provider store={store}>
    <TaskManager />
  </Provider>
);

export default App;
