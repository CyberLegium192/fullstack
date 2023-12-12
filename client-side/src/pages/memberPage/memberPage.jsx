import axios from 'axios'
import {useState, useEffect} from 'react'
import Card from '../../component/card-member/card-member'

const memberPage = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(datas => setData(datas.data))
  }, [])
  
  
  const submit =()=>{
    console.log(data)
  }
  
  
  
  return (
    <div className="p-6 pt-10">
      <h2>MEMBER CARD</h2>
      
      <div className="grid grid-cols-4 gap-3">
      {
        data.map((item) => <Card />)
      }
      </div>
      
    
    
    
    
    </div>
  )
}

export default memberPage