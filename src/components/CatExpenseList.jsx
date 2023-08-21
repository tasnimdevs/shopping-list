import React from 'react'

function CatExpenseList( { catExpense }) {
    return (
        <>
            <thead className='border-b'>
                <tr>
                    <th className='text-left p-2'>Title</th>
                    <th className='text-right p-2'>Amount</th>
                </tr>
            </thead>
            <tbody>
                {catExpense.map((expense) => (
                    <tr key={expense.id} >
                        <td className='p-2'> {expense.title}</td>
                        <td className='p-2 text-right'> {expense.price}</td>
                    </tr>
                ))}
            </tbody>
        </>
    )
}

export default CatExpenseList