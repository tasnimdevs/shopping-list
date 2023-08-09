import { useEffect, useState } from "react";
import Categories from "./Categories";

const Home = () => {
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
    return (
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

                <div>
                    <Categories />
                </div>
            </div>
        </div>
    );
};
export default Home;
