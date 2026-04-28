import { render } from 'lit-html'
import { DEFAULT_SEARCH_PROFILE, DEFAULT_SEARCH_COLLECTION, DEFAULT_SEARCH_NUMRANKS, DEFAULT_SEARCH_DYNAMIC_SUGGESTIONS, SEARCH_INPUT_ID, SEARCH_SUBMIT_ID, SEARCH_FORM_CONTAINER_ID, SEARCH_RESULTS_CONTAINER_ID, RELATED_SEARCH_CONTAINER_ID } from '../utils/constants'
import { urlParameterMap } from '../utils/urlParameter'
import { fetchData } from '../utils/fetchData'
import { mainTemplate } from '../template/main'
import { relatedResultsTemplate } from '../template/related-search'
import { noResultsTemplate } from '../template/no-results'
import { errorResultsTemplate } from '../template/error-results'
import { searchForm } from '../template/search-form'
import { loadingTemplate } from '../template/loading'

export class SearchModule {
  private readonly siteInput: HTMLInputElement | null
  private readonly defaultSuggestionsContainer: HTMLElement | null
  private readonly dynamicSuggestionsContainer: HTMLElement | null
  private inputTimeoutId: ReturnType<typeof setTimeout>

  private readonly urlParameter: any

  constructor () {
    this.urlParameter = urlParameterMap() || {}

    render(searchForm(), document.getElementById(SEARCH_FORM_CONTAINER_ID)!)

    this.siteInput = document.getElementById(SEARCH_INPUT_ID) as HTMLInputElement | null
    this.defaultSuggestionsContainer = document.querySelector(`#${SEARCH_FORM_CONTAINER_ID} .default-suggestions`) as HTMLElement
    this.dynamicSuggestionsContainer = document.querySelector(`#${SEARCH_FORM_CONTAINER_ID} .dynamic-suggestions`) as HTMLElement

    this.bindSearchFormEvents()

    // check if query porameter is set to start fetch process
    const queryParam = this.urlParameter.query

    // If query parameter exists, show loading spinner and start fetching data and render results.
    if (queryParam) {
      render(loadingTemplate('Loading search results'), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)
      // process data and render templates
      this.processData()
    }
  }

  /**
   * Handle form submission, fetch data and render results templates
   * @param e Event
   */
  private onSubmit = (e: Event) => {
    e.preventDefault()

    clearTimeout(this.inputTimeoutId)
    this.hideAllSuggestions(e)

    const inputValue = this.getTrimInputValue()
    if (!inputValue) {
      render('', document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)
      render('', document.getElementById(RELATED_SEARCH_CONTAINER_ID)!)
      return
    }

    // Show loading spinner
    render(loadingTemplate('Loading search results'), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)

    const params = new URLSearchParams(location.search)
    const currUrlParameterMap = urlParameterMap()

    const searchCollection = currUrlParameterMap.collection && currUrlParameterMap.collection.trim() !== '' ? currUrlParameterMap.collection : DEFAULT_SEARCH_COLLECTION
    const searchProfile = currUrlParameterMap.profile && currUrlParameterMap.profile.trim() !== '' ? currUrlParameterMap.profile : DEFAULT_SEARCH_PROFILE
    const searchScope = currUrlParameterMap.scope && currUrlParameterMap.scope.trim() !== '' ? currUrlParameterMap.scope : ''

    params.set('scope', searchScope)
    params.set('profile', searchProfile)
    params.set('page', '1')
    params.set('start_rank', '1')
    params.set('collection', searchCollection)
    params.set('query', inputValue)

    // Push history stack with updated URL parameters
    history.pushState({}, '', `?${params.toString()}`)

    // Fetch data and render results
    fetchData(params.toString()).then((data) => {
      const contextualNavigation = data?.response?.resultPacket?.contextualNavigation
      const totalMatching = data?.response?.resultPacket?.resultsSummary?.totalMatching
      const spellText = data?.response?.resultPacket?.spell?.text || ''

      if (totalMatching > 0) {
        render(
          mainTemplate(data?.response, currUrlParameterMap),
          document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!
        )
        render(
          relatedResultsTemplate(contextualNavigation),
          document.getElementById(RELATED_SEARCH_CONTAINER_ID)!
        )
      } else {
        render(
          noResultsTemplate(inputValue, spellText),
          document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!
        )
        render('', document.getElementById(RELATED_SEARCH_CONTAINER_ID)!)
      }
    }).catch((error) => {
      render(errorResultsTemplate(error, params.toString()), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)
    })
  }

  // Event handler for input changes, with debouncing timeout
  private onInputChange = (e: Event) => {
    clearTimeout(this.inputTimeoutId)
    // When input value is empty, show default suggestion
    if (!this.getTrimInputValue()) {
      this.showDefaultSuggestions()
      return
    } else {
      this.hideDefaultSuggestions()
    }

    this.inputTimeoutId = setTimeout(() => {
      this.loadDynamicSuggestion()
    }, 300)
  }

  // Event handler for input focus, to reset default suggestions visibility
  private onInputFocus = (e: Event) => {
    this.resetDefaultSuggestions(e)
  }

  // Hide all suggestions (both default and dynamic)
  private hideAllSuggestions = (e: Event) => {
    this.hideDefaultSuggestions()
    if (this.dynamicSuggestionsContainer) {
      this.dynamicSuggestionsContainer.classList.add('d-none')
    }
  }

  // Reset default suggestions visibility based on input value
  private resetDefaultSuggestions = (e: Event) => {
    if (!this.getTrimInputValue()) {
      this.showDefaultSuggestions()
    } else {
      this.hideDefaultSuggestions()
    }
  }

  // Hide default suggestions
  private hideDefaultSuggestions () {
    if (this.defaultSuggestionsContainer) {
      this.defaultSuggestionsContainer.classList.add('d-none')
    }
  }

  // Show default suggestions, dynamic suggestions should be hidden when default suggestions are shown
  private showDefaultSuggestions () {
    if (this.defaultSuggestionsContainer) {
      this.defaultSuggestionsContainer.classList.remove('d-none')
    }
    if (this.dynamicSuggestionsContainer) {
      this.dynamicSuggestionsContainer.classList.add('d-none')
    }
  }

  // Show dynamic suggestions section (featured or auto-complete)
  private showDynamicSuggestionSection (container: HTMLElement) {
    container.classList.remove('d-none')
    this.dynamicSuggestionsContainer?.classList.remove('d-none')
  }

  // Hide dynamic suggestions section and clear its content
  private hideDynamicSuggestionSection (container: HTMLElement) {
    container.classList.add('d-none')
    container.innerHTML = ''
  }

  // Bind event listeners for search form input and button
  private bindSearchFormEvents () {
    const currUrlParameterMap = urlParameterMap()
    const button = document.getElementById(SEARCH_SUBMIT_ID) as HTMLButtonElement | null

    if (this.siteInput) {
      this.siteInput.value = currUrlParameterMap.query || ''
      this.siteInput.onfocus = this.onInputFocus
      this.siteInput.oninput = this.onInputChange

      // To handle case when user clicks on input's sibling element (e.g. button, label)
      // To cancel out QGDS CSS: .qld-search-input:focus-within .suggestions { display: block; }
      const parentInput = this.siteInput.parentElement as HTMLElement | null
      if (parentInput) {
        parentInput.onfocus = this.resetDefaultSuggestions
      }
    }

    if (button) {
      button.onclick = this.onSubmit
      // To cancel out QGDS CSS: .qld-search-input:focus-within .suggestions { display: block; }
      button.onfocus = this.resetDefaultSuggestions
    }
  }

  // Escape user input for use in regex pattern
  private escapeRegex (value: string): string {
    if ((RegExp as any).escape) {
      return RegExp.escape(value)
    }
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  // Get raw user input value
  private getRawInputValue (): string {
    return this.siteInput?.value ?? ''
  }

  // Get trimmed user input value
  private getTrimInputValue (): string {
    return this.getRawInputValue().trim()
  }

  // Build fetch URL with query parameters for suggestions
  private getFetchParams (feature: boolean = false): URLSearchParams {
    if (feature) {
      return new URLSearchParams({
        smeta_sfinder_sand: 'yes',
        query: this.getTrimInputValue() || '',
        collection: this.urlParameter.collection || DEFAULT_SEARCH_COLLECTION,
        profile: this.urlParameter.profile || DEFAULT_SEARCH_PROFILE
      })
    }

    // Auto-complete
    // https://docs.squiz.net/funnelback/docs/latest/reference/modern-ui/suggest-json.html
    return new URLSearchParams({
      fmt: 'json',
      alpha: '0.5',
      partial_query: this.getTrimInputValue() || '',
      collection: this.urlParameter.collection || DEFAULT_SEARCH_COLLECTION,
      profile: this.urlParameter.profile || DEFAULT_SEARCH_PROFILE
    })
  }

  // Load dynamic suggestions (both auto-complete and featured)
  private loadDynamicSuggestion () {
    if (!DEFAULT_SEARCH_DYNAMIC_SUGGESTIONS || !this.getTrimInputValue()) {
      return
    }

    // We need the container to display suggestions. If container not found, get out of here.
    if (!this.dynamicSuggestionsContainer) {
      console.warn('Dynamic suggestions container not found in the DOM.')
      return
    }

    if (!document.getElementById('dynamic-suggestion-autocomplete')) {
      this.dynamicSuggestionsContainer.innerHTML = `
          <div class="suggestions-category d-none" id="dynamic-suggestion-autocomplete"></div>
          <div class="suggestions-category feature d-none" id="dynamic-suggestion-feature"></div>`
    }
    this.loadDynamicAutoCompleteSuggestion()
    this.loadDynamicFeaturedSuggestion()
  }

  // Load auto-complete suggestions and render them in designated container
  private loadDynamicAutoCompleteSuggestion () {
    const autoCompleteContainer = document.getElementById('dynamic-suggestion-autocomplete') as HTMLElement

    const suggestionParams = this.getFetchParams()
    fetchData(suggestionParams.toString(), true)
      .then(data => {
        const totalSuggestions = data.length || 0

        if (totalSuggestions === 0) {
          this.hideDynamicSuggestionSection(autoCompleteContainer)
          return
        }

        // Process response data and render the HTML
        const rawValue = this.getRawInputValue()
        const suggestionsToShow = data.slice(0, 4)

        const resultsHtml = suggestionsToShow.map((item) => {
          const highlightedText = item.replace(
            new RegExp(`(${this.escapeRegex(rawValue)})`, 'gi'),
            '<strong>$1</strong>'
          )

          const params = new URLSearchParams({
            query: item,
            collection: this.urlParameter.collection || DEFAULT_SEARCH_COLLECTION,
            profile: this.urlParameter.profile || DEFAULT_SEARCH_PROFILE,
            scope: this.urlParameter.scope ?? '',
            num_ranks: DEFAULT_SEARCH_NUMRANKS,
            tiers: 'off',
            start_rank: String(this.urlParameter.startRank ?? '')
          })
          const suggestionLink = `?${params.toString()}`

          return `<li><a tabindex='0' href='${suggestionLink}'><span>${highlightedText}</span></a></li>`
        }
        ).join('')

        autoCompleteContainer.innerHTML = `<ul>${resultsHtml}</ul>`

        this.showDynamicSuggestionSection(autoCompleteContainer)
      })
      .catch((error) => {
        console.error('Error fetching auto-complete suggestions:', error)
      })
  }

  // Load featured suggestions and render them in designated container
  private loadDynamicFeaturedSuggestion () {
    const featureSuggestionsContainer = document.getElementById('dynamic-suggestion-feature') as HTMLElement

    const featuredSuggestionParams = this.getFetchParams(true)
    fetchData(featuredSuggestionParams.toString())
      .then(data => {
        const featuredSuggestion = data?.response?.resultPacket?.results
        const totalSuggestions = featuredSuggestion.length || 0

        if (totalSuggestions === 0) {
          this.hideDynamicSuggestionSection(featureSuggestionsContainer)
          return
        }

        // Process response data and render the HTML
        const viewMoreUrl = this.dynamicSuggestionsContainer?.getAttribute('data-view-more') || ''
        const viewMoreLink = viewMoreUrl ? `<li><a tabindex='0' href='${viewMoreUrl}' class='view-more'>View more</a></li>` : ''

        const suggestionsToShow = featuredSuggestion.slice(0, 4)
        const resultsHtml = suggestionsToShow.map((item) => {
          return `<li><a tabindex='0' href='${item.liveUrl}'>${item.title}</a></li>`
        })

        featureSuggestionsContainer.innerHTML = `
            <strong class='suggestions-category-label d-block'>Related services</strong>
            <ul>${resultsHtml.join('')} ${viewMoreLink}</ul>`

        this.showDynamicSuggestionSection(featureSuggestionsContainer)
      })
      .catch((error) => {
        console.error('Error fetching featured suggestion:', error)
      })
  }

  /**
   * processData function process the results fetched and render templates
   * @return {undefined}
   * */
  processData () {
    const params = new URLSearchParams({
      query: this.urlParameter.query ?? '',
      collection: this.urlParameter.collection ?? '',
      profile: this.urlParameter.profile ?? '',
      scope: this.urlParameter.scope ?? '',
      start_rank: String(this.urlParameter.startRank ?? '')
    })

    fetchData(params.toString())
      .then(data => {
        const contextualNavigation = data?.response?.resultPacket?.contextualNavigation
        const totalMatching = data?.response?.resultPacket?.resultsSummary?.totalMatching
        const spellText = data?.response?.resultPacket?.spell?.text || ''

        if (totalMatching > 0) {
          render(mainTemplate(data?.response, this.urlParameter), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)
          if (contextualNavigation) {
            render(relatedResultsTemplate(contextualNavigation), document.getElementById(RELATED_SEARCH_CONTAINER_ID)!)
          }
        } else {
          render(noResultsTemplate(this.urlParameter.query, spellText), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)
          render('', document.getElementById(RELATED_SEARCH_CONTAINER_ID)!)
        }
      }).catch((error) => {
        render(errorResultsTemplate(error, params.toString()), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)
      })
  }
}
