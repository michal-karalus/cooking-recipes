import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { fetchRecipes } from 'api'
import { IRecipe } from 'types'
import Button from 'components/common/Button'

import styles from './Recipes.module.scss'

function Recipes() {
  const [recipes, setRecipes] = useState<Array<IRecipe>>([])
  const location = useLocation()
  const navigate = useNavigate()
  const query = location.state?.query

  useEffect(() => {
    if (!query) return navigate('/')

    fetchRecipes(query).then((response) => {
      setRecipes(response.data.results)
    })
  }, [query, navigate])

  return (
    <div className={styles.container}>
      {recipes.length > 0 && (
        <ul className={styles.items}>
          {recipes.map((recipe: IRecipe) => (
            <li className={styles.item} key={recipe.id}>
              <img
                className={styles.photo}
                src={recipe.image}
                alt={recipe.title}
              />
              <h2 className={styles.title}>{recipe.title}</h2>
              {/* TODO: link redirects to details of a recipe */}
              <Link to={'/'} className={styles.link}>
                <Button>View details</Button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Recipes
