import React from 'react';
import ClassCounter from './components/ClassCounter';
import HookContainer from './components/HookCounter';
import TodoList from './components/todo-app/TodoList';

const App = () => {
  return (
    <div className="App">
      {/* <ClassCounter /> */}

      <HookContainer />

      <TodoList />
    </div>
  );
}

export default App;
 