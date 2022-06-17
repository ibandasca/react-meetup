//AllMeetupPage E2E test
describe('<AllMeetupPage />', () => {
  beforeEach(() => {
    //Navigate to localhost:3000
    cy.visit('http://localhost:3000/')
  })

  it('displays three meetups items by default', () => {
    //Find title
    cy.get('[data-testid=all-meetups-title]').should('have.text', 'All Meetups')

    //Displays three meetup items by default
    cy.get('[data-testid=list-of-meetups]').find('li').should('have.length', 3)
  })

  it('add one meetup to favourite', () => {
    //Badge should have value 0 by default
    cy.get('[data-testid=badge-value]').should('have.text', 0)

    //Add the firs meetup to favorite
    cy.get('[data-testid=add-to-favorites-button]').first().click()

    //Badge should have value 1 
    cy.get('[data-testid=badge-value]').should('have.text', 1)
  })
})
