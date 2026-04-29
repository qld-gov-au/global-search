import { DEFAULT_SEARCH_COLLECTION, DEFAULT_SEARCH_PROFILE } from '../../src/utils/constants'

const wt = 800;
const searchTerm = 'rego';
const searchTerms = {
  default: 'rego',
  featured: 'registration',
  related: 'water',
  spelltext: 'regiostration',
  noresults: 'abcabcabcabcabc'
}
const domSelectors = {
  searchInput: '.qld-search__input',
  searchButton: '.qld-search__submit',
  searchResultsTotal: '.qld-search-results__results-total',
  searchResultsTitle: '.qld-search-results__summary',
  filterByResults: '.qld-filter-by-results',
  applyFilterButton: '.qld-btn__search-filter'
}
const domSelectorsPagination = {
  container: '.pagination',
  firstPageButton: '.page-item.first-page',
  secondPageButton: '.page-item.second-page',
  lastPageButton: '.page-item.last-page',
  activePage: '.page-item.active',
  previousPageButton: '.page-item.previous',
  nextPageButton: '.page-item.next'
}

function formatString(text) {
  return text.replace(/,/g, '');
}

// Generic search results tests
context('Search Results', () => {
  it('No keywords entered', () => {
    cy.visit(`/`)
    cy
      .get('.qld-search-hint')
      .should('be.visible')
  })

  it('Search results are displayed when keywords are entered', () => {
    cy.visit(`/?query=${searchTerms?.default}&collection=${DEFAULT_SEARCH_COLLECTION}&profile=${DEFAULT_SEARCH_PROFILE}`)
    cy
      .get(domSelectors?.searchResultsTotal)
      .invoke('text').then(formatString).then(parseInt).should('be.gt', 1)
    cy
      .get(domSelectors?.searchResultsTitle)
      .should('be.visible')
      .and('contain', searchTerm)
  })

  it('Featured results are displayed when keywords are entered', () => {
    cy.visit(`/?query=${searchTerms?.featured}&collection=${DEFAULT_SEARCH_COLLECTION}&profile=${DEFAULT_SEARCH_PROFILE}`)
    cy
      .get('#qld-featured-results')
      .should('be.visible')
    cy.get('#qld-featured-results article.card')
      .should('have.length.greaterThan', 0)
  })

  it('Related search results are displayed when keywords are entered', () => {
    cy.visit(`/?query=${searchTerms?.related}&collection=${DEFAULT_SEARCH_COLLECTION}&profile=${DEFAULT_SEARCH_PROFILE}`)
    cy
      .get('#related-search__tags')
      .should('be.visible')
    cy.get('#related-search__tags li')
      .should('have.length.greaterThan', 0)
  })

  it('Spelling suggestion is displayed when misspelled keywords are entered', () => {
    cy.visit(`/?query=${searchTerms?.spelltext}&collection=${DEFAULT_SEARCH_COLLECTION}&profile=${DEFAULT_SEARCH_PROFILE}`)
    cy
      .get('.qld-search-results__spelltext-hint')
      .should('be.visible')
      .and('contain', 'Did you mean')
  })

  it('No results message is displayed when no matching keywords are entered', () => {
    cy.visit(`/?query=${searchTerms?.noresults}&collection=${DEFAULT_SEARCH_COLLECTION}&profile=${DEFAULT_SEARCH_PROFILE}`)
    cy
      .get('.qld-search-results__error-hint')
      .should('be.visible')
      .and('contain', `No search results were found for ${searchTerms?.noresults}`)
  })
})

// Pagination
context('Pagination', () => {
  it('Pagination is displayed when there are multiple pages of results', () => {
    cy.visit(`/?query=${searchTerms?.default}&collection=${DEFAULT_SEARCH_COLLECTION}&profile=${DEFAULT_SEARCH_PROFILE}`)
    cy
      .get(domSelectorsPagination?.container)
      .should('be.visible')
    cy.get(domSelectorsPagination?.firstPageButton)
      .should('be.visible')
    cy.get(domSelectorsPagination?.lastPageButton)
      .should('be.visible')
    cy.get(domSelectorsPagination?.nextPageButton)
      .should('be.visible')
  })

  it('Clicking on pagination buttons updates the search results and pagination item display', () => {
    cy.visit(`/?query=${searchTerms?.default}&collection=${DEFAULT_SEARCH_COLLECTION}&profile=${DEFAULT_SEARCH_PROFILE}`)
    cy.wait(wt)
    cy.get(domSelectorsPagination?.secondPageButton).click()
    cy.wait(wt)
    cy.get(domSelectorsPagination?.activePage)
      .should('contain', '2')

    cy.get(domSelectorsPagination?.nextPageButton).click()
    cy.wait(wt)
    cy.get(domSelectorsPagination?.activePage)
      .should('contain', '3')
    cy.get(domSelectorsPagination?.previousPageButton)
      .should('be.visible')

    cy.get(domSelectorsPagination?.previousPageButton).click()
    cy.wait(wt)
    cy.get(domSelectorsPagination?.activePage)
      .should('contain', '2')
  })
})

// Filter Results (Funnelback scope)
context('Filter Results (Funnelback scope)', () => {
  it('Filter should not be visible if scope or profile are not present in the URL', () => {
    cy.visit(`/`)
    cy
      .get('.qld-filter-by-results')
      .should('not.exist')
    // also if profile is 'qld', the filter should not appear
    cy.visit(`/?query=${searchTerms?.default}&collection=${DEFAULT_SEARCH_COLLECTION}&profile=${DEFAULT_SEARCH_PROFILE}`)
    cy
      .get('.qld-filter-by-results')
      .should('not.exist')
  })

  // scope is present with no profile
  it("Filter should appear if scope is present, but if its value is not 'qld.gov.au'", () => {
    cy.visit(`/?query=${searchTerms?.default}&collection=${DEFAULT_SEARCH_COLLECTION}&profile=${DEFAULT_SEARCH_PROFILE}&scope=tmr.qld.gov.au`)
    cy
      .get('.qld-filter-by-results')
      .should('be.visible')
  })


  it('Select filter radio button to determine the number of results', () => {
    cy.visit(`/?query=${searchTerms?.default}&collection=${DEFAULT_SEARCH_COLLECTION}&profile=${DEFAULT_SEARCH_PROFILE}&scope=tmr.qld.gov.au`)
    cy.wait(wt)
    cy.get('.qld-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 1426)
    cy.get("label[for='qldSearchScope']").click()
    cy.get('.qld-btn__search-filter').click()
    cy.wait(wt)
    cy.get('.qld-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 20000)
    cy.wait(wt)
    cy.get("label[for='customOption']").click()
    cy.get('.qld-btn__search-filter').click()
    cy.wait(wt)
    cy.get('.qld-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 1426)
  })

  // profile is present with no scope
  it('Filter should be visible if profile is present with no scope', () => {
    cy.visit(`/?query=${searchTerms?.default}&collection=${DEFAULT_SEARCH_COLLECTION}&profile=forgov&scope=&filter=true`)
    cy
      .get('.qld-filter-by-results')
      .should('be.visible')
  })

  it('Check results by changing filters - on profile present with no scope', () => {
    cy.visit(`/?query=${searchTerms?.default}&collection=${DEFAULT_SEARCH_COLLECTION}&profile=forgov&scope=&filter=true`)
    cy.get('.qld-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 700)
    cy.get("label[for='qldSearchScope']").click()
    cy.get('.qld-btn__search-filter').click()
    cy.wait(wt)
    cy.get('.qld-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 20000)
    cy.get("label[for='customOption']").click()
    cy.get('.qld-btn__search-filter').click()
    cy.wait(wt)
    cy.get('.qld-search-results__results-total').invoke('text').then(formatString).then(parseInt).should('be.gt', 700)
  })
})
