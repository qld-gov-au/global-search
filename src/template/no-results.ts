import { html } from 'lit-html'
import { urlParameterMap } from '../utils/urlParameter';
import { DEFAULT_SEARCH_COLLECTION, DEFAULT_SEARCH_PROFILE, DEFAULT_SEARCH_NUMRANKS } from '../utils/constants';

export function noResultsTemplate (keyword: string = '', spellText: string = '') {
  const defaultMessage = html`
    <div class="qld-search-results__error-hint">
      No search results were found ${keyword ? html`for <strong>${keyword}</strong>` : ``}. 
      Please search again using a different search term.
    </div>`

  let spellTextMessage = null

  // Insert spell check suggestion at the beginning of the message
  if (spellText) {
    const currUrlParameterMap = urlParameterMap();
    const params = new URLSearchParams({
        query: spellText,
        collection: currUrlParameterMap.collection || DEFAULT_SEARCH_COLLECTION,
        profile: currUrlParameterMap.profile || DEFAULT_SEARCH_PROFILE,
        scope: currUrlParameterMap.scope ?? '',
        num_ranks: DEFAULT_SEARCH_NUMRANKS,
        tiers: 'off',
        start_rank: String(currUrlParameterMap.startRank ?? '')
      })

    spellTextMessage = html`
      <p class="qld-search-results__spelltext-hint">
        Did you mean: <a href="?${params.toString()}">
          <span class="funnelback-highlight">${spellText}</span>
        </a>? 
      </p>`
  }

  return html`${spellTextMessage ? spellTextMessage : ''} ${defaultMessage}`
}
