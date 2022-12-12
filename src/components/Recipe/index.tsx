import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchRecipe } from 'api'

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

  useEffect(() => {
    fetchRecipe(id!).then((response) => {
      setRecipe(response.data)
    })
  }, [id])

  return (
    <article>
      {recipe && (
        <div className="container">
          <h2 className={styles.title}>{recipe.title}</h2>
          <img className={styles.photo} src={recipe.image} alt="" />
          <div className="row">
            <div className={styles.ingredients}>
              <h3>Ingredients</h3>
              <ul>
                {recipe.extendedIngredients.map((item: any) => {
                  return <li key={item.id}>{item.original}</li>
                })}
              </ul>
            </div>
            <div className={styles.steps}>
              <h3>Steps</h3>
              <ol>
                {recipe.analyzedInstructions[0].steps.map((step: any) => {
                  return <li key={step.number}>{step.step}</li>
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
