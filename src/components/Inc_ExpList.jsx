import React, { useEffect } from 'react'
import { CatIncomeList, } from './CatIncomeList';
import CatExpenseList from './CatExpenseList';

export function Inc_ExpList({ handleClick,
    thisCategory,
    setThisCategory,
    getTotalBalance
}) {

    console.log(thisCategory);

    const totalIncome = thisCategory.cat_income.map(income => income.price).reduce((sum, income) => sum + parseInt(income), 0);

    const totalExpense = thisCategory.cat_expense.map(expense => expense.price).reduce((sum, expense) => sum + parseInt(expense), 0);

    const totalBalance = totalIncome - totalExpense;


    useEffect(() => {
        getTotalBalance(totalBalance);
        // console.log(totalBalance);
    }, [totalBalance])
    return (
        <div className='flex w-full'>
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
                <table className='w-full'>
                    <CatIncomeList
                        catIncome={thisCategory.cat_income}
                    />
                    <tfoot>
                        <tr>
                            <th className='p-2 text-left'>Total</th>
                            <th className='p-2 text-right'>{totalIncome}</th>
                        </tr>
                    </tfoot>
                </table>
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
                <table className='w-full'>
                    <CatExpenseList
                        catExpense={thisCategory.cat_expense}
                    />
                    <tfoot>
                        <tr>
                            <th className='p-2 text-left'>Total</th>
                            <th className='p-2 text-right'>{totalExpense}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
};