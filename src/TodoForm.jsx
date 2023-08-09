import { useState } from "react"

export function TodoForm({ afterSubmit }) {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log(title, price);
    if (title === "" || price === "") return;

    afterSubmit(title, price);
    setTitle("")
    setPrice("")
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex gap-1 ">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          id="item"
          className="border-2 grow "
        />
        <input
          value={price}
          onChange={e => setPrice(e.target.value)}
          type="number"
          className="border-2"
        />
        <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm cursor-pointer hover:bg-sky-700">+ Add</button>
      </div>

    </form>

  )
}