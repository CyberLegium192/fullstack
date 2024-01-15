import { Button } from 'flowbite-react';
import axios from "axios"

const setting = () => {
  axios.defaults.withCredentials = true
  const handleClick =()=>{
    localStorage.removeItem('user')
    axios.get("http://localhost:3000/api/v1/user/logout")
    .then(resp => {
      if (resp.data.status == "success") {
        location.href="/beranda"
      } else{alert("gagal logout")}
    })
  }
  
  return (
    <div>
      <Button color="failure" onClick={handleClick}>Logout</Button>
    </div>
    
  )
}

export default setting