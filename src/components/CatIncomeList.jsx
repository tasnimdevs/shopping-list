import React from 'react'


export function CatIncomeList({ catIncome }) {
    console.log(catIncome);
    return (

        <>
            <thead className='border-b'>
                <tr>
                    <th className='text-left p-2'>Title</th>
                    <th className='text-right p-2'>Amount</th>
                </tr>
            </thead>
            <tbody>
                {catIncome.map((income) => (
                    <tr key={income.id} >
                        <td className='p-2'> {income.title}</td>
                        <td className='p-2 text-right'> {income.price}</td>
                    </tr>
                ))}
            </tbody>
        </>

    )
}