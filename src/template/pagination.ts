import { html, render } from 'lit-html'
import { Response } from '../types/funnelback-data'
import { ParamMap } from '../types/url-parameters'
import { mainTemplate } from './main'
import { loadingTemplate } from './loading'
import { urlParameterMap } from '../utils/urlParameter'
import { fetchData } from '../utils/fetchData'
import { SEARCH_FORM_CONTAINER_ID, SEARCH_RESULTS_CONTAINER_ID } from '../utils/constants'

export function paginationTemplate (response: Response, paramMap: ParamMap) {
  let timer: any
  const { resultPacket } = response
  const { totalMatching } = resultPacket.resultsSummary
  const paginationOnPage = 10
  const currUrlParameterMap = urlParameterMap()
  const numberOfPages: number = Math.ceil(totalMatching / paginationOnPage)
  
  const buildHref = `?query=${currUrlParameterMap.query}&collection=${currUrlParameterMap.collection}&profile=${currUrlParameterMap.profile}&second_profile=&scope=${currUrlParameterMap.scope}&label=`

  const onPageClick = (e: any) => {
    e.preventDefault()
    clearTimeout(timer)
    document.getElementById(SEARCH_FORM_CONTAINER_ID)?.scrollIntoView({
      behavior: 'smooth'
    })

    const href = (e.currentTarget as HTMLAnchorElement | null)?.href
    if (!href) {
      console.error('Pagination link missing href attribute')
      return
    }

    // Show loading spinner
    render(loadingTemplate(`Loading search results`), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)

    // Fetch results
    timer = setTimeout(() => {
      history.pushState({}, '', href)
      fetchData(href.split('?')[1]).then(data => {
        render(
          mainTemplate(
            data?.response, currUrlParameterMap), 
            document.getElementById(SEARCH_RESULTS_CONTAINER_ID) as HTMLBodyElement
          )
        
        requestAnimationFrame(() => {
          // Bring focus to the top
          const resultsContainer = document.getElementById('qld-search-results') as HTMLElement | null
          resultsContainer?.focus()
        })
      })
    })
  }

  function range (start: number, end: number) {
    return Array(end - start + 1).fill(start).map((_, idx) => start + idx)
  }

  type PageItem = number | '...' | 'mobile-only-ellipsis';

  /**
   * Build pagination items: 
   * 
   *  Pagination has a maximum of 7 slots for numbers and ellipses (overflow indicator)
   *  The first slot is always the first page of the set
   *  If there are fewer than 7 pages in the set, show only that number of slots
   *  The component always shows the first page and current page
   *  Next page, previous page, First page and Last page only appear if those pages exist
   *  If there are fewer than 7 pages in the set, you should show all numbers and not use overflow indicators.
   *  Don't show the previous page link on the first page and don't show the next page link on the last page.
   * @param active 
   * @param total 
   * @returns 
   */
  function buildPages(active: number, total: number): PageItem[] {
    const maxSlots = 7;
    if (total <= 7) {
      return range(1, total);
    }

    const pages: PageItem[] = [1];
    
    // Always include active page, and at least 2 adjacent pages and a total of 7 slots.
    // If 2 adjacent pages not possible on one side, extend to the other side.
    const middle = range(
      Math.max(2, Math.min(active - 1, total - (maxSlots - 3))),
      Math.min(total - 1, Math.max(active + 1, maxSlots - 2))
    );
    pages.push(...middle);
    
    // Always show last page
    pages.push(total);
    
    // Sort and dedupe
    const sorted = Array.from(new Set(pages)).sort((a, b) => a - b);
    
    // Inject ellipsis where gaps exist
    const result: PageItem[] = [];
    for (let i = 0; i < sorted.length; i++) {
      const curr = sorted[i];
      const prev = sorted[i - 1];
      
      if (i > 0 && curr - prev > 1) {
        result.push('...');
      }
      result.push(curr);
    }

    // Inject mobile ellipsis
    // On mobile view: when 3rd page is active, the "mobile-only ellipsis" is showing instead of page 2.
    // Same applies when 3rd last page is active, the "mobile-only ellipsis" is showing instead of page before last.
    if (active === 3) {
      result.splice(result.indexOf(2), 0, 'mobile-only-ellipsis');
    }
    if (active === total - 2) {
      result.splice(result.indexOf(total - 1), 0, 'mobile-only-ellipsis');
    }

    return result;
  }

  /**
   *  Pagination has a maximum of 7 slots for numbers and ellipses (overflow indicator)
   *  The first slot is always the first page of the set
   *  If there are fewer than 7 pages in the set, show only that number of slots
   *  The component always shows the first page and current page
   *  Next page, previous page, First page and Last page only appear if those pages exist
   *  If there are fewer than 7 pages in the set, you should show all numbers and not use overflow indicators.
   *  Don't show the previous page link on the first page and don't show the next page link on the last page.
   */
  if (numberOfPages <= 1) {
    return html``
  }

  return html`
    <nav aria-label="Pagination for search results">
      <ul class="pagination
        ${currUrlParameterMap.activePage === 1 ? 'active-is-first' : ''}
        ${currUrlParameterMap.activePage === 2 ? 'active-is-second' : ''}
        ${currUrlParameterMap.activePage === numberOfPages - 1 ? 'active-is-second-to-last' : ''}
        ${currUrlParameterMap.activePage === numberOfPages ? 'active-is-last' : ''}">

          ${currUrlParameterMap.startRank > 1 ? html`<li class="page-item previous">
              <a class="page-link" @click="${onPageClick}" href="${buildHref}&page=${currUrlParameterMap.activePage - 1}&start_rank=${currUrlParameterMap.startRank - 10}" aria-label="Previous page">
                  <span>Previous</span>
              </a>
          </li>` : ''}
          
          ${buildPages(currUrlParameterMap.activePage, numberOfPages).map(item => {
            if (item === '...') {
              return html`
                <li class="page-item more" aria-hidden="true">
                  <span></span>
                </li>
              `
            }
            if (item === 'mobile-only-ellipsis') {
              return html`
                <li class="page-item more mobile-only-ellipsis" aria-hidden="true">
                  <span></span>
                </li>
              `
            }

            const page = item as number
            const addParam = buildHref + `&page=${page}&start_rank=${(paginationOnPage * (page - 1)) + 1}`

            // CSS classes to handle different breakpoint styling.
            const firstPage = page === 1 ? 'first-page' : ''
            const secondPage = page === 2 ? 'second-page' : ''
            const thirdPage = page === 3 ? 'third-page' : ''

            const lastPage = page === numberOfPages ? 'last-page' : ''
            const oneBeforeLast = page === numberOfPages - 1 ? 'one-before-last' : ''
            const twoBeforeLast = page === numberOfPages - 2 ? 'two-before-last' : ''

            const activePage = page === currUrlParameterMap.activePage ? 'active' : ''
            const beforeActivePage = page === currUrlParameterMap.activePage - 1 ? 'before-active' : ''
            const afterActivePage = page === currUrlParameterMap.activePage + 1 ? 'after-active' : ''

            return html`
              <li class="page-item ${firstPage} ${secondPage} ${thirdPage} ${lastPage} ${oneBeforeLast} ${twoBeforeLast} ${activePage || beforeActivePage || afterActivePage}">
                <a class="page-link"
                  @click="${onPageClick}"
                  href=${addParam}
                  aria-current=${activePage ? 'page' : 'false'}>
                  ${page}
                </a>
              </li>
            `
          })}

          ${numberOfPages > currUrlParameterMap.activePage ? html`<li class="page-item next">
              <a class="page-link" @click="${onPageClick}" href="${buildHref}&page=${currUrlParameterMap.activePage + 1}&start_rank=${currUrlParameterMap.startRank + 10}" aria-label="Next page">
                  <span>Next</span>
              </a>
          </li>` : ''}
      </ul>
    </nav>
  `
}
