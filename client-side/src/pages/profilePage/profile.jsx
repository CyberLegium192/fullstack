import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import ProfileHeader from '../../component/profile-headers/profile-headers.jsx'


const profile = () => {
  const [data, setData] = useState([])
  const [datas, setDataAuth] = useState([])
  const [id, setId] = useState()
  const [newToken, setNewToken] = useState('');
  axios.defaults.withCredentials = true
  const navigate = useNavigate()
  
  const handleUpdateAvatar = async (avatar) => {
    console.log("console  ", avatar)
    const formData = new FormData()
    formData.append('avatar', avatar)
    try {
      const response = await axios.patch(
        `http://localhost:3000/user/profile/edit/avatar/${data.id}`, 
        formData,
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setDatas((prevData) => ({
        ...prevData,
        avatar: response.data.profile,
      }));
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  };
  const fethcing = () => {
    axios.get("http://localhost:3000/user/profileUser", {
      headers: {
        Authorization: `Bearer ${newToken || datas.token}`,
      },
    })
    .then(res => {
      if(res.data.user){
        setDataAuth(res.data.user)
        setId(res.data.user.id)
        
      } else if(res.data.error == 'Token tidak disediakan'){
        navigate("/login")
      }
    })
    
  }
  
  useEffect(() => {
    fethcing()
  }, [id])
  useEffect(() => {
    axios.get(`http://localhost:3000/user/profilePage/${datas.id}`)
    .then(res => {
      setData(res.data.results[0])
    })
  }, [id])
    
  
  
  
  return (
    <div className='pt-5 px-2'>
      <ProfileHeader avatar={data?.avatar} updateAvatar={handleUpdateAvatar} />
      <p className='text-lg mt-4 font-poppins font-bold p-3'>{data?.username}</p>
    </div>
    
    
  )
}

export default profile