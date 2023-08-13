import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export default function Categories() {

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
        { id: crypto.randomUUID(), name: title, cat_income: [{
          "id": "5ce85f39-0ce1-4bf5-b373-eb41734fab08",
          "title": "For Grocery",
          "completed": false,
          "price": 1000
      },
      {
          "id": "da2da6c8-a148-44ad-b645-e678cd577459",
          "title": "Purchase Fish",
          "completed": false,
          "price": 500
      }], cat_expense: [{
        "id": "5ce85f39-0ce1-4bf5-b373-eb41774fab08",
        "title": "Atta",
        "completed": false,
        "price": 80
    },
    {
        "id": "5ce85f39-0ce1-4bf5-b373-eb41884fab08",
        "title": "Garlic",
        "completed": false,
        "price": 200
    },
    {
        "id": "da2da6c8-a148-44ad-b645-e673cd577459",
        "title": "Fish",
        "completed": false,
        "price": 600
    }], active: true },
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

          <div className="flex justify-between gap-3">
            {categories.map(category => {
              return (
                <Link key={category.id} className="border text-center cursor-pointer p-3 grow" to={`/category/${category.id}`}>{category.name}</Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
