import { FC } from 'react'
import styles from './List.module.css'

interface ListProps {
  todos: string[]
  onDelete: (index: number) => void
}

const List: FC<ListProps> = ({ todos, onDelete }) => {
  return (
    <ul className={styles.root}>
      {todos.map((todo, index) => (
        <li key={index} className={styles.list}>
          {todo}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default List
