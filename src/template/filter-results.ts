import { html, render } from 'lit-html'
import { mainTemplate } from './main'
import { urlParameterMap } from '../utils/urlParameter'
import { fetchData } from '../utils/fetchData'

export function filterResultsTemplate () {
  let label: string = ''
  const currUrlParameterMap = urlParameterMap()
  const labelFromSession = sessionStorage.getItem('fcLabel')
  const profileFromSession = sessionStorage.getItem('fcProfile')
  const scopeFromSession = sessionStorage.getItem('fcScope')
  const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

  // apply filter button click
  const applyFilter = (e: any) => {
    e.preventDefault()
    const params = new URLSearchParams(location.search)
    const selectedRadioBtn = document.querySelector('input[name="filterBy"]:checked')
    params.set('scope', selectedRadioBtn?.getAttribute('data-scope') || '')
    params.set('profile', selectedRadioBtn?.getAttribute('data-profile') || '')
    params.set('page', '1')
    params.set('start_rank', '1')
    history.pushState({}, '', `?${params.toString()}`)
    fetchData(params.toString()).then(data => {
      render(mainTemplate(data?.response, currUrlParameterMap), document.getElementById('qld-search-results__container') as HTMLBodyElement)
    })
  }

  // on radio button change for filtering
  const onFilterChange = (e: any) => {
    const selectedVal = e.target.value
    switch (selectedVal) {
      case 'qld':
      case 'custom':
        sessionStorage.setItem('rcSelectedRadiobutton', selectedVal)
        break
    }
  }

  // building label value
  if (labelFromSession) {
    label = capitalizeFirstLetter(labelFromSession)
  } else if (scopeFromSession) {
    // @ts-ignore
    label = html`Results from<strong>&nbsp;${scopeFromSession}</strong>`
  } else if (profileFromSession) {
    label = capitalizeFirstLetter(profileFromSession)
  }

  // loading of the component
  window.addEventListener('load', (event) => {
    const filterButton = document.querySelector('.qld-btn__search-filter')
    filterButton?.addEventListener('click', e => {})
    filterButton?.dispatchEvent(new Event('click'))
  })

  return html`<div class="qld-filter-by-results">
              <h2 class="h4 mt-0 pb-2 border-bottom">Filter results by</h2>
              <form class="form qg-forms-v2 qg-filter-by-results__form">
                <fieldset>
                  <legend>
                    <span class="label">Content type</span>
                  </legend>
                  <div class="form-check">
                      <input checked name="filterBy" id="customOption" class="form-check-input" type="radio" value="custom"
                              data-scope="${scopeFromSession}"
                              data-profile="${profileFromSession}"
                              data-label="${labelFromSession}" @click="${onFilterChange}" />
                      <label for="customOption" class="form-check-label">${label}</label>
                  </div>
                  <div class="form-check">
                    <input name="filterBy" id="qld" class="form-check-input" type="radio" value="qld" data-profile='qld' data-scope='' @click="${onFilterChange}" ?checked=${sessionStorage.getItem('rcSelectedRadiobutton') === 'qld'}/>
                    <label for="qld" class="form-check-label">all Queensland Government</label>
                  </div>
                </fieldset>
            </form>
            <button type="button" class="btn qld-btn__search-filter btn-primary my-2" @click="${applyFilter}">Apply filters</button>
           </div>`
}
