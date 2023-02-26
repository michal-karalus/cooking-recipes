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

  it('should display recipe details', () => {
    cy.intercept(`${Cypress.env('API_URL')}/recipes/complexSearch*`, {
      fixture: 'recipesList.json',
    })
    cy.intercept(`${Cypress.env('API_URL')}/recipes/*/information*`, {
      fixture: 'recipeDetails.json',
    })
    cy.findByLabelText(/name/i).type('banana')
    cy.findByText(/search/i).click()
    cy.findAllByTestId('recipe')
      .first()
      .within(() => cy.findByText(/view details/i).click())
    cy.location('pathname').should('eq', '/recipes/634202')
    cy.findByRole('heading', { level: 2 }).should(
      'have.text',
      'Banana Walnut Cake'
    )
    cy.findAllByTestId('ingredient')
      .should('have.length', 10)
      .first()
      .should('have.text', '1/4 teaspoon baking powder')
    cy.findAllByTestId('step')
      .should('have.length', 2)
      .first()
      .should(
        'have.text',
        'Mix everything in the same bowl (using a wisk to make smooth)'
      )
  })
})
