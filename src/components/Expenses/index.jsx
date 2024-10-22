import React from 'react'
import ExpenseItem from '../ExpenseItem/index.jsx'
import styles from './Expenses.module.css'
const Expenses = ({ expenses }) => {
  return (
    <div className={styles.expenses}>
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  )
}

export default Expenses
