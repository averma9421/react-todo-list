import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import {useState} from "react";
import {AddTodo} from "./MyComponents/AddTodo";

function App() {
    const onDelete = (todo) => {

        console.log("I am on delete of", todo.title);
        setTodos(todos.filter((e) => {
            return e !== todo;
        }))
    }
    const addTodo = (title, desc)=>{
    console.log("adding to todo");

    }
    const [todos, setTodos] = useState([
        {
            sno: 1,
            title: "Go to market",
            desc: "buy veggies"
        },
        {
            sno: 2,
            title: "Go to mall",
            desc: "buy clothes"
        },
        {
            sno: 3,
            title: "Go to park",
            desc: "for exercise"
        }
    ]);
    return (
        <>
            <Header title="My Todos List" searchBar={false}/>
            <AddTodo addTodo ={addTodo}/>
            <Footer/>

            <Todos items={todos} onDelete={onDelete}/>
        </>
    );
}

export default App;
