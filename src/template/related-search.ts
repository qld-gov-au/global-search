import { html, render } from 'lit-html'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { urlParameterMap } from '../utils/urlParameter'
import { fetchData } from '../utils/fetchData'
import { mainTemplate } from './main'
import { noResultsTemplate } from './no-results'
import { RelatedSearchClick } from '../types/clickEvents'
import { loadingTemplate } from './loading'
import { SEARCH_INPUT_ID, SEARCH_FORM_CONTAINER_ID } from '../utils/constants'

export function relatedResultsTemplate (contextualNavigation: { categories: any; }) {
  const onRelatedSearchClick = (e: RelatedSearchClick) => {
    e.preventDefault()

    let target = e?.target as unknown as HTMLElement
    // In case the click event is triggered from <A> tag's child element.
    if (target?.tagName !== 'A') {
      target = target.closest('a') as HTMLElement;
    }
    const clickedHref = (target as HTMLAnchorElement).href;
    const clickedVal = target.textContent;
    const currUrlParameterMap = urlParameterMap();

    (document.getElementById(SEARCH_INPUT_ID) as HTMLInputElement).value = clickedVal;

    // push in the history stack
    history.pushState({}, '', `${clickedHref}`)

    // Scroll to the top
    document.getElementById(SEARCH_FORM_CONTAINER_ID)?.scrollIntoView({
      behavior: 'smooth'
    })
    // Show loading spinner
    render(loadingTemplate(`Loading search results`), document.getElementById('qld-search-results__container')!)

    // fetch the results
    fetchData(clickedHref).then(data => {
      const contextualNavigation = data?.response?.resultPacket?.contextualNavigation
      const totalMatching = data?.response?.resultPacket?.resultsSummary?.totalMatching
      if (totalMatching > 0) {
        render(mainTemplate(data?.response, currUrlParameterMap), document.getElementById('qld-search-results__container') as HTMLBodyElement)
        render(relatedResultsTemplate(contextualNavigation), document.getElementById('qld-related-search__container')!)
      } else {
        render(noResultsTemplate(`related search ${currUrlParameterMap.query}`), document.getElementById('qld-search-results__container')!)
        render('', document.getElementById('qld-related-search__container')!)
      }
    })
  }

  const labelFormat = (label: string) => {
    const urlParameter = urlParameterMap()
    return html`${unsafeHTML(label.replace('...', `<strong> ${urlParameter.query} </strong>`).replace(/`/g, ''))}`;
  }

  if (contextualNavigation) {
    const { categories } = contextualNavigation
    for (let i = 0; i < categories.length; i++) {
      if (categories[i]?.name === 'topic') {
        return html`
          <h3 class="related-search-title">Related search</h3>
          <div id="related-search__tags" class="related-tags">
            <ul class="tag-list" aria-label="Related search navigation" role="navigation">
              ${categories[i]?.clusters.map((item: any) =>
                html`<li class="tag-item tag-link tag-large mt-0"><a @click="${(e: RelatedSearchClick) => onRelatedSearchClick(e)}" href="${item.href}&start_rank=1">${labelFormat(item.label)}</a></li>`
            )}
            </ul>
          </div>
        `
      }
    }
  }
}
