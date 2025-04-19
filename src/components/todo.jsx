import { useDispatch, useSelector } from "react-redux"
import Addform from "./addform"
import { deletetodo } from "../features/todo/todoslice"

export default function Todo() {
  const todos = useSelector((state) => state.todos.todos)
  console.log(todos)

  const dispatch = useDispatch()

  const clickhandler = (id) => {
    console.log("deleted ", id)
    dispatch(deletetodo(id))
  }
  return (
    <>
      <Addform />
      <h1>Todos </h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} &nbsp;&nbsp;{" "}
            <button onClick={() => clickhandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}
