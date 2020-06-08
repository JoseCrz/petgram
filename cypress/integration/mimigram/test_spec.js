/* global describe, it, cy */

describe('Mimigram', () => {
  it('App works', () => {
    cy.visit('/')
  })

  it('Navigate to a category & have picture', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Navbar should navigate to /', () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('Unregistered user should see login forms', () => {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
