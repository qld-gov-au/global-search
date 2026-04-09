import { render } from 'lit-html'
import { DEFAULT_SEARCH_PROFILE, DEFAULT_SEARCH_COLLECTION, SEARCH_INPUT_ID, SEARCH_SUBMIT_ID, SEARCH_FORM_CONTAINER_ID, SEARCH_RESULTS_CONTAINER_ID, RELATED_SEARCH_CONTAINER_ID } from '../utils/constants'
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
  private readonly urlParameter: any

  constructor () {
    this.urlParameter = urlParameterMap() || {}
    this.siteInput = document.getElementById(SEARCH_INPUT_ID) as HTMLInputElement | null

    // render search form
    this.renderSearchForm()

    // check if query porameter is set to start fetch process
    const queryParam = this.urlParameter.query

    // If query parameter exists, show loading spinner and start fetching data and render results.
    if (queryParam) {
      if (this.siteInput) {
        this.siteInput.value = queryParam
      }

      // Show loading spinner immediately
      render(loadingTemplate(`Loading search results`), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)

      // process data and render templates
      this.processData()
    }
  }

  private onSubmit = (e: Event) => {
    e.preventDefault();
    const inputValue = (
      document.getElementById(SEARCH_INPUT_ID) as HTMLInputElement
    ).value;

    if (inputValue) {
      const params = new URLSearchParams(location.search);
      const currUrlParameterMap = urlParameterMap();

      const searchCollection = currUrlParameterMap.collection && currUrlParameterMap.collection.trim() !== '' ? currUrlParameterMap.collection : DEFAULT_SEARCH_COLLECTION;
      const searchProfile = currUrlParameterMap.profile && currUrlParameterMap.profile.trim() !== '' ? currUrlParameterMap.profile : DEFAULT_SEARCH_PROFILE;
      const searchScope = currUrlParameterMap.scope && currUrlParameterMap.scope.trim() !== '' ? currUrlParameterMap.scope : "";

      // set params
      params.set("scope", searchScope);
      params.set("profile", searchProfile);
      params.set("page", "1");
      params.set("start_rank", "1");
      params.set("collection", searchCollection);
      params.set("query", inputValue);

      // Show loading spinner
      render(loadingTemplate(`Loading search results`), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)

      // push history stack and fetch data
      history.pushState({}, "", `?${params.toString()}`);

      fetchData(params.toString()).then((data) => {
        const contextualNavigation = data?.response?.resultPacket?.contextualNavigation;
        const totalMatching = data?.response?.resultPacket?.resultsSummary?.totalMatching;
        const spellText = data?.response?.resultPacket?.spell?.text || ''

        if (totalMatching > 0) {
          render(
            mainTemplate(data?.response, currUrlParameterMap),
            document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!
          );
          render(
            relatedResultsTemplate(contextualNavigation),
            document.getElementById(RELATED_SEARCH_CONTAINER_ID)!
          );
        } else {
          render(
            noResultsTemplate(inputValue, '', spellText),
            document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!
          );
          render("", document.getElementById(RELATED_SEARCH_CONTAINER_ID)!);
        }
      }).catch((err) => {
        render(errorResultsTemplate(err, params.toString()), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)
      })
    } else {
      render("", document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!);
      render("", document.getElementById(RELATED_SEARCH_CONTAINER_ID)!);
    }
  };

  private suggestionVisibility = (value: boolean) => {
    const qgdsSuggestionClass = '.qld-search-inpage-spa .suggestions.suggestions__group';
    const suggestionEl = document.querySelector(qgdsSuggestionClass) as HTMLElement;
    if (suggestionEl != null) {
      suggestionEl.hidden = value;
    }
  };

  private onInputClick = (e: { type: string; key: string }) => {
    if (e.type === "keydown") {
      if (e.key === "Enter") {
        this.suggestionVisibility(true);
      } else {
        this.suggestionVisibility(false);
      }
    }
  }

  private bindSearchFormEvents() {
    const currUrlParameterMap = urlParameterMap();
    const input = document.getElementById(SEARCH_INPUT_ID) as HTMLInputElement | null;
    const button = document.getElementById(SEARCH_SUBMIT_ID) as HTMLButtonElement | null;

    if (input) {
      input.value = currUrlParameterMap.query || '';
      input.onclick = this.onInputClick as any;
      input.onkeydown = this.onInputClick as any;
    }

    if (button) {
      button.onclick = this.onSubmit;
    }
  }
  
  renderSearchForm () {
    render(searchForm(), document.getElementById(SEARCH_FORM_CONTAINER_ID)!)
    this.bindSearchFormEvents();
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

    fetchData(params.toString()).then(data => {
      const contextualNavigation = data?.response?.resultPacket?.contextualNavigation
      const totalMatching = data?.response?.resultPacket?.resultsSummary?.totalMatching
      const spellText = data?.response?.resultPacket?.spell?.text || ''

      if (totalMatching > 0) {
        render(mainTemplate(data?.response, this.urlParameter), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)
        if (contextualNavigation) {
          render(relatedResultsTemplate(contextualNavigation), document.getElementById(RELATED_SEARCH_CONTAINER_ID)!)
        }
      } else {
        render(noResultsTemplate(this.urlParameter.query, '', spellText), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)
      }

    }).catch((err) => {
      render(errorResultsTemplate(err, params.toString()), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)
    })
  }
}
