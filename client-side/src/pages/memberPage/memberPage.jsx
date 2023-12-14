import axios from 'axios'
import {useState, useEffect} from 'react'
<<<<<<< HEAD
import Card from "../../component/card-member/card-member"
=======
import Card from '../../component/card-member/card-member'
>>>>>>> refs/remotes/origin/main

const memberPage = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(datas => setData(datas.data))
  }, [])
  
  
  
  return (
    <div className="p-3 pt-10 pb-14">
      <h2>MEMBER CARD</h2>
      
<<<<<<< HEAD
      <div className="w-full flex justify-between flex-wrap p-2">
      {
        data.map((item) => <Card item={item} key={item.id}/>) 
=======
      <div className="grid grid-cols-4 justify-between mt-5 gap-x-2 gap-y-4">
      {
        data.map((item) => <Card />)
>>>>>>> refs/remotes/origin/main
      }
      </div>
      
    
    
    
    
    </div>
  )
}

export default memberPage