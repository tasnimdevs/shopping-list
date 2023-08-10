import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Category() {
    const { categoryId } = useParams();


    const [catExpense, setCatExpense] = useState([]);
    const [catIncome, setCatIncome] = useState([]);
    const categories = localStorage.getItem('categories');


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

        console.log(catIncome, catExpense);
        getCatExpenseAndIncome();
    }, [categoryId]);

    return (
        <div className="w-1/2 m-auto h-screen flex items-center">
            <div className="p-5 border w-full">
                <h1 className="text-center text-lg font-bold mb-5">Category</h1>
                <div className='flex gap-3'>
                    <div className='border p-5 grow'>
                        <h3 className='text-sm font-semibold border text-center'>Income</h3>
                        {catIncome.map((income) => (
                            <ul key={income.id} className='flex justify-between'>
                                <li>Title: {income.title}</li>
                                <li>Price: {income.price}</li>
                                <li>Completed: {income.completed}</li>
                            </ul>
                        ))}
                    </div>
                    <div className='border p-5 grow'>
                        <h3 className='text-sm font-semibold border text-center'>Expense</h3>
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
