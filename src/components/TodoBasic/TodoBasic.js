import Input from "./Input";
import {useEffect, useRef, useState} from 'react';
import List from "./List";
import Subheader from "../Subheader";

function TodoBasic(){
  const sampleTodos = [
    {
      id:1,
      task: "Clean table",
      isDone: true
    },
    {
      id:2,
      task: "Brew coffee",
      isDone: false
    },
    {
      id:3,
      task: "Drink coffee",
      isDone: false
    },
  ];
  const [todosCount, setTodosCount] = useState(0);


  const [todos, setTodos] = useState(sampleTodos);
  const [filteredTodos, setFilteredTodos] = useState(sampleTodos);
  const txtFilter = useRef();

  const addTodo = (newTask) => {
    const newTodo = {
      id: (performance.now()+'').replace('.',''),
      task: newTask,
      isDone: false
    };

    setTodos([...todos, newTodo]);
    setFilteredTodos([...todos, newTodo]);
  };

  const checkTodo = (todo) => {
    todo.isDone = !todo.isDone;
    const newTodos = [...todos.map(_todo => _todo.id !== todo.id ? _todo : todo)];
    setTodos(newTodos);
    setFilteredTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos.filter(_todo => _todo.id !== id)];
    setTodos(newTodos);
    setFilteredTodos(newTodos);
  }

  const filterList = () => {
    const filterStr = txtFilter.current.value;
    if(filterStr === "")
      setFilteredTodos(todos);

    setFilteredTodos(todos.filter(todo => todo.task.includes(filterStr)));
  }

  useEffect(() => {
    setTodosCount(todos.length);
  }, [setTodosCount, todos]);

  return (
    <>
      <div className="container text-center">

        <h1>Final Project - Basic Todo List</h1>
        <Subheader name="John Peter"/>

        <h5>Filter Todos</h5>

        <div className="row justify-content-center">
          <div className="col-5"><input className="form-control" type="text" ref={txtFilter} onChange={filterList}/></div>
        </div>

        <h5>Todos: {todosCount} | Remaining: {filteredTodos.filter(_todo => !_todo.isDone).length} </h5>
        <Input addTodo={addTodo}/>

        <List todos={filteredTodos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
      </div>
    </>
  );
}



export default TodoBasic;