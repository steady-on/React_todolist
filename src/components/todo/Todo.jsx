import React from "react";
import "./style.css";

const Todo = ({todo, onDeleteHandler, onEditHandler}) =>{
    return (
        <div className="card">
            <div class="card-body">
                <h4 className="card-title">{todo.title}</h4>
                <p class="card-text">{todo.details}</p>
            </div>
            <div className="button-set">
                <button type="button" className="btn btn-outline-danger" onClick={()=>onDeleteHandler(todo.id)}>❌ Delete</button>
                <button type="button" className="btn btn-outline-success" onClick={()=>onEditHandler(todo.id)}>{todo.isDone ? '🚫 Cancel' : '✅ Done!'}</button>
            </div>
        </div>
    )
}

export default Todo