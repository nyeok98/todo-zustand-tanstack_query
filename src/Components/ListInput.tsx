import { FC } from 'react'
import styles from './ListInput.module.css'

interface ListInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
}

const ListInput: FC<ListInputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form className={styles.root} onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add a new todo..."
        className={styles.inputBox}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default ListInput
