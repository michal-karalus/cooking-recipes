import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { fetchRecipes } from 'api'
import { IRecipe } from 'types'

import styles from './Recipes.module.scss'

function Recipes() {
  const [recipes, setRecipes] = useState([])
  const location = useLocation()
  const query = location.state.query

  useEffect(() => {
    fetchRecipes(query).then((response) => {
      setRecipes(response.data.results)
    })
  }, [query])

  return (
    <div className={styles.container}>
      {recipes.length > 0 && (
        <ul className={styles.items}>
          {recipes.map((recipe: IRecipe) => (
            <li className={styles.item} key={recipe.id}>
              <img
                className={styles.item__photo}
                src={recipe.image}
                alt={recipe.title}
              />
              <h2 className={styles.item__title}>{recipe.title}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Recipes
