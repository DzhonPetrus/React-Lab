function List({todos}){

  return (
    <>
      <div className="row">
        <div className='col-4'>
          <ul className='list-group'>
              {todos.map((todo,idx) => <li key={idx} className='list-group-item'><input type="checkbox" value="{idx}" className='col-1' />{todo}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
}


export default List;