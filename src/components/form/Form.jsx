import React, { useState } from "react";
import "./style.css";

let count = 3

const Form = ({todos, setTodos}) => {
    const initialState = {
        id: 0,
        title: "",
        details: "",
        isDone: false
    }
    
    const [todo, setTodo] = useState(initialState)
    const onChangeHandler = (event) => {
        const {name, value} = event.target
        setTodo({...todo, [name]:value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (todo.title.trim() === "" || todo.details.trim() === "") return;
        console.log(todo.title, todo.details)
        setTodos([...todos, {...todo, id:count}])
        setTodo(initialState)
        count++
    }

    return (
        <form className="add-form" onSubmit={onSubmitHandler}>
            <div className="input-group">
                <label className="input-group-text">Title</label>
                <input type="text" name='title' value={todo.title} className="form-control" placeholder="뭐해야 돼?" onChange={onChangeHandler} />
                <label className="input-group-text">Details</label>
                <input type="text" name='details' value={todo.details} className="form-control" placeholder="자세한 내용은?" onChange={onChangeHandler} />
                <button className="btn btn-primary" id="button-addon2">Add To-do</button>
            </div>
        </form>
    )
    }
export default Form