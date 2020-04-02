import React, {Fragment} from 'react';
import './App.css';
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
  <Fragment>
    <div className="container">

    <div class="row mt-5">
      <div class="col">
        <div className="logo">
          <img src="todo.jpg" width="200" ></img>
        </div>        
      </div>
      <div class="col-6">
        <div className="rounded-pill text-white bg-secondary pb-1 pt-1">
        <h2 className="text-center pl-2 pr-2">Gianluca's Todo List</h2>
        </div>      
      </div>
      <div class="col">
      </div>
    </div>
      
      <InputTodo></InputTodo>
      <ListTodos></ListTodos>
    </div>
  </Fragment>
  );
}

export default App;
