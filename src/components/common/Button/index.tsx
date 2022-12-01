import React from 'react'

import styles from './Button.module.scss'

interface Props {
  children: string
}

function Button({ children }: React.PropsWithChildren<Props>) {
  return <button className={styles.button}>{children}</button>
}

export default Button
