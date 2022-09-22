import './App.css';
import Header from "components/Header";
import Subheader from "components/Subheader";
import TodoList from "components/TodoList";

const todos = ["Clean table", "Brew coffee", "Drink Coffee"];

function App() {
  return (
    <>
      <Header/>
      <Subheader name="John Peter"/>
      <TodoList todos={todos}/>
    </>
  );
}



export default App;
