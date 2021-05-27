import {Link} from 'src/components'
import styles from './header.module.scss'

interface IProps {
  className?: string
}

const Header = ({className = ''}: IProps) => {
  const changeTheme = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
  }
  return <header className="text-base text-white select-none" id={styles.header}>
    <nav className={`${className} m-auto`}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li onClick={changeTheme}>Theme</li>
      </ul>
    </nav>
  </header>
}

export default Header