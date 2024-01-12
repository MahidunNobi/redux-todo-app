import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

const Todos = ({edit, setEdit}) => {

    const todos=  useSelector(state => state.todos)
    const dispatch = useDispatch()     
    
  return (
    <div>
        <h2>Todos</h2>
        <ul>
            {todos.map(todo => <li key={todo.id}>
                                {todo.text}
                                <button onClick={() => setEdit({id: todo.id, text:todo.text, status:true})}> Edit</button>
                                <button onClick={()=> dispatch(removeTodo(todo.id))}> Delete</button>
                              </li>
                )}
        </ul>
    </div>
  )
}

export default Todos