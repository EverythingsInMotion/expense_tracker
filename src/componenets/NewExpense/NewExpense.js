import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const addNewExpenseHandler = () => {
        setShowForm(true);
    }

    const cancelFormClickHandler = () => {
        setShowForm(false)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        console.log(expenseData);

        props.onNewExpense(expenseData);
        setShowForm(false);
    }


    return (
        <div className='new-expense'>
            {showForm
                ? <ExpenseForm
                    onCancelFormClick={cancelFormClickHandler} onSaveExpenseData={saveExpenseDataHandler} />
                : <button onClick={addNewExpenseHandler}>Add New Expense
                </button>
            }
        </div>
    )

};

export default NewExpense;