import { html } from 'lit-html'
import { SEARCH_BASE_URL } from '../utils/constants'

export function featuredResultsTemplate (exhibits: any[]) {
  return html`
    <h2 class="search-results-summary mb-4 mt-0">Featured results</h2>
    <div class="card-group mb-5">
    ${exhibits.map((item, index) => {
        return html`
            <article class="card card__light-theme">
                <div class="card-body">
                    <h3 class="card-title fs-5">
                        <a href="${SEARCH_BASE_URL}${item.linkUrl}" class="stretched-link">${item.titleHtml}</a>
                    </h3>
                    <p class="card-text">
                        ${item.descriptionHtml}
                    </p>
                </div>
            </article>
        `
        }
    )}
    </div>
  `
}
