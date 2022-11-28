import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Search.module.scss'

function Search() {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const navigate = useNavigate()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    navigate('/recipes', { state: { query: inputRef.current.value } })
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input ref={inputRef} type="text" className={styles.input} />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  )
}

export default Search
