import Input from "./Input";
import {useEffect, useState} from 'react';
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

  const addTodo = (newTask) => {
    const newTodo = {
      id: todosCount+1,
      task: newTask,
      isDone: false
    };

    setTodos([...todos, newTodo]);
  };

  const checkTodo = (todo) => {
    todo.isDone = !todo.isDone;
    const newTodos = [...todos.map(_todo => _todo.id !== todo.id ? _todo : todo)];
    setTodos(newTodos);
  }

  useEffect(() => {
    setTodosCount(todos.length);
  }, [setTodosCount, todos]);

  return (
    <>
    <h1>Basic Todo List</h1>
    <Subheader name="John Peter"/>
    <h5>Todos: {todosCount} | Remaining: {todos.filter(_todo => !_todo.isDone).length} </h5>
      <Input addTodo={addTodo}/>

      <List todos={todos} checkTodo={checkTodo}/>
    </>
  );
}



export default TodoBasic;