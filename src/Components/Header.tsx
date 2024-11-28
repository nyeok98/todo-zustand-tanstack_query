import { FC } from 'react'

interface HeaderProps {
  title?: string
}

const Header: FC<HeaderProps> = ({ title = 'Todo List' }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
