import { useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import styles from './SideMenu.module.scss'

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((current) => !current)
  }

  return (
    <>
      <button
        className={classnames(
          styles.hamburger,
          isOpen ? styles.hamburgerActive : ''
        )}
        onClick={toggleMenu}
      >
        <div className={styles.hamburgerInner}>
          <span className={styles.hamburgerBar}></span>
        </div>
      </button>
      <nav className={classnames(styles.menu, isOpen ? styles.menuActive : '')}>
        <div className={styles.menuWrapper}>
          <Link className={styles.link} to="/" onClick={toggleMenu}>
            Home
          </Link>
        </div>
      </nav>
      <div
        className={classnames(
          styles.backdrop,
          isOpen ? styles.backdropActive : ''
        )}
      ></div>
    </>
  )
}

export default SideMenu
