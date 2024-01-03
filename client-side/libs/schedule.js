
// SCHEDULE LIST
export const scheduleList = async (source) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_API}/schedule/scheduleList/search?q=${source}`)
  const data = await response.json()
  return data.results
}

// GET MEMBER PERFORM
export const memberPerform = async (source) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_API}/schedule${source}`)
  const data = await response.json()
  return data.memberPerform
}

// GET SCHEDULE AND MEMBER BY ID
export const getScheduleId = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_API}/schedule/detail/schedule/${id}`)
  const data = await response.json()
  return data.results[0]
}

// DELETE SCHEDULE 
export const deleteSchedule = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_API}/schedule/${id}`, {
    method: "DELETE"
  })
  const data = await response.json()
  return data
}





export const postScheduleEvent = async (value) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_API}/schedule/post/schedule`)
    const data = await response.json()
    return data.results
}