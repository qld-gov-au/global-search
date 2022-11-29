import { html } from 'lit-html'

export function featuredResultsTemplate (exhibits: any[]) {
  return html`<h2 class="search-results-summary">Featured results</h2>
    ${exhibits.map((item, index) => {
                return html`
                    <article class="qg-card qg-card__light-theme qg-card__clickable">
                        <div class="content">
                            <div class="details">
                                <h2 class="qg-card__title">
                                    <a href="https://find.search.qld.gov.au${item.linkUrl}" class="stretched-link">${item.titleHtml}</a>
                                </h2>
                                <ul class="qg-search-results__results-list">
                                    <li class="description">${item.descriptionHtml}</li>
                                    <li class="meta">
                                        <span class="qg-search-results__url">${item.displayUrl}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>`
            }
    )}
  `
}
