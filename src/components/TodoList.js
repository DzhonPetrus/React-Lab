function TodoList(props){
    const todosJSX = [];
    props.todos.forEach((todo,idx) => todosJSX.push(<li><input type="checkbox" value="{idx}"/>{todo}</li>));

    return (
        <ul>
            {todosJSX}
        </ul>
    );
}

export default TodoList;