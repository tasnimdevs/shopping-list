import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Category() {
    const { categoryId } = useParams();


    const [insertType, setInsertType] = useState('');
    const [catExpense, setCatExpense] = useState([]);
    const [catIncome, setCatIncome] = useState([]);
    const categories = localStorage.getItem('categories');
    const inputClasses = 'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1';

    useEffect(() => {
        const getCatExpenseAndIncome = async () => {
            let catExpenseArr = [];
            let catIncomeArr = [];

            JSON.parse(categories).forEach((category) => {

                if (category.id === categoryId) {
                    catExpenseArr = category.cat_expense;
                    catIncomeArr = category.cat_income;
                }
            });

            setCatExpense(catExpenseArr);
            setCatIncome(catIncomeArr);
        };

        console.log(catExpense, catIncome);
        getCatExpenseAndIncome();
    }, [categoryId]);

    useEffect(() => {
        console.log(insertType);
    }, [insertType]);

    function handleClick(type) {
        let income_expense_form = document.getElementById('income_expense_form');
        income_expense_form.classList.toggle('hidden')
        console.log(income_expense_form);
        setInsertType(type)
    }


    return (
        <div className="w-1/2 m-auto h-screen flex items-center">
            <div className="p-5 border w-full">
                <h1 className="text-center text-lg font-bold mb-5">Category</h1>
                <div className='flex gap-3 relative'>
                    <div id='income_expense_form' className='absolute bg-gray-50 w-full h-full flex justify-center items-center shadow-md border-2 hidden border-sky-500'>
                        <form action="" className='flex gap-2 p-3 w-5/6'>
                            <input className={inputClasses + ` grow`} type="text" placeholder='Type your title' />
                            <input className={inputClasses} type="number" placeholder='Type your amount' />
                            <button className='px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm'>+Add <span>Income</span></button>
                        </form>
                    </div>
                    <div className='border p-5 grow'>
                        <div className='flex '>
                            <h3 className='text-sm font-semibold border text-center '>Income  </h3>
                            <button onClick={() => handleClick('income')}>+</button>

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
                            <h3 className='text-sm font-semibold border text-center'>Expense  </h3>
                            <button onClick={() => handleClick('expence')}>+</button>

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
