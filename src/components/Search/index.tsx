import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import Button from 'components/common/Button'

import styles from './Search.module.scss'

type FormValues = {
  query: string
}

function Search() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    navigate('/recipes', { state: { query: data.query } })
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.heading}>What would you eat?</h2>
        <input
          type="text"
          className={styles.input}
          {...register('query', { required: 'This field is required' })}
        />
        {errors.query && <p className={styles.error}>{errors.query.message}</p>}
        <Button>Search</Button>
      </form>
    </div>
  )
}

export default Search
