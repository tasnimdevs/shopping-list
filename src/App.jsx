import { useEffect, useState } from "react"
import { TodoForm } from "./TodoForm"
import "./index.css"
import { TodoList } from "./TodoList"
import { TotalPrice } from "./TotalPrice"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title, price) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false, price: parseInt(price) },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {

      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <div className="w-1/2 m-auto h-screen flex items-center">
        <div className="p-5 border w-full">
          <TodoForm onSubmit={addTodo} />
          <h1 className="mt-2 font-bold">Shopping List</h1>
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          <TotalPrice todos={todos} />
        </div>
      </div>
    </>
  )
}
