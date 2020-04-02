import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter( todo => todo.todo_id !== id));

        } catch (error) {
            console.error(error);
        }

    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect( () => {
        getTodos();
    }, []);


    console.log(todos);

    return (<Fragment>
        {" "}
        <table className="table table-striped mt-5 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {todos.map( todo => (
                    <tr key={todo.todo_id}>
                        <td class="text-left"><span class="icon fa fa-map-pin text-info"></span>{todo.description}</td>
                        <td><EditTodo todo = {todo}></EditTodo></td>
                        <td><span class="flat-button fa fa-trash-alt text-danger" onClick={() => deleteTodo(todo.todo_id)}></span></td>
                    </tr>
                ))}

            </tbody>
        </table>
    </Fragment>);
};

export default ListTodos