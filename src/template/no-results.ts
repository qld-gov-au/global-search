import { html } from 'lit-html'

export function noResultsTemplate () {
    return html`
        <div class="alert alert-warning" role="alert">
            <h2><i class="fa fa-exclamation-triangle"></i>No results found</h2>
        </div>`
}
