export const memberList = async (source) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API}/${source}`)
    const data = await response.json()
    return data
}

