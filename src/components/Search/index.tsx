import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'components/common/Button'

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
        <h2 className={styles.heading}>What would you eat?</h2>
        <input ref={inputRef} type="text" className={styles.input} />
        <Button>Search</Button>
      </form>
    </div>
  )
}

export default Search
