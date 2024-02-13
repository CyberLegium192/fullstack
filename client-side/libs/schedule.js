import axios from 'axios';


// ==================== GETTING ==================== 
// SCHEDULE LIST
export const scheduleList = async (source) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_API}/schedule/scheduleList/search?q=${source}`)
  const data = await response.json()
  return data.results
}



// TEST 
export const validateBg = (item) => {
  const results = item.setlist == 'aturan anti cinta' ? 'bg-black' :
    item.setlist == 'cara meminum ramune' ? 'bg-[#00BEE2]' : 
    item.setlist == 'trainee' ? 'bg-[#BCFFBC]' : 
    item.setlist == 'pajama drive' ? 'bg-[#1E2337]' : 'bg-[#2F5597]'
    return results
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



// ==================== POST ==================== 

// POST SCHEDULE ONLY ||| EVENT
export const postScheduleEvent = async (values) => {
  const response = await axios.post(`${import.meta.env.VITE_BASE_API}/schedule/post/schedule`, values)
    return response.data
}


// ==================== PATCH ==================== 
// EDIT SCHEDULE EVENT
export const updateScheduleEvent = async (id, values) => {
  const response = await axios.patch(`${import.meta.env.VITE_BASE_API}/schedule/update/schedule/${id}`, values)
  return response.data
}
export const updateScheduleMember = async (id, values) => {
  const response = await axios.patch(`${import.meta.env.VITE_BASE_API}/schedule/update/member/${id}`, values)
  return response.data
}




// POST SCHEDULE AND MEMBER ||| PERFORM
export const postScheduleMember = async (values) => {
  const response = await axios.post(`${import.meta.env.VITE_BASE_API}/schedule/post/schedule/member`, values)
    return response.data
}



// ==================== DELETE ==================== 
// DELETE SCHEDULE 
export const deleteSchedule = async (id) => {
  const response = await axios.delete(`${import.meta.env.VITE_BASE_API}/schedule/${id}`)
  return response.data
}
