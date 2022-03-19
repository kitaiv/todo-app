import React, {useEffect, useState} from 'react'
import {ListGroup} from "react-bootstrap";
import Todo from './Todo'
import TodoCompleteModel from "../interfaces/TodoCompleteModel";

//@ts-ignore
const Todos = ({todos, handleTodo}) => {
    const [incomplete, setIncomplete] = useState([])
    useEffect(() => {
        const arr = todos.filter((el: TodoCompleteModel) => !el.complete)
        setIncomplete(arr)
    }, [todos])
    return (
        <>
            <ListGroup>
                {
                    incomplete.map((el: object, k: number) =>
                        <Todo
                            key={k}
                            //@ts-ignore
                            obj={el}
                            handleTodo={handleTodo}
                        />)
                }

            </ListGroup>
        </>
    )
}

export default Todos;
