import { useState } from "react"

export function TodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")
  const [newPrice, setNewPrice] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem, newPrice)
    setNewItem("")
    setNewPrice("")
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex gap-1 ">
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          className="border-2 grow "
        />
        <input
          value={newPrice}
          onChange={e => setNewPrice(e.target.value)}
          type="number"
          className="border-2"
        />
        <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm cursor-pointer hover:bg-sky-700">+ Add</button>
      </div>

    </form>

  )
}