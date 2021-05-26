import Link from 'next/link'
import styles from './index.module.scss'


const Header = (HeaderProps: {className: string}) => {
  const changeTheme = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
    } else {
      document.body.classList.add('dark')
    }
  }
  return <header id={styles[`main-nav`]}>
    <nav className={`${HeaderProps.className} m-auto`}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li onClick={changeTheme}>Theme</li>
      </ul>
    </nav>
  </header>
}

export default Header