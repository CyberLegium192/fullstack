import CardNews from "../../component/card-member/newsCard.jsx"
import {useState, useEffect} from 'react'
import axios from 'axios'
import {getNewsList} from '../../../libs/member-list.js' 

const newsPage = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    getNewsList()
    .then(res => setData(res))
  }, [])
  
  return (
    <div className="px-6 pt-6 pb-14">
      
      <h3 className='font-poppins font-medium text-red-700 text-2xl'>NEWS</h3>
    
      <ol className="relative border-s border-red-400 dark:border-gray-700 mt-9">
      {data?.map((item) => <CardNews item={item} key={item.id}/>)
      }
      </ol>
      
    </div>
  )
}

export default newsPage