import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

const AddTodo = () => {
    
    const [input, setInput] = React.useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
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
            <button>Submit</button>
        </form>
    </div>
  )
}

export default AddTodo