import React, {useEffect, useState, useRef} from 'react';
import {Accordion, ListGroup} from "react-bootstrap";
import TodoModel from "../interfaces/TodoModel";
import TodoCompleteModel from "../interfaces/TodoCompleteModel";

const CompletedTodos = ({todos, handleTodo}: any) => {

    const [completeTodos, setCompleteTodos] = useState([])
    const checked: any = useRef()


    useEffect(() => {
        const arr = todos.filter((el: TodoCompleteModel) => el.complete)
        setCompleteTodos(arr)
    }, [todos])


    const handleChecked = (e: any) => {
        handleTodo(e.target.id)
    }

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Completed tasks</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            {
                                completeTodos.map((el: TodoModel, key: number) => (
                                    <label htmlFor={el.id} key={key}>
                                        <ListGroup.Item variant="secondary" className="list-g">
                                            <input
                                                type="checkbox"
                                                checked={el.complete}
                                                id={el.id}
                                                //@ts-ignore
                                                ref={checked}
                                                onChange={handleChecked}
                                            />
                                            {el.complete ? <s><span>{el.title}</span></s> : <span>{el.title}</span>}
                                        </ListGroup.Item>
                                    </label>
                                ))
                            }
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion></>
    )
}

export default CompletedTodos
