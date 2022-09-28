function List({todos, checkTodo, deleteTodo}){

  return (
    <>
      <div className="row justify-content-center">
        <div className='col-5'>
          <ul className='list-group'>
              {
              todos.map((todo) => {
                return <li key={todo.id} className='list-group-item'>
                  <input type="checkbox" className='col-1' defaultChecked={todo.isDone} onChange={() => checkTodo(todo)}/>
                  <span style={{textDecoration:todo.isDone ? 'line-through' : ''}}>
                    {todo.task}
                  </span>
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