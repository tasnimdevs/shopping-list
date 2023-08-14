export function TodoItem({ completed, id, title, price, toggleTodo, deleteTodo }) {
  return (
    <li>
        <div className="grow flex justify-between">
         {title}
        </div>
    </li>
  )
}


