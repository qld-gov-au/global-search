const ROOT_URL = 'http://localhost:1234'

context('Search page', () => {
  it('Filter should not be visible if scope or profile are not present in the URL', () => {
    cy.visit(`${ROOT_URL}/`)
    cy
      .get('.qg-filter-by-results')
      .should('not.exist')
    // also if profile is 'qld', the filter should not appear
    cy.visit(`${ROOT_URL}/?query=rego&num_ranks=10&tiers=off&collection=qld-gov&profile=qld`)
    cy
      .get('.qg-filter-by-results')
      .should('not.exist')
  })

  // scope is present with no profile
  it("Filter should appear if scope is present, but if its value is not 'qld.gov.au'", () => {
    cy.visit(`${ROOT_URL}/?query=rego&num_ranks=10&tiers=off&collection=qld-gov&profile=qld&scope=tmr.qld.gov.au&collection=qld-gov`)
    cy
      .get('.qg-filter-by-results')
      .should('be.visible')
  })

  it('Select a radio button to determine the number of results', () => {
    cy.get('input[name=filterBy][value=\'qld\']').first().check()
    cy.get('.qg-btn__filter').click()
    cy.get('.qg-search-results__results-total').contains('28,696')
    cy.get('input[name=filterBy][value=\'custom\']').first().check()
    cy.get('.qg-btn__filter').click()
    cy.get('.qg-search-results__results-total').contains('1,426')
  })

  // profile is present with no scope
  it('Filter should be visible if profile is present with no scope', () => {
    cy.visit(`${ROOT_URL}/?query=rego&num_ranks=10&tiers=off&collection=qld-gov&profile=forgov&scope=&collection=qld-gov&filter=true`)
    cy
      .get('.qg-filter-by-results')
      .should('be.visible')
  })

  it('Check results by changing filters', () => {
    cy.get('input[name=filterBy][value=\'qld\']').first().check()
    cy.get('.qg-btn__filter').click()
    var getNumber = cy.get('.qg-search-results__results-total')
    cy.wrap(getNumber).should('be.gt', 4999.99);
    cy.get('input[name=filterBy][value=\'custom\']').first().check()
    cy.get('.qg-btn__filter').click()
    cy.get('.qg-search-results__results-total').contains('1,444')
  })
})
