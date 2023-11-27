import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const profile = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get("http://localhost:3000/user/profileUser")
    .then(res => {
      if(res.data.user){
        setData(res.data.user)
      } else if(res.data.error == 'Token tidak disediakan'){
        // setData("errorr")
        navigate("/login")
      }
      console.log(res)
    })
  }, [])
  
  
  return (
    <div>
      <p>{data.username}</p>
      <p>{data.bio}</p>
      <p>{data.gender}</p>
    </div>
    
    
  )
}

export default profile