import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import { fetchRecipe } from 'api'
import Loader from 'components/common/Loader'
import { Ingredient, Step } from 'types'

import styles from './Recipe.module.scss'

function Recipe() {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery(['recipe', id], () =>
    fetchRecipe(id).then((response) => response.data)
  )

  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <div className={styles.container}>
          <h2 className={styles.title}>{data.title}</h2>
          <img className={styles.photo} src={data.image} alt={data.title} />
          <div className={styles.details}>
            <div className={styles.ingredients}>
              <h3 className={styles.ingredients__title}>Ingredients</h3>
              <ul className={styles.ingredients__list}>
                {data.extendedIngredients.map((ingredient: Ingredient) => {
                  return (
                    <li
                      className={styles.ingredients__item}
                      key={ingredient.original}
                    >
                      {ingredient.original}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={styles.steps}>
              <h3 className={styles.steps__title}>Steps</h3>
              <ol className={styles.steps__list}>
                {data.analyzedInstructions[0].steps.map((step: Step) => {
                  return (
                    <li className={styles.steps__item} key={step.number}>
                      {step.step}
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Recipe
