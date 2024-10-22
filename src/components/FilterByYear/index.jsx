import styles from './FilterByYear.module.css'

const FilterByYear = ({ selectedYear, onYearChange, onMonthChange }) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  return (
    <div className={styles.filterByYear}>
      <div className={styles.filterByYearControl}>
        <label>Filter by year</label>
        <select
          value={selectedYear}
          onChange={e => onYearChange(e.target.value)}
        >
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          {/* Можно добавить больше лет */}
        </select>
      </div>
      <div className={styles.filterByYearMonths}>
        {months.map((month, index) => (
          <button key={index} onClick={() => onMonthChange(index + 1)}>
            {month}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterByYear
