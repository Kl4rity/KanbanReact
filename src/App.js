import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root.reducer';
import Kanban from './components/kanban-component/kanban.component';


const model = createStore(rootReducer);

class App extends Component {

  render() {
    return (
      <Provider store = {model}>
        <Kanban/>
      </Provider>
    );
  }
}

export default App;
