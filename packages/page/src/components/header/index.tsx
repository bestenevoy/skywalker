import Link from 'next/link'
import styles from  './index.module.scss';
const Header = (HeaderProps:{className:string}) => {
  const changeTheme = () => {
    if(document.body.classList.contains('dark')){
      document.body.classList.remove('dark');
    }else{
      document.body.classList.add('dark')
    }
  }
  return <nav id={styles[`main-nav`]}>
    <ul className={HeaderProps.className}>
      <li><Link href="/">Home</Link></li>
      <li onClick={changeTheme}>切换主题</li>
    </ul>
  </nav>
}

export default Header