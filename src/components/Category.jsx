import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

export default function Category() {
    const [categories, setCategories] = useState(JSON.parse(localStorage.getItem('categories')));
    const { categoryId } = useParams();

    const [thisCategory, setThisCategory] = useState(categories && categories.find(item => item.id === categoryId));


    const [insertType, setInsertType] = useState('');
    // console.log(insertType);
    const [catExpense, setCatExpense] = useState([]);
    const [catIncome, setCatIncome] = useState([]);
    const [trTitle, setTrTitle] = useState('');
    const [trAmount, setTrAmount] = useState('');
    const inputClasses = 'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1';
    const income_expense_form = document.getElementById('income_expense_form');


    useEffect(() => {
        const getCatExpenseAndIncome = async () => {
            let catExpenseArr = [];
            let catIncomeArr = [];

            categories && categories.forEach((category) => {

                if (category.id === categoryId) {
                    catExpenseArr = category.cat_expense;
                    catIncomeArr = category.cat_income;
                }
            });
            setCatExpense(catExpenseArr);
            setCatIncome(catIncomeArr);
        };
        getCatExpenseAndIncome();

    }, [categoryId]);



    function handleInc_ExpForm(e, insertType) {
        e.preventDefault();

        // console.log(insertType);

        if (trTitle === "" || trAmount === "") return;


        const newEntry = {
            id: crypto.randomUUID(),
            title: trTitle,
            price: trAmount,
            completed: false
        };

        if (insertType === 'cat_income') {
            const newIncomeEntry = { ...newEntry };
            console.log(newIncomeEntry);
            setCatIncome([...thisCategory.cat_income, newIncomeEntry]);

            const tempCats = categories.map(category => {
                if (categoryId === category.id) {
                    return {
                        ...category,
                        cat_income: [...category.cat_income, newIncomeEntry]
                    };
                }
                return category;
            });
            setCategories(tempCats);
        } else {
            const newExpenseEntry = { ...newEntry };

            console.log(newExpenseEntry);

            setCatExpense([...thisCategory.cat_expense, newExpenseEntry]);

            const tempCats = categories.map(category => {
                if (categoryId === category.id) {
                    return {
                        ...category,
                        cat_expense: [...category.cat_expense, newExpenseEntry]
                    };
                }
                return category;
            });
            setCategories(tempCats);
        }
        // console.log(thisCategory.cat_income);
        setTrTitle("");
        setTrAmount("");
        income_expense_form.classList.add('hidden');
    }



    useEffect(() => {
        // console.log(thisCategory, categories);
        localStorage.setItem("categories", JSON.stringify(categories))
    }, [catIncome, categories]);


    income_expense_form && income_expense_form.addEventListener('click', (e) => {
        e.stopPropagation()
    })

    document.addEventListener('click', () => {
        income_expense_form && !income_expense_form.classList.contains("hidden") && income_expense_form.classList.add('hidden');
    })

    function handleClick(event, type) {
        setInsertType(type);
        income_expense_form.classList.toggle('hidden');
        // console.log(type === 'income' ? catIncome : catExpense);
        event.stopPropagation();
    }



    return (
        <div className="w-1/2 m-auto h-screen flex items-center">
            <div className="p-5 border w-full">
                <div className='flex justify-between items-center'>
                    <Link to="/categories" className='border px-3 py-1 bg-gray-100 hover:bg-gray-200'>Categories</Link>
                    <h1 className="text-center text-lg font-bold mb-5">{thisCategory.name}</h1>
                </div>
                <div className='flex gap-3 relative'>
                    <div id='income_expense_form' className='absolute bg-gray-50 w-full h-full justify-center items-center shadow-md border-2 hidden border-sky-500'>
                        <form action=""
                            className='flex gap-2 p-3 w-full' onSubmit={e => handleInc_ExpForm(e, insertType)} >
                            <input
                                value={trTitle}
                                onChange={e => setTrTitle(e.target.value)}
                                className={`${inputClasses} grow`}
                                type="text"
                                placeholder='Type your title' />
                            <input
                                value={trAmount}
                                onChange={e => setTrAmount(e.target.value)}
                                className={inputClasses} type="number" placeholder='Type your amount' />
                            <button type="submit"
                                className="px-4 py-2 font-semibold text-sm bg-sky-500 hover:bg-sky-700 text-white rounded-none shadow-sm" >
                                <span>+Add </span>
                                <span>{insertType === 'cat_income' ? 'Income' : 'Expense'}</span>
                            </button>
                        </form>
                    </div>

                    <div className='border p-5 grow'>
                        <div className='flex '>
                            <h3 className='text-sm font-semibold border text-center '>                              <button
                                onClick={(event) => { handleClick(event, 'income'); setInsertType('cat_income'); }}
                                className="p-1 font-semibold text-sm bg-green-500 hover:bg-green-700 text-white rounded-none shadow-sm" >
                                +Income
                            </button>
                            </h3>

                        </div>
                        {catIncome.map((income) => (
                            <ul key={income.id} className='flex justify-between'>
                                <li>Title: {income.title}</li>
                                <li>Price: {income.price}</li>
                                <li>Completed: {income.completed}</li>
                            </ul>
                        ))}
                    </div>
                    <div className='border p-5 grow'>
                        <div className='flex'>
                            <h3 className='text-sm font-semibold border text-center'>
                                <button
                                    onClick={(event) => { handleClick(event, 'expence'); setInsertType('cat_expense'); }}
                                    className='p-1 font-semibold text-sm bg-red-500 hover:bg-red-700 text-white rounded-none shadow-sm'>
                                    - Expense
                                </button>
                            </h3>


                        </div>
                        {catExpense.map((expense) => (
                            <ul key={expense.id} className='flex justify-between'>
                                <li>Title: {expense.title}</li>
                                <li>Price: {expense.price}</li>
                                <li>Completed: {expense.completed}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
