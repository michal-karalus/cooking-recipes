import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createPortal } from 'react-dom'

import { fetchRecipe } from 'api'
import Loader from 'components/common/Loader'

import styles from './Recipe.module.scss'

interface IRecipeDetails {
  id: string
  title: string
  image: string
  analyzedInstructions: any
  extendedIngredients: any
}

function Recipe() {
  const { id } = useParams()

  const [recipe, setRecipe] = useState<IRecipeDetails>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchRecipe(id!).then((response) => {
      setRecipe(response.data)
      setIsLoading(false)
    })
  }, [id])

  return (
    <article>
      {isLoading && createPortal(<Loader />, document.body)}
      {recipe && (
        <div className={styles.container}>
          <h2 className={styles.title}>{recipe.title}</h2>
          <img className={styles.photo} src={recipe.image} alt="" />
          <div className={styles.details}>
            <div className={styles.ingredients}>
              <h3 className={styles.ingredients__title}>Ingredients</h3>
              <ul className={styles.ingredients__list}>
                {recipe.extendedIngredients.map((item: any) => {
                  return (
                    <li
                      className={styles.ingredients__item}
                      key={item.original}
                    >
                      {item.original}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={styles.steps}>
              <h3 className={styles.steps__title}>Steps</h3>
              <ol className={styles.steps__list}>
                {recipe.analyzedInstructions[0].steps.map((step: any) => {
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
    </article>
  )
}

export default Recipe
