import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import Button from 'components/common/Button'

import styles from './Search.module.scss'

type FormValues = {
  recipeName: string
}

function Search() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    navigate('/recipes', { state: { recipeName: formData.recipeName } })
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.heading}>What would you eat?</h2>
        <input
          type="text"
          className={styles.input}
          {...register('recipeName', { required: 'This field is required' })}
        />
        {errors.recipeName && (
          <p className={styles.error} data-testid="error">
            {errors.recipeName.message}
          </p>
        )}
        <Button onClick={handleSubmit(onSubmit)}>Search</Button>
      </form>
    </div>
  )
}

export default Search
