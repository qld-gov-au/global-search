import { SEARCH_BASE_URL } from '../utils/constants'
import { html } from 'lit-html'
import { formatNumber, formatSize, formatDate } from '../utils/formatContent'

export function searchResultsTemplate(resultPacket: { query: any; resultsSummary: any; results: Array<any> }) {
  const { currStart, currEnd, totalMatching } = resultPacket?.resultsSummary
  const stripQuotes = (s: string) => (s ?? '').replace(/['"`\u2018\u2019\u201C\u201D]/g, '')
  const searchTerm = stripQuotes(resultPacket?.query)
  const customizeTitle = (title: string) => title.replace('| Queensland Government', '')

  return html`<div id="qld-search-results">
        <h2 class="mb-4 qld-search-results__summary">Search results for '${searchTerm}'</h2>
        <span class="d-block mb-4 qld-search-results__results-count">Showing results ${currStart} - ${currEnd} of <span class="qld-search-results__results-total">${formatNumber(totalMatching)}</span></span>
        <ul class="list-group list-unstyled qld-search-results__results-list">
            ${resultPacket.results.map((result: any) => html`
                <li class="pt-4 mb-4 border-top border-grey qld-search-results__results-list-item">
                    <h3 class="mb-2">
                        <a href="${SEARCH_BASE_URL}${result.clickTrackingUrl}">${customizeTitle(result.title)}</a>
                    </h3>
                    <ul class="list-group list-unstyled qld-search-results__results-list">
                        ${result.date ? html`<li class="mb-2 text-dark-grey-muted small">${formatDate(result.date)}</li>` : ''}
                        ${Array.isArray(result.listMetadata.c) ? html`<li class="description mb-2">${result.listMetadata.c[0]}</li>` : Array.isArray(result.listMetadata.C) ? html`<li class="description mb-2">${result.listMetadata.C[0]}</li>` : ''}
                        <li class="text-dark-grey-muted small text-break">
                            <span class="meta">${result.indexUrl}</span>
                            ${result.fileSize ? html`<span>&nbsp;-&nbsp;${formatSize(result.fileSize)}</span>` : ''}
                        </li>
                    </ul>
                </li>`
            )}
        </ul>
    </div>
  `
}