import { GrNotes } from "react-icons/gr";
import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import ProfileHeader from '../../component/profile-headers/profile-headers.jsx'
import {updateAvatar, getProfile, getProfilePage} from '../../../libs/userLogin.js'

const profile = () => {
  const [data, setData] = useState([])
  const [datas, setDataAuth] = useState([])
  const [id, setId] = useState()
  const [newToken, setNewToken] = useState('');
  axios.defaults.withCredentials = true
  const navigate = useNavigate()
  
  const handleUpdateAvatar = async (avatar) => {
    const formData = new FormData()
    formData.append('avatar', avatar)
    try {
      const id = data.id
      const token = data.token
      updateAvatar(id, formData, token)
      .then(resp => {
        if(resp.message == 'update avatar success'){
          location.reload();
        } else{alert('gagal mengubah avatar, server erorr')}
      })
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  };
  
  
  
  const fethcing = () => {
    const dataToken = datas.token
    getProfile(newToken, dataToken)
    .then(res => {
      if(res.user){
        setDataAuth(res.user)
        setId(res.user.id)
      } else if(res.error == 'Token tidak disediakan'){
        navigate("/login")
      }
    })
  }
  
  useEffect(() => {
    fethcing()
  }, [id])
  useEffect(() => {
    getProfilePage(`${datas.id}`)
    .then(res => {
      setData(res)
      localStorage.setItem('user', res?.role)
    })
  }, [id])
    
  
  
  return (
    <div className='pt-3 px-2 w-full h-full'>
      <ProfileHeader avatar={data?.avatar} updateAvatar={handleUpdateAvatar} data={data}/>
      <p className='text-lg font-poppins font-bold p-3'>{data?.username}</p>
      <p className='text-lg -mt-4 font-poppins text-gray-400 font-medium p-3'>{data?.bio}</p>
      
      <div className='w-full p-3  h-3/5 flex items-center justify-center flex-col'>
        
          <GrNotes size={60} className='text-red-600 mb-6'/>
          <span className='text-lg tracking-wide font-poppins font-medium'>Tidak ada blog untuk saat ini</span>
          
      </div>
      
      
      
    </div>
    
    
  )
}

export default profile