import { useState } from 'react'
import './App.css'
import AddTodo from './componants/AddTodo'
import Todos from './componants/Todos'
import EditTodo from './componants/EditTodo'

function App() {
  const [edit, setEdit] = useState({
    status: false,
    id: 0,
    text: ""
  })

  return (
    <>
      <h1> Hi There</h1>
      {edit.status ? <EditTodo edit={edit} setEdit={setEdit} /> : <AddTodo /> }
      <Todos edit={edit} setEdit={setEdit} />
    </>
  )
}

export default App
