// MEMBER LIST
export const memberList = async (source) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API}/${source}`)
    const data = await response.json()
    return data.results
}

// MEMBER LIVE
export const liveShowroom = async (source) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL_LIVESHOWROOM}/api/rooms/${source}`)
  const data = await response.json()
  return data
}
