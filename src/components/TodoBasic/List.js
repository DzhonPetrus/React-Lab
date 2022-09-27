function List({todos, checkTodo}){

  return (
    <>
      <div className="row">
        <div className='col-4'>
          <ul className='list-group'>
              {
              todos.map((todo) => {
                return <li key={todo.id} className='list-group-item'>
                  <input type="checkbox" className='col-1' defaultChecked={todo.isDone} onChange={() => checkTodo(todo)}/>
                  <span style={{textDecoration:todo.isDone ? 'line-through' : ''}}>
                    {todo.id} | {todo.task} | {todo.isDone.toString()}
                  </span>
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