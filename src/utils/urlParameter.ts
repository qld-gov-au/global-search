export const urlParameterMap = () => {
  const url = new URL(window.location.href)
  const urlParams = new URLSearchParams(url.search)
  return {
    query: urlParams.get('query') || '',
    profile: urlParams.get('profile') || '',
    label: urlParams.get('label') || '',
    filter: urlParams.get('filter') || '',
    numRanks: parseInt(urlParams.get('num_ranks') as string) || 0,
    startRank: parseInt(urlParams.get('start_rank') as string) || 1,
    collection: urlParams.get('collection') || '',
    scope: urlParams.get('scope') || '',
    activePage: parseInt(urlParams.get('page') as string) || 1
  }
}
