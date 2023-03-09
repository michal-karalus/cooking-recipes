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
  analyzedInstructions: Array<Steps>
  extendedIngredients: Array<Ingredient>
}

export type Step = {
  step: string
  number: number
}

export type Steps = {
  steps: Array<Step>
}

export type Ingredient = {
  original: string
}
