import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { CatInc_ExpForm } from './CatInc_ExpForm';
import { Inc_ExpList } from './Inc_ExpList';

export default function cat() {
    const [categories, setCategories] = useState(JSON.parse(localStorage.getItem('categories')));
    const { categoryId } = useParams();
    const [thisCategory, setThisCategory] = useState(categories && categories.find(item => item.id === categoryId));
    const [trTitle, setTrTitle] = useState('');
    const [trAmount, setTrAmount] = useState('');
    const [balance, setBalance] = useState('');
    const [insertType, setInsertType] = useState('');
    const incomeExpenseForm = document.getElementById('incomeExpenseForm');

    /* 
        Remaining issues:
        1. Form opening after double click 
    */




    function handleClick(event, type) {

        incomeExpenseForm && incomeExpenseForm.classList.toggle('hidden');
        setInsertType(type);
        event.stopPropagation();
    }

    incomeExpenseForm && incomeExpenseForm.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    document.addEventListener('click', () => {
        incomeExpenseForm && !incomeExpenseForm.classList.contains("hidden") && incomeExpenseForm.classList.add('hidden');
    })


    function handleInc_ExpForm(e, insertType) {

        e.preventDefault();
        if (trTitle === "" || trAmount === "") return;

        const newEntry = {
            id: crypto.randomUUID(),
            title: trTitle,
            price: trAmount,
            completed: false
        };

        setTrTitle("");
        setTrAmount("");

        thisCategory[insertType] = [...thisCategory[insertType], newEntry];
        localStorage.setItem("categories", JSON.stringify(categories));

        incomeExpenseForm.classList.add('hidden');
    }

    function handleBalanceUpdate(newValue) {
        setBalance(newValue);
    }

    return (
        <div className="w-4/5 m-auto h-screen flex items-center">
            <div className="p-5 border w-full">
                <div className='flex justify-between items-center'>
                    <Link to="/categories" className='border px-3 py-1 bg-gray-100 hover:bg-gray-200'>Categories</Link>
                    <h3>Total Balance: {balance}</h3>
                    <h1 className="text-center text-lg font-bold mb-5">{thisCategory.name}</h1>
                </div>
                <div className='flex gap-3 relative'>
                    <div id='incomeExpenseForm' className='absolute bg-gray-50 w-full h-full 
                        justify-center items-center shadow-md border-2 hidden border-sky-500'>

                        <CatInc_ExpForm
                            insertType={insertType}
                            setInsertType={setInsertType}
                            handleInc_ExpForm={handleInc_ExpForm}
                            trTitle={trTitle}
                            setTrTitle={setTrTitle}
                            trAmount={trAmount}
                            setTrAmount={setTrAmount}
                        />
                    </div>

                    <Inc_ExpList
                        getTotalBalance={handleBalanceUpdate}
                        handleClick={handleClick}
                        thisCategory={thisCategory}
                        setThisCategory={setThisCategory}
                    />
                </div>
            </div>
        </div>
    );
}