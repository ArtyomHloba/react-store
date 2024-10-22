import { Formik, Form, Field } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './ExpenseForm.module.css'

const ExpenseForm = ({ onAddExpense, onCancel }) => {
  return (
    <Formik
      initialValues={{
        title: '',
        amount: '',
        date: new Date()
      }}
      onSubmit={(values, { resetForm }) => {
        onAddExpense(values)
        resetForm()
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className={styles.expenseForm}>
          <div className={styles.expenseFormControl}>
            <label>Title </label>
            <Field name='title' type='text' />
          </div>
          <div className={styles.expenseFormControl}>
            <label>Amount </label>
            <Field name='amount' type='number' />
          </div>
          <div className={styles.expenseFormControl}>
            <label>Date </label>
            <DatePicker
              selected={values.date}
              onChange={date => setFieldValue('date', date)}
            />
          </div>
          <div className={styles.expenseFormActions}>
            <button type='button' onClick={onCancel}>
              Cancel
            </button>
            <button type='submit'>Add Expense</button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ExpenseForm
