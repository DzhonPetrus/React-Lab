function List({todos, checkTodo, deleteTodo}){

  return (
    <>
      <div className="row justify-content-center">
        <div className='col-5'>
          <ul className='list-group'>
              {
              todos.map((todo) => {
                return <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                  <input type="checkbox" className='col-1' defaultChecked={todo.isDone} onChange={() => checkTodo(todo)}/>
                  <h5 style={{textDecoration:todo.isDone ? 'line-through' : ''}}>
                    {todo.task}
                  </h5>
                  <i className="btn" onClick={() => deleteTodo(todo.id)}>
                  X
                  </i>
                  </li>
              })
              }
          </ul>
        </div>
      </div>
    </>
  );
}


export default List;