import { Component } from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);

        this.todosJSX = [];
        props.todos.forEach((todo,idx) => this.todosJSX.push(<li key={idx}><input type="checkbox" value="{idx}" />{todo}</li>));
    }


    render(){

        return (
            <ul>
                {this.todosJSX}
            </ul>
        );
    }
}

export default TodoList;