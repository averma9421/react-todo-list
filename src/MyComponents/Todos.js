import React from 'react'
import {TodoItem} from "./TodoItem";

const Todos = (props) => {

    return (
        <div className="container">
            <h3>
                Todos List
            </h3>
            <span>
                {props.items.length > 0 && props.items.map(todo => <TodoItem key={todo.sno} todo={todo} onDelete = {props.onDelete} />)}
                {props.items.length <= 0 && <span>No items found</span>}
            </span>
        </div>
    )
}

export default Todos;