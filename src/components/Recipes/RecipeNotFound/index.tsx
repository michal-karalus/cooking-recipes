import { Link } from 'react-router-dom'

import styles from './RecipeNotFound.module.scss'

function RecipeNotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        We couldn't find recipes for provided criteria.
      </p>
      <Link to="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  )
}

export default RecipeNotFound
