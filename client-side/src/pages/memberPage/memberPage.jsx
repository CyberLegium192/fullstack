import axios from 'axios'
import {useState, useEffect} from 'react'
import Card from "../../component/card-member/card-member"

const memberPage = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/get/member')
    .then(datas => setData(datas.data.data))
  }, [])
  
  
  
  return (
    <div className="p-3 pt-10 pb-14">
      <h2>MEMBER CARD</h2>
      
      <div className="w-full flex justify-between flex-wrap p-2">
      {
        data.map((item) => <Card item={item} key={item.id}/>) 
      }
      </div>
      
    
    
    
    
    </div>
  )
}

export default memberPage