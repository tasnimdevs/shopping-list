import React, { useState } from 'react'

export function Inc_ExpList({ handleClick,
    thisCategory,
    setThisCategory,


}) {


    return (
        <div className='flex '>
            <div className='border p-5 grow'>
                <div className='flex '>
                    <h3 className='text-sm font-semibold border text-center'>
                        <button
                            onClick={(event) => { handleClick(event, 'cat_income'); }}
                            className="p-1 font-semibold text-sm bg-green-500 hover:bg-green-700 text-white rounded-none shadow-sm" >
                            +Income
                        </button>
                    </h3>

                </div>
                {thisCategory.cat_income.map((income) => (
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
                            onClick={(event) => { handleClick(event, 'cat_expense'); }}
                            className='p-1 font-semibold text-sm bg-red-500 hover:bg-red-700 text-white rounded-none shadow-sm'>
                            - Expense
                        </button>
                    </h3>
                </div>

                {thisCategory.cat_expense.map((expense) => (
                    <ul key={expense.id} className='flex justify-between'>
                        <li>Title: {expense.title}</li>
                        <li>Price: {expense.price}</li>
                        <li>Completed: {expense.completed}</li>
                    </ul>
                ))}
            </div>
        </div>
    )
};