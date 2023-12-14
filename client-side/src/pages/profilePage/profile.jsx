import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import ProfileHeader from '../../component/profile-headers/profile-headers.jsx'


const profile = () => {
  const [data, setData] = useState([])
  const [newToken, setNewToken] = useState("");
  axios.defaults.withCredentials = true
  const navigate = useNavigate()
  
  const handleUpdateAvatar = async (avatar) => {
    console.log("console  ", avatar)
    // try {
    //   const response = await axios.patch(
    //     "http://localhost:3000/user/profile/edit/avatar/1", 
    //     formData,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${data.token}`,
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );

    //   // Setelah berhasil, perbarui state
    //   setData((prevData) => ({
    //     ...prevData,
    //     avatar: response.data.profile,
    //   }));
    // } catch (error) {
    //   console.error("Error updating avatar:", error);
    // }
  };
  
  
  useEffect(() => {
    // axios.get("http://localhost:3000/user/profileUser", {
    //   headers: {
    //     Authorization: `Bearer ${newToken}`,
    //   },
    // })
    axios.get("http://localhost:3000/user/profileUser")
    .then(res => {
      if(res.data.user){
        setData(res.data.user)
      } else if(res.data.error == 'Token tidak disediakan'){
        navigate("/login")
      }
    })
  }, [])
  
  return (
    <div className='pt-5 px-2'>
      <ProfileHeader avatar={data.avatar} updateAvatar={handleUpdateAvatar} />
      <p className='text-lg mt-4 font-poppins font-bold p-3'>{data.username}</p>
    </div>
    
    
  )
}

export default profile