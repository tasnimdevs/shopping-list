import React, { useEffect } from 'react'

export function Inc_ExpList({ handleClick,
    thisCategory,
    setThisCategory,
    getTotalBalance
}) {
    const totalIncome = thisCategory.cat_income.map(income => income.price).reduce((sum, income) => sum + parseInt(income), 0);
    
    const totalExpense = thisCategory.cat_expense.map(expense => expense.price).reduce((sum, expense) => sum + parseInt(expense), 0);

    const totalBalance = totalIncome - totalExpense;
    

    useEffect(() => {
        getTotalBalance(totalBalance);
        console.log(totalBalance);
    }, [totalBalance])

    return (
        <div className='flex w-full'>
            <div className='border p-5 grow'>
                <div className='flex '>
                    <h3 className='text-sm font-semibold border text-center'>
                        <button
                            onClick={(event) => { handleClick(event); }}
                            className="p-1 font-semibold text-sm bg-green-500 hover:bg-green-700 text-white rounded-none shadow-sm" >
                            +Income
                        </button>
                    </h3>
                </div>
              {/*   <table className='w-full'>
                    <thead className='border-b'>
                        <tr>
                            <th className='text-left p-2'>Title</th>
                            <th className='text-right p-2'>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {thisCategory.cat_income.map((income) => (
                            <tr key={income.id} >
                                <td className='p-2'> {income.title}</td>
                                <td className='p-2 text-right'> {income.price}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className='p-2 text-left'>Total</th>
                            <th className='p-2 text-right'>{totalIncome}</th>
                        </tr>
                    </tfoot>
                </table> */}
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
                    <thead className='border-b'>
                        <tr>
                            <th className='text-left p-2'>Title</th>
                            <th className='text-right p-2'>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {thisCategory.cat_expense.map((expense) => (
                            <tr key={expense.id} >
                                <td className='p-2'> {expense.title}</td>
                                <td className='p-2 text-right'> {expense.price}</td>
                            </tr>
                        ))}
                    </tbody>
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