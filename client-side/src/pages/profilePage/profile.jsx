import {useState, useEffect} from "react"
import axios from "axios"
const profile = () => {
  const [data, setData] = useState([])
  
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get("http://localhost:3000/user/profileUser")
    .then(res => setData(res.data.user))
  })
  
  
  return (
    <div>
      <p>{data.username}</p>
      <p>{data.bio}</p>
      <p>{data.gender}</p>
    </div>
    
    
  )
}

export default profile