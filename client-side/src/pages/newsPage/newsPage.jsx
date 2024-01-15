import CardNews from "../../component/card-member/newsCard.jsx"
import {useState, useEffect} from 'react'
import axios from 'axios'
import {getNewsList} from '../../../libs/news.js' 
import {Link} from 'react-router-dom'


const newsPage = ({isActive}) => {
  const [data, setData] = useState([])
  
  const authToken = () => {
    getNewsList()
    .then(res => setData(res))
  }
  
  
  useEffect(() => {
    authToken()
  }, [])
  
  return (
    <div className="px-6 pt-6 pb-14">
      
      <h3 className='font-poppins font-medium text-red-700 text-2xl'>NEWS</h3>
    
    <div className='flex'>
      {isActive ? 
        <Link to='/admin/post/news' className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm font-poppins px-5 py-2.5 text-center me-2 mt-3 inline-block dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 hover:cursor-pointer">Add</Link>
        : null}
    </div>
      
    
    
    
      <ol className="relative border-s border-red-400 dark:border-gray-700 mt-9">
      {data?.map((item) => <CardNews item={item} key={item.id} isActive={isActive}/>)
      }
      </ol>
      
    </div>
  )
}

export default newsPage