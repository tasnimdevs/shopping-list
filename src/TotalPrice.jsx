import { TodoItem } from "./TodoItem"

export function TotalPrice({ todos }) {
  console.log(todos);
  // let sum = 0;
  /* let sum = array.reduce(
    (ac, cu) => ac + cu, 0
  ); */

  const totalPrice = todos.map(number => number.price).reduce((a, b) => a + b)
  return (
    <>
      <div className="flex justify-between text-lg font-bold mt-2 pt-2 border-t">
        <div>Total price</div>
        <div>{totalPrice}</div>
      </div>
    </>
  )

}