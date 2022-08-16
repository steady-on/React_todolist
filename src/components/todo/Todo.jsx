import React from "react";
import "./style.css";

const Todo = ({todo, onDeleteHandler, onEditHandler}) =>{
    return (
        <div className="todo-box">
            <div>
                <h2 className="todo-title">{todo.title}</h2>
                <div>{todo.details}</div>
            </div>
            <div className="button-set">
                <button type="button" className="btn btn-outline-danger" onClick={()=>onDeleteHandler(todo.id)}>❌ Delete</button>
                <button type="button" className="btn btn-outline-success" onClick={()=>onEditHandler(todo.id)}>{todo.isDone ? '🚫 Cancel' : '✅ Done!'}</button>
            </div>
        </div>
    )
}

export default Todo