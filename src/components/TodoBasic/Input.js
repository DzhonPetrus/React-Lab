import {useRef} from 'react';

function Input({addTodo}){
  const inputTodo = useRef("");

  return (
    <>
      <div className="row">
        <div className="col-4">
          <input className="form-control" type="text" placeholder="New Todo" ref={inputTodo}/>
        </div>
        <div className="col-1">
        <button className="btn btn-primary" onClick={() => addTodo(inputTodo.current.value)}>+</button>
        </div>
      </div>
    </>
  );
}



export default Input;