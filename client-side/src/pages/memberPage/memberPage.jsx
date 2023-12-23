import axios from 'axios'
import {useState, useEffect} from 'react'
import Card from "../../component/card-member/card-member"
import {memberList} from '../../../libs/member-list.js'

const memberPage = () => {
  const [data, setData] = useState([])
  
      
  useEffect(() => {
      memberList("member/memberList")
      .then(datas => setData(datas))
  }, [])
  
  
  
  return (
    <div className="p-3 pt-6 pb-14">
      <h2 className='text-xl font-poppins text-red-600 font-medium'>Member Live</h2>
      <div className="w-full flex justify-between flex-wrap p-2">
      
        {
          data?.map((item) => <Card item={item} key={item.id}/>)
        }
        
      </div>
    
    
    
    
    </div>
  )
}

export default memberPage
