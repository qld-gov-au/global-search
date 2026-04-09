import { SEARCH_API_URL, SEARCH_SUGGESTIONS_URL, DEFAULT_SEARCH_COLLECTION, DEFAULT_SEARCH_PROFILE, DEFAULT_SEARCH_NUMRANKS, SEARCH_INPUT_ID, SEARCH_SUBMIT_ID, SEARCH_BASE_URL } from "../utils/constants";
import { html } from 'lit-html'
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { urlParameterMap } from '../utils/urlParameter'

// Import Handlebars library and QGDS bundled helpers and partials
import HandlebarsModule from 'handlebars';
import "../../qgds-bootstrap5-release/assets/node/handlebars.init.min.js";

// Search Input component
import "../../qgds-bootstrap5-release-precompiled/searchInput.precompiled.js";

export function searchForm() {
  const currUrlParameterMap = urlParameterMap();
  const searchProfile = currUrlParameterMap.profile && currUrlParameterMap.profile.trim() !== '' ? currUrlParameterMap.profile : DEFAULT_SEARCH_PROFILE;

  const getSearchInputHandlebars = () => {
    return (HandlebarsModule as any).templates["searchInput.hbs"]({
      "customClass": "search-component-inpage",
      "placeholder": "Search website",
      "inputID": SEARCH_INPUT_ID,
      "inputName": "query",
      "buttonID": SEARCH_SUBMIT_ID,
      "buttonType": "submit",
      "buttonLabel": "Search",
      "ariaLabel": "Search website",
      "hasDynamicSuggestions": true,
      "tags": {
        "collection": (currUrlParameterMap.collection || DEFAULT_SEARCH_COLLECTION),
        "profile": searchProfile,
        "numranks": DEFAULT_SEARCH_NUMRANKS,
        "tiers": "off",
        "suggestions": SEARCH_SUGGESTIONS_URL,
        "results-url": SEARCH_API_URL
      }
    });
  }

  // Temporary remove 'site-search's class to avoid conflict with QGDS search suggestions
  // @TODO: Solution for fetching 'suggestions' data.
  // 'site-search' is used as selector in QGDS for loading suggestions (accurate as per version QGDS-BS5 v2.1.14 - March 2025).
  return html`<form action="#" role="search" class="site-search-inpage qld-search-inpage-form" novalidate="true">
                ${unsafeHTML(getSearchInputHandlebars())}
              </form>`;

}
