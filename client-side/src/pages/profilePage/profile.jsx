import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import ProfileHeader from '../../component/profile-headers/profile-headers.jsx'

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
        navigate("/login")
      }
      console.log(res)
    })
  }, [])
  
  
  return (
    <div className='pt-5 px-2'>
      <ProfileHeader avatar={data.avatar}/>
      <p className='text-lg mt-4 font-poppins font-bold p-3'>{data.username}</p>
    </div>
    
    
  )
}

export default profile