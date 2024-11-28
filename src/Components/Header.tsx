import { FC } from 'react'

interface HeaderProps {
  title?: string
}

const Header: FC<HeaderProps> = ({ title = 'Todo List' }) => {
  return (
    <header>
      <h1 style={
        {
          textAlign: 'center',
          fontSize: '4rem',
          fontWeight: 'bold',
          color: 'black',
          margin: '3rem 0'
        }
      }>{title}</h1>
    </header>
  )
}

export default Header
