import './Expenses.css'

import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';




function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState('0');


    const onSelectYearHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.expenses.filter(ex =>
        selectedYear === '0'
            ? props.expenses
            : ex.date.getFullYear() === +selectedYear)


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    defaultYear={selectedYear}
                    onSelectYear={onSelectYearHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;