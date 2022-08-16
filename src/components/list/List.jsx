import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

const List = ({todos, setTodos }) => {
    const onDeleteHandler = (todoId) => {
        const newTodos = todos.filter((todo) => (todo.id !== todoId))
    setTodos(newTodos)
    }

    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo)=>{
            if (todo.id === todoId) {
                return {
                    ...todo,
                    isDone: !todo.isDone
                }
            } else {
                return {...todo}
            }
        })

        setTodos(newTodos)
    }

    return (
        <div className="list-box" id="accordionExample">
            <div className="list-prog">
                <h2 className="list-label">In Progress...💬</h2>
                <div className="list-wrap">
                    {todos.map((todo) => {
                        if (!todo.isDone) {
                            return (
                                <Todo 
                                    todo={todo}
                                    key={todo.id}
                                    setTodos={setTodos}
                                    onDeleteHandler={onDeleteHandler}
                                    onEditHandler={onEditHandler}
                                />
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
            </div>
            <div className="list-prog">
                <h2 className="list-label">Done! 🚩</h2>
                <div className="list-wrap">
                    {todos.map((todo) => {
                        if (todo.isDone) {
                            return (
                                <Todo 
                                    todo={todo}
                                    key={todo.id}
                                    setTodos={setTodos}
                                    onDeleteHandler={onDeleteHandler}
                                    onEditHandler={onEditHandler}
                                />
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
            </div>
        </div>

    )
}

export default List