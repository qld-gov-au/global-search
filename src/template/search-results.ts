import { html } from 'lit-html'
import { formatNumber, formatSize, formatDate } from '../utils/formatContent'

export function searchResultsTemplate(resultPacket: { query: string; resultsSummary:any ; results: Array<any> }) {
  const { currStart, currEnd, totalMatching } = resultPacket?.resultsSummary
  const searchTerm = resultPacket?.query
  const customizeTitle = (title: string) => title.replace('| Queensland Government', '')

  return html`<div id="qg-search-results">
        <h2 class="qg-search-results__summary">Search results for '${searchTerm}'</h2>
        <span class="qg-search-results__results-count">Showing results ${currStart} - ${currEnd} of <span class="qg-search-results__results-total">${formatNumber(totalMatching)}</span></span>
        <ul class="qg-search-results__results-list">
            ${resultPacket.results.map((result: any) => html`
                <li class="qg-search-results__results-list-item">
                    <h3>
                        <a href="https://find.search.qld.gov.au${result.clickTrackingUrl}">${customizeTitle(result.title)}</a>
                    </h3>
                    <ul class="qg-search-results__results-list">
                        <li class="description"> ${result.metaData.C}</li>
                        <li class="meta">
                            <span class="qg-search-results__url">${result.indexUrl}</span>
                            ${result.fileSize ? html`<span>&nbsp;-&nbsp;${formatSize(result.fileSize)}</span>` : ''}
                            ${result.date ? html`<span>&nbsp;-&nbsp;${formatDate(result.date)}</span>` : ''}
                        </li>
                    </ul>
                </li>`
            )}
        </ul>
    </div>
  `
}
