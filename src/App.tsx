import React, {useRef, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider, InputGroup, FormControl, Button} from "react-bootstrap";
import Todos from './components/Todos'
import CompletedTodos from "./components/CompletedTodos";
import {nanoid} from 'nanoid'

const LOCAL_STORAGE_KEY: string = "todoApp.todos"

const App = () => {

  const [todos, setTodos]: any = useState([])

  const input: any = useRef(null)

  useEffect(() => {
    //@ts-ignore
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleTodo(id: string | number){
    const newTodolist = [...todos]
    const todo = newTodolist.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodolist)
  }

  function handleAdd(){
    let val: any = input.current.value
    if(val === '') return
    const i = nanoid()
    setTodos((prev: []) => [...prev, {
      id: i,
      title: val,
      complete: false
    }])
    input.current.value = null
  }

  return (
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <div>
        <InputGroup className="mb-3">
          <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              ref={input}
              onKeyPress={e => e.code === "Enter" ? handleAdd() : null}
          />
          <Button size="lg" variant="success" onClick={handleAdd}>ADD</Button>
        </InputGroup>
      </div>
      <div>
        <Todos
            //@ts-ignore
            todos={todos}
            handleTodo={handleTodo}
        />
        <CompletedTodos
            //@ts-ignore
            todos={todos}
            handleTodo={handleTodo}
        />
      </div>
      <svg style={{left: 0, bottom: 0, position: 'fixed', zIndex: '-1'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="0.75"  d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,165.3C672,213,768,267,864,256C960,245,1056,171,1152,149.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </ThemeProvider>
  );
}

export default App;
