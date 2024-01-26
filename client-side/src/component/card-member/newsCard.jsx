import { SlCalender } from "react-icons/sl";
import { LuPencilLine } from "react-icons/lu";
import { HiMiniUserGroup, HiOutlineTrash } from "react-icons/hi2";
import {formatDate} from "../../../libs/formatDate.js"
import {Link} from 'react-router-dom'
import {Button} from 'flowbite-react'
import {useState, useEffect} from 'react'
import {newsDelete} from '../../../libs/news.js'


const newsCard = ({ item, isActive }) => {
  const [date, setDate] = useState()
  const dateString = item.date
  
  useEffect(()=> {
    setDate(formatDate(dateString))
  },[])
  
  const handleDelete = () => {
    const confir = confirm(`yakin ingin menghapus ${item.title}`);
    if(confir){
      newsDelete(`${item.id}`).then(resp => {
        if(resp.message == 'success') {
          location.reload()
        } else{
          alert('gagal menghapus')
        }
      })
    } else{alert(`batal menghapus ${item.title}`)}
  }
  const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;



    return (
        <li className="mb-6 ms-6 relative shadow-md rounded-md border border-red-600">
          <Link to={item.link} className='relative'>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-red-600 rounded-full ring-8 ring-white dark:ring-red-800 dark:bg-red-700 -left-[36px]">
                <SlCalender size={14} className="text-white" />
            </span>
            
            <div className='pl-4 p-3'>
            <h3 className="flex items-center mb-1  font-semibold text-gray-900 dark:text-white">
                <img src={`${IMAGE_URL}/news/images/${item.tema}.jpg`} className="w-16" />
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mt-2">
                Released on {date}
            </time>
            <p className="mb-4 font-poppins text-base font-medium text-black dark:text-white">
                {item.title}
            </p>
            </div>
          </Link>
          {/*IS ADMIN LOGIN CONTENT*/}
            {isActive ? 
            <div className='z-30 top-2 right-2 absolute flex gap-x-4'>
              <Link to={`/admin/edit/news/${item.id}`}
                 className='h-7 w-7 cursor-pointer font-bold flex items-center justify-center bg-green-600 rounded-full text-white'>
                <LuPencilLine size={19}/>
              </Link> 
              <Button color="failure" pill size='xs'
                onClick={handleDelete} className='p-1 h-7 w-7 cursor-pointer font-bold'>
                <HiOutlineTrash size={19}/>
              </Button> 
              
            </div> : null
            }
        </li>
    );
};
export default newsCard;
