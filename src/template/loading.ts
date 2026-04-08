import { html } from 'lit-html'

export function loadingTemplate (message : string) {
    
  return html`<div class="qld-spinner align-center qld-search-results__spinner" role="status" aria-live="polite" aria-label="${message}">
                    <div class="spinner-border"></div>
                    <span class="qld-spinner-label">${message}...</span>
                </div>`
}
