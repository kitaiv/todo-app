import React from 'react'
import {ListGroup} from "react-bootstrap";
import TodoModel from "../interfaces/TodoModel"

//@ts-ignore
const Todo = ({obj, handleTodo}) => {
    const todoItem: TodoModel = obj;

    const handleChecked = () => {
       handleTodo(todoItem.id)
    }

    return(
        <>
            <label htmlFor={todoItem.id}>
                <ListGroup.Item variant="secondary" className="list-g">
                    <input type="checkbox" checked={todoItem.complete} id={todoItem.id} onChange={handleChecked}/>
                    {todoItem.complete ? <s><span>{todoItem.title}</span></s> : <span>{todoItem.title}</span>}
                </ListGroup.Item>
            </label>
        </>
    )
}

export default Todo;
