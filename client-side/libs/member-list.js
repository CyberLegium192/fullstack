export const memberList = async (source) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API}/${source}`)
    const data = await response.json()
    return data.results
}

export const scheduleList = async (source) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_API}/schedule/${source}`)
  const data = await response.json()
  return data.schedule
}

export const memberPerform = async (source) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_API}/schedule${source}`)
  const data = await response.json()
  return data.memberPerform
}

export const getNewsList = async () => {
  const response = await fetch(`${import.meta.env.VITE_BASE_API}/news/newsList`)
  const data = await response.json()
  return data.news
}
