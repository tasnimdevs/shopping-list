import { TodoItem } from "./TodoItem"

export function TotalPrice({ todos }) {

  const totalPrice = todos.map(todo => todo.price).reduce((a, b) => a + b, 0);
  return (
    <>
      <div className="flex justify-between text-lg font-bold mt-2 pt-2 border-t">
        <div>Total price</div>
        <div>{totalPrice}</div>
      </div>
    </>
  )
}