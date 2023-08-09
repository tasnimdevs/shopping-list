import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Products from "./Products";

export default function Categories() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("categories")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })
  const [products, setProducts] = useState([]);


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

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/products/${category}`);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [category]);


  return (
    <>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/categories/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Products</h2>
      <Products products={products} />
    </>
  )
}
