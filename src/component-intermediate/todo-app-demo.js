import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const TodoItem = function({ todo: { completed, text,priority }, idx, handleTodoStatusToggle, handleTodoRemove, handleTodoPriority }) {
    const style ={}
    if(completed) style.textDecoration = 'line-through'
    if(priority >= 5) style.fontWeight = 'bold'
    return (
        <div>
            <span style={style}
                onClick={() => handleTodoStatusToggle(idx)}>
                {text} (중요도 : {priority})
            </span>&nbsp;
            <button onClick={() => handleTodoPriority(idx,priority+1)}>증가</button>
            <button onClick={() => handleTodoPriority(idx,priority -1 > 0 ? priority -1:0)}>감소</button>
            <button onClick={() => handleTodoRemove(idx)}>삭제</button>
        </div>
    )
}

const TodoList = function({ todos, handleTodoStatusToggle, handleTodoRemove,handleTodoPriority }) {
    return (
        <ol>
            {
                todos.map((todo, idx) => {
                    return (
                        <li key={idx}>
                            <TodoItem idx={idx} todo={todo}
                                handleTodoStatusToggle={handleTodoStatusToggle}
                                handleTodoRemove={handleTodoRemove}
                                handleTodoPriority={handleTodoPriority} />
                        </li>
                    )
                })
            }
        </ol>
    )
}

const TodoAdder = function({ handleTodoAdd }) {
    const [input, setInput] = useState("")
    const handleChange = (e) => setInput(e.target.value)
    return (
        <div>
            <input type='text' onChange={handleChange} value={input} />
            <button onClick={() => {
                handleTodoAdd({ completed: false, text: input, priority:0 })
                setInput("")
            }}>추가</button>
        </div>
    )
}

const TodoApp = function(props) {
    const [todos, setTodos] = useState([
        { completed: false, text: '리액트 공부하기', priority : 3 },
        { completed: true, text: 'ES6 문법 공부하기', priority : 0 }
    ])

    const handleTodoAdd = newTodo => setTodos(todos => todos.concat(newTodo))
    const handleTodoStatusToggle = todoIndex => {
        setTodos(todos => {
            return todos.map((todo, idx) => {
                if(idx === todoIndex) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        })
    }
    const handleTodoPriority = (todoIndex,newPriority) => {
        setTodos(todos => {
            return todos.map((todo, idx) => {
                if(idx === todoIndex) {
                    return {
                        ...todo,
                        priority: newPriority
                    }
                }
                return todo
            })
        })
    }
    const handleTodoRemove = todoIndex => {
        setTodos(todos => {
            return todos.filter((_, idx) => {
                return idx !== todoIndex
            })
        })
    }

    return (
        <div>
            <TodoList todos={todos}
                handleTodoStatusToggle={handleTodoStatusToggle}
                handleTodoRemove={handleTodoRemove}
                handleTodoPriority={handleTodoPriority}/>
            <TodoAdder handleTodoAdd={handleTodoAdd} />
        </div>
    )
}

ReactDOM.render(<TodoApp />, document.getElementById("root"))