import React, {useState} from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("title or desc not defined!")
        }
        props.addTodo(title,desc);
    }

    return (
        <div className="container my-3">
            <h3> Add a ToDo</h3>'
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">ToDo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}
                           id="exampleInputEmail1" aria-describedby="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-success" value={desc}
                        onChange={(e) => setDesc(e.target.value)}>Submit
                </button>
            </form>
        </div>
    )
}