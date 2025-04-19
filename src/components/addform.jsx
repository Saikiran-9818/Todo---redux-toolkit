import { useState } from "react"
import { useDispatch } from "react-redux"
import { addtodo } from "../features/todo/todoslice"

export default function Addform() {
  const [task, settask] = useState("")
  const dispatch = useDispatch()

  const submithandler = (evt) => {
    evt.preventDefault()
    console.log(task)
    settask("")
    dispatch(addtodo(task))
  }

  return (
    <>
      <form onSubmit={submithandler}>
        <input type='text' onChange={(e) => settask(e.target.value)}></input>
        <button>Add Task</button>
      </form>
    </>
  )
}
