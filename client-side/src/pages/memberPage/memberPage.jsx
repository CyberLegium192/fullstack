import axios from 'axios'
import {useState, useEffect} from 'react'


const memberPage = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/get/member')
    .then(datas => setData(datas.data.data))
  }, [])
  
  
  const submit =()=>{
    console.log(data)
  }
  
  
  
  return (
    <div className="p-6 pt-10">
      <h2>MEMBER CARD</h2>
      
      <div className="flex">
      {
        data.map((item) => )
      }
      </div>
      
    
    
    
    
    </div>
  )
}

export default memberPage