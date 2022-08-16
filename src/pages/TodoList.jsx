import React, {useState} from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id:1,
            title: "리액트 공부하기",
            details: "리액트 강의 완강하기",
            isDone: true
        },
        {
            id:2,
            title: "리액트 마스터하기",
            details: "리액트 미니 프로젝트 해보기",
            isDone: false
        }
    ])

    return (
        <Layout>
            <Header />
            <Form setTodos={setTodos} todos={todos} />
            <List todos={todos} setTodos={setTodos} />
        </Layout>
    )
}

export default TodoList