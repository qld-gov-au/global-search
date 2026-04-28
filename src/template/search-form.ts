import { SEARCH_API_URL, SEARCH_SUGGESTIONS_URL, DEFAULT_SEARCH_COLLECTION, DEFAULT_SEARCH_PROFILE, DEFAULT_SEARCH_NUMRANKS, DEFAULT_SEARCH_DEFAULT_SUGGESTIONS, DEFAULT_SEARCH_DYNAMIC_SUGGESTIONS, SEARCH_INPUT_ID, SEARCH_SUBMIT_ID } from '../utils/constants'
import { html } from 'lit-html'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import { urlParameterMap } from '../utils/urlParameter'

// Import Handlebars library and QGDS bundled helpers and partials
import Handlebars from 'handlebars'
import QGDSBundle from '@qld-gov-au/qgds-bootstrap5/dist/assets/node/handlebars.init.min.js'

// Search Input component
import '../../qgds-bootstrap5-release-precompiled/searchInput.precompiled.js'

// Checking to avoid registering helpers and partials (QGDSBundle init) multiple times
// Using (!Handlebars.partials.searchInput) as a check since searchInput is used here
if (!Handlebars || !Handlebars.templates || !Handlebars.partials.searchInput) {
  QGDSBundle.init(Handlebars)
}

export function searchForm () {
  const currUrlParameterMap = urlParameterMap()
  const searchProfile = currUrlParameterMap.profile && currUrlParameterMap.profile.trim() !== '' ? currUrlParameterMap.profile : DEFAULT_SEARCH_PROFILE

  const getSearchInputHandlebars = () => {
    return (Handlebars as any).templates['searchInput.hbs']({
      customClass: 'search-component-inpage',
      placeholder: 'Search website',
      inputID: SEARCH_INPUT_ID,
      inputName: 'query',
      buttonID: SEARCH_SUBMIT_ID,
      buttonType: 'submit',
      buttonLabel: 'Search',
      ariaLabel: 'Search website',
      tags: {
        collection: (currUrlParameterMap.collection || DEFAULT_SEARCH_COLLECTION),
        profile: searchProfile,
        numranks: DEFAULT_SEARCH_NUMRANKS,
        tiers: 'off',
        suggestions: SEARCH_SUGGESTIONS_URL,
        'results-url': SEARCH_API_URL
      },
      hasDynamicSuggestions: DEFAULT_SEARCH_DYNAMIC_SUGGESTIONS,
      hasDefaultSuggestions: DEFAULT_SEARCH_DEFAULT_SUGGESTIONS,
      dynamicSuggestionsServiceLink: {
        href: '/queenslanders'
      },
      defaultSuggestions: {
        popularServicesTitle: 'Popular',
        popularServicesLink: {
          label: 'View more',
          href: '/queenslanders'
        },
        popularServices: [
          {
            title: 'Apply for leave now',
            link: 'https://www.forgov.qld.gov.au/pay-benefits-and-policy/leave/submit-a-leave-application'
          },
          {
            title: 'Apply for higher duties or relieving at level',
            link: 'https://www.forgov.qld.gov.au/recruitment-performance-and-career/starting-a-new-job/apply-for-higher-duties-or-relieving-at-level'
          },
          {
            title: 'Extend a temporary or casual employee',
            link: 'https://www.forgov.qld.gov.au/recruitment-performance-and-career/recruitment/extending-my-job/extend-a-temporary-or-casual-employee'
          },
          {
            title: 'Hire a staff member (recruitment)',
            link: 'https://www.forgov.qld.gov.au/recruitment-performance-and-career/recruitment'
          }
        ],
        categoriesTitle: 'Collection',
        categoriesLink: {
          label: 'View all',
          href: '/queenslanders'
        },
        categories: [
          {
            title: 'Search for directives, policies, circulars, and guidelines',
            link: 'https://www.forgov.qld.gov.au/pay-benefits-and-policy/directives-policies-circulars-and-guidelines'
          },
          {
            title: 'Employee pay and benefits',
            link: 'https://www.forgov.qld.gov.au/pay-benefits-and-policy/benefits/employee-pay-and-benefits'
          },
          {
            title: 'Queensland Shared Services',
            link: 'https://www.forgov.qld.gov.au/sandbox/archive/queensland-shared-services'
          },
          {
            title: 'Career development',
            link: 'https://www.forgov.qld.gov.au/recruitment-performance-and-career/career-development'
          }
        ]
      }
    })
  }

  // Avoid using 'site-search' class
  // QGDS uses it as selector for 'form submit' and 'input change' event binding (qgds-bootstrap5 v2.1.19 - April 2026)
  return html`<form action="#" role="search" class="site-search-inpage qld-search-inpage-form" novalidate="true">
                ${unsafeHTML(getSearchInputHandlebars())}
              </form>`
}
