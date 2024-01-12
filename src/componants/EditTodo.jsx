import React from 'react'
import { useDispatch } from 'react-redux'
import {editTodo} from "../features/todoSlice"

const EditTodo = ({edit, setEdit}) => {

    const dispatch = useDispatch()
    const [input, setInput] = React.useState(edit.text)

    function handleSubmit(e){
        e.preventDefault()
        dispatch(editTodo({id: edit.id, text: input}))
        setEdit({...edit, status: false})
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Enter your task' 
            onChange={(e) => setInput(e.target.value)} 
            value={input}
            />
            <button>Update</button>
        </form>
    </div>
  )
}

export default EditTodo