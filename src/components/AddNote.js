import React, {useContext, useState}  from 'react'
import noteContext from "../context/notes/noteContext"

export const AddNote = (props) => {
    const context = useContext(noteContext);
    const{addNote} =context;
    const [note, setNote] = useState({title: "", description: "", tag: ""})
    
    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Added successfully", "success")
    }
    
    const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})
    }
  return (
    <div className="container my-3">
        <h2>Add a note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input value={note.title} type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input value={note.description} type="text" className="form-control" name="description" id="description" onChange={onChange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input value={note.tag} type="text" className="form-control" name="tag" id="tag" onChange={onChange} minLength={5} required/>
          </div>
          <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" onClick={handleClick} className="btn btn-primary">Add Note</button>
        </form>
      </div>
  )
}
