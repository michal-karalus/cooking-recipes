describe('Recipes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display list of recipes', () => {
    cy.intercept(`${Cypress.env('API_URL')}/recipes/complexSearch*`, {
      fixture: 'recipesList.json',
    })
    cy.findByLabelText(/name/i).type('banana')
    cy.findByText(/search/i).click()
    cy.location('pathname').should('eq', '/recipes')
    cy.findAllByTestId('recipe').should('have.length', 3)
  })

  it('should display empty list and be able to go back to main page', () => {
    cy.intercept(`${Cypress.env('API_URL')}/recipes/complexSearch*`, {
      fixture: 'recipesEmptyList.json',
    })
    cy.findByLabelText(/name/i).type('non existing recipe')
    cy.findByText(/search/i).click()
    cy.findByTestId('recipeNotFound').should(
      'have.text',
      "We couldn't find recipes for provided criteria."
    )
    cy.findByText(/back to home/i).click()
    cy.location('pathname').should('eq', '/')
  })
})
