import { useEffect, useState } from "react"
import "./index.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("categories")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState(() => {
    const localValue = localStorage.getItem("categories")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  function handleSubmit(e) {
    e.preventDefault();
    console.log(category);

    if (category === "") return;

    addCategory(category);
    setCategory("");

  }


  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories))
  }, [categories])

   


    function addCategory(title) {
      setCategories(categories => {
        return [
          ...categories,
          { id: crypto.randomUUID(), name: title, active: true },
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
          <h1 className="text-center text-lg font-bold mb-5">Category</h1>
          <form onSubmit={handleSubmit} >

            <div className="flex gap-1 mb-5">
              <input
                value={category}
                onChange={e => setCategory(e.target.value)}
                type="text"
                id="cat-name"
                className="border-2 grow "
              />
              <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm cursor-pointer hover:bg-sky-700">+ Add</button>
            </div>
          </form>

          <ul className="flex justify-between gap-3">
            {categories.map(todo => {
              return (
                <li className="border text-center cursor-pointer p-3 grow"
                  key={todo.id}
                >{todo.name}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
