import { html } from 'lit-html'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'

export function errorResultsTemplate (err: any, endpoint: string) {
  const errorMessage = err?.message || String(err)
  const hint = errorMessage ? `Reference details: <ul><li>${errorMessage}</li><li>Endpoint: ${endpoint}</li></ul>` : ''
  const message = `<div class="qld-search-results__error-hint"><p>Sorry, we encountered an error while loading the search results. Please try again later.</p><p>${hint}</p></div>`
  
  return html`${unsafeHTML(message)}`
}
