import {useRef} from 'react';

function Input({addTodo}){
  const inputTodo = useRef();
  const newTodo = () => {
    const todo = inputTodo.current.value;
    addTodo(todo);
    inputTodo.current.value = "";
  }

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-4">
          <input className="form-control" type="text" placeholder="New Todo" ref={inputTodo}/>
        </div>
        <div className="col-1">
        <button className="btn btn-primary" onClick={newTodo}>+</button>
        </div>
      </div>
    </>
  );
}



export default Input;