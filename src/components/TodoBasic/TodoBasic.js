import Input from "./Input";
import {useState} from 'react';
import List from "./List";

function TodoBasic(){
  const [todos, setTodos] = useState(["Clean table", "Brew coffee", "Drink Coffee"]);

  const addTodo = (newTodo) => setTodos([...todos, newTodo]);

  return (
    <>
      <Input addTodo={addTodo}/>

      <List todos={todos} />
    </>
  );
}



export default TodoBasic;