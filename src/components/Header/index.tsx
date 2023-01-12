import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link className={styles.logo} to="/">
          <h1 className={styles.heading}>Recipes</h1>
        </Link>
        <nav className={styles.navbar}>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
