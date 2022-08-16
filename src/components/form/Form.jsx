import React, { useState } from "react";
import "./style.css";

let count = 3

const Form = ({ setTodos, todos}) => {
    const initialState = {
        id: 0,
        title: "",
        body: "",
        isDone: false
    }
    
    const [todo, setTodo] = useState(initialState)
    const onChangeHandler = (event) => {
        const { title, details } = event.target
        setTodo({...todo, [title]:details})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (todo.title.trim() === "" || todo.details.trim() === "") return;
        setTodos([...todos, {...todo, id: count}])
        setTodo(initialState)
        count++
    }

    return (
        <form className="add-form" onSubmit={onSubmitHandler}>
            <div className="input-group">
                <label className="input-group-text">Title</label>
                <input type="text" aria-label={todo.title} className="form-control" placeholder="뭐해야 돼?" name='title' onChange={onChangeHandler} />
                <label className="input-group-text">Details</label>
                <input type="text" aria-label={todo.details} className="form-control" placeholder="자세한 내용은?" name='details' onChange={onChangeHandler} />
                <button className="btn btn-primary" type="button" id="button-addon2">Add To-do</button>
            </div>
        </form>
    )
    }
export default Form