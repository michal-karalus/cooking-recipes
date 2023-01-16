export type Recipe = {
  id: string
  title: string
  image: string
  imageType: string
}

export type RecipeDetails = {
  id: string
  title: string
  image: string
  analyzedInstructions: any
  extendedIngredients: Array<Ingredient>
}

export type Step = {
  step: string
  number: number
}

export type Ingredient = {
  original: string
}
