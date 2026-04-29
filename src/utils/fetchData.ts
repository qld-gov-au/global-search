import { render } from 'lit-html'
import { SEARCH_API_URL, SEARCH_SUGGESTIONS_URL, SEARCH_RESULTS_CONTAINER_ID } from './constants'
import { loadingTemplate } from '../template/loading'

// Utility function to build fetch API URL, based on provided URLSearchParams string or full URL
const buildFetchUrl = (url: string, isSuggestion: boolean = false): string => {
  let query = url || ''

  try {
    // remove leading ? if present
    if (query.startsWith('?')) {
      query = query.slice(1)
    } else {
      // if a full URL was passed, extract its search params
      const maybeUrl = new URL(query, location.origin)
      query = maybeUrl.search ? maybeUrl.search.slice(1) : query
    }
  } catch (e) {
    // if URL parsing fails, fallback to original value
    console.error('Error parsing URL:', e)
  }

  const separator = query ? '?' : ''
  if (isSuggestion) {
    return `${SEARCH_SUGGESTIONS_URL}${separator}${query}`
  }
  return `${SEARCH_API_URL}${separator}${query}`
}

// Utility function to throw HTTP errors and their respective messages
const throwHttpError = (response: Response): void => {
  const status = response.status
  let message: string

  switch (status) {
    case 400:
      message = 'HTTP 400 - Invalid requested resource.'
      break
    case 401:
      message = 'HTTP 401 - Authentication required to requested resource.'
      break
    case 403:
      message = 'HTTP 403 - Access denied to requested resource.'
      break
    case 404:
      message = 'HTTP 404 - Resource not found.'
      break
    default:
      if (status >= 500 && status < 600) {
        message = `HTTP ${status} - Server Error. Server encountered an error while processing requested resource.`
      } else {
        message = `Fetch error: ${status} ${response.statusText}`
      }
  }

  throw new Error(message)
}

/**
 * Fetch data from Search API (built from URL params)
 * With fetch error and slow responses handling
 * @param url URLSearchParams string or full URL to build fetch API URL
 * @returns response JSON data or throws error
 */
export const fetchData = async (url: string, isSuggestion: boolean = false) => {
  const fetchUrl = buildFetchUrl(url, isSuggestion)

  // Set up AbortController
  // timeouts for slow response: display UI feedback and cancel Fetch request
  const controller = new AbortController()
  const { signal } = controller

  const uiMaxTimeout = 5 * 1000 // 5 seconds
  const requestMaxTimeout = uiMaxTimeout * 3

  // If data fetching takes longer than uiMaxTimeout, display 'slow' loading message
  const uiTimer = setTimeout(() => {
    render(loadingTemplate('Loading takes longer than usual...'), document.getElementById(SEARCH_RESULTS_CONTAINER_ID)!)
  }, uiMaxTimeout)

  // If data fetching takes longer than requestMaxTimeout, abort the fetch request to prevent hanging
  const abortTimer = setTimeout(() => {
    controller.abort(`The Search server took too long to respond ${requestMaxTimeout}s`)
  }, requestMaxTimeout)

  // Perform fetch request with abort signal
  try {
    const response = await fetch(fetchUrl, { signal })

    if (!response.ok) {
      throwHttpError(response)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  } finally {
    clearTimeout(uiTimer)
    clearTimeout(abortTimer)
  }
}
