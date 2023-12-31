import { SlCalender } from "react-icons/sl";
import {Link} from 'react-router-dom'
import {formatDate} from "../../../libs/formatDate.js"
import {useState, useEffect} from 'react'

const newsCard = ({ item }) => {
  const [date, setDate] = useState()
  const dateString = item.date
  useEffect(()=> {
    setDate(formatDate(dateString))
  },[])
  
  
    return (
        <li className="mb-10 ms-6">
          <Link to={item.link}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full -start-3 ring-8 ring-white dark:ring-red-800 dark:bg-red-700">
                <SlCalender size={14} className="text-white" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                <img src={`http://localhost:3000/news/images/${item.tema}.jpg`} className="w-16" />
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on {date}
            </time>
            <p className="mb-4 font-poppins text-base font-medium text-black dark:text-white">
                {item.title}
            </p>
            
          </Link>
        </li>
    );
};
export default newsCard;
