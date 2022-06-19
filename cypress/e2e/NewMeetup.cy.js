//NewMeetup E2E test
describe('<NewMeetup />', () => {
  beforeEach(() => {
    //Navigate to the `Add New Meetup` page
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid=list-of-meetups]').find('li').should('have.length', 3)
    cy.get('[data-testid=add-new-meetup-link]').click({force: true})
  })

  it('adds a new meetup', () => {
    //Displays the title
    cy.get('[data-testid=add-new-meetup-title]').should('have.text', 'Add New Meetup')

    //Add a Title
    cy.get('[data-testid=title]').type('Meet Batman')

    //Add an image url
    cy.get('[data-testid=image]').type('https://www.creativosonline.org/wp-content/uploads/2022/03/logo-batman-2144613.webp')

    //Add an address
    cy.get('[data-testid=address]').type('Gotham')

    //Add a description
    cy.get('[data-testid=description]').type('I\'m Batman')

    //Submit the form
    cy.get('[data-testid=add-meetup-button]').click()

    //Navigate to `All Meetups` view
    cy.get('[data-testid=all-meetups-link]').click({force: true})

    //Check list of meetups should be 4 instead of 3
    cy.get('[data-testid=list-of-meetups]').find('li').should('have.length', 4)

  })
})
