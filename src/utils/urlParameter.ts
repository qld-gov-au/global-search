import { DEFAULT_SEARCH_COLLECTION } from './constants'

export const urlParameterMap = () => {
  const url = new URL(window.location.href)
  const urlParams = new URLSearchParams(url.search)
  const rSpe = (str: string | '') => {
    return str?.replace(/[\\#+()$~%*?<>{}]/g, '')
  }

  const collectionParam = (urlParams.get('collection') || '').replace(/%7E/g, '~')

  // Exception 'qgov~sp-search'
  // Replace legacy Funnelback collection 'qgov~sp-search' with the DXP Funnelback defined on DEFAULT_SEARCH_COLLECTION.
  // To prevent breaking on some agencies that still have hardcoded 'qgov~sp-search' on their search form.
  const collection = collectionParam === 'qgov~sp-search' ? DEFAULT_SEARCH_COLLECTION : collectionParam

  return {
    query: rSpe((urlParams.get('query') || '').replace(/%2F/g, '/')),
    profile: rSpe(urlParams.get('profile') || ''),
    label: rSpe(urlParams.get('label') || ''),
    filter: rSpe(urlParams.get('filter') || ''),
    startRank: parseInt(urlParams.get('start_rank') as string) || 1,
    collection,
    scope: rSpe(urlParams.get('scope') || ''),
    activePage: parseInt(urlParams.get('page') as string) || 1
  }
}
