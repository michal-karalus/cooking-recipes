import React from 'react'

import styles from './Button.module.scss'

interface Props {
  children: string
  onClick?: () => void
}

function Button({ children, onClick }: React.PropsWithChildren<Props>) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
