import React from 'react';
import Todo from './todoList/Todo';
import List from './todoList/List';
import { TodoStyle } from './AppStyle';
import { Provider } from 'react-redux'; 
import store from './store';

function App() {
  return (
    <div className="App" style={{padding: '20px'}}>
      Hello,this is a todoList with redux!
      <TodoStyle>
        <Todo></Todo>
      </TodoStyle>
      <Provider store={store}>
        <List></List>
      </Provider>
    </div>
  );
}

export default App;
