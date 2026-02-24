import { search_collection } from '../../src/utils/constants'

const wt = 800;
function formatString(text) {
  return text.replace(/,/g, '');
}

context('Search page', () => {
  it('Filter should not be visible if scope or profile are not present in the URL', () => {
    cy.visit(`/`)
    cy
      .get('.qg-filter-by-results')
      .should('not.exist')
    // also if profile is 'qld', the filter should not appear
    cy.visit(`/?query=rego&collection=${search_collection}&profile=qld`)
    cy
      .get('.qg-filter-by-results')
      .should('not.exist')
  })

  // scope is present with no profile
  it("Filter should appear if scope is present, but if its value is not 'qld.gov.au'", () => {
    cy.visit(`/?query=rego&collection=${search_collection}&profile=qld&scope=tmr.qld.gov.au&collection=${search_collection}`)
    cy
      .get('.qg-filter-by-results')
      .should('be.visible')
  })


  it('Select filter radio button to determine the number of results', () => {
    cy.visit(`/?query=rego&collection=${search_collection}&profile=qld&scope=tmr.qld.gov.au&collection=${search_collection}`)
    cy.wait(wt)
    cy.get('.qg-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 1426)
    cy.get("label[for='qld']").click()
    cy.get('.qg-btn__filter').click()
    cy.wait(wt)
    cy.get('.qg-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 20000)
    cy.wait(wt)
    cy.get("label[for='customOption']").click()
    cy.get('.qg-btn__filter').click()
    cy.wait(wt)
    cy.get('.qg-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 1426)
  })

  // profile is present with no scope
  it('Filter should be visible if profile is present with no scope', () => {
    cy.visit(`/?query=rego&collection=${search_collection}&profile=forgov&scope=&collection=${search_collection}&filter=true`)
    cy
      .get('.qg-filter-by-results')
      .should('be.visible')
  })

  it('Check results by changing filters - on profile present with no scope', () => {
    cy.visit(`/?query=rego&collection=${search_collection}&profile=forgov&scope=&collection=${search_collection}&filter=true`)
    cy.get('.qg-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 700)
    cy.get("label[for='qld']").click()
    cy.get('.qg-btn__filter').click()
    cy.wait(wt)
    cy.get('.qg-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 20000)
    cy.get("label[for='customOption']").click()
    cy.get('.qg-btn__filter').click()
    cy.wait(wt)
    cy.get('.qg-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 700)
  })
})
