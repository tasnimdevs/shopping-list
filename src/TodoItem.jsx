export function TodoItem({ completed, id, title, price, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label className="mt-2 gap-3 flex items-center">
        <button onClick={() => deleteTodo(id)} className="px-4 py-2 font-semibold text-sm bg-red-500 text-white rounded-none shadow-sm cursor-pointer hover:bg-red-700 	">
          Delete
        </button>
        <div className="grow flex justify-between">
         <div> {title}</div>
         <div> {price}</div>
        </div>
      </label>

    </li>
  )
}