import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();

        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";

            console.log(response);
        } catch (err) {
            
        }
    }

    return (<Fragment>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input required type="text" placeholder="Type you new task to do" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
            <button className="ml-2 rounded-pill btn btn-success">Add</button>
        </form>
    </Fragment>);
};

export default InputTodo;