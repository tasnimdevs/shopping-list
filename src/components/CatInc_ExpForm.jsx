import React from 'react'

export function CatInc_ExpForm({  insertType,
    handleInc_ExpForm,
    trTitle,
    setTrTitle,
    trAmount,
    setTrAmount}) {

    const inputClasses = 'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1';

    return(
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
            className={inputClasses}
             type="number"
              placeholder='Type your amount' />

        <button type="submit"
            className="px-4 py-2 font-semibold text-sm bg-sky-500 hover:bg-sky-700 text-white rounded-none shadow-sm" >
            <span>+Add </span>
            <span>{insertType === 'cat_income' ? 'Income' : 'Expense'}</span>
        </button>
    </form>
    
    )
}
export default CatInc_ExpForm;