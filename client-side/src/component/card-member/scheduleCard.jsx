import {Link} from 'react-router-dom'
import { HiMiniUserGroup, HiOutlineTrash } from "react-icons/hi2";
import { useState, useEffect } from "react";
import {scheduleList, memberPerform} from '../../../libs/member-list.js'
import { LuPencilLine } from "react-icons/lu";

const scheduleCard = ({item, isActive}) => {
  const [member, setMember] = useState([])
  const validateBg = item.setlist == 'rkj' ? 'before:bg-black' : item.setlist == 'cmr' ? 'bg-[#F7F5E8]' : item.setlist == 'trainee' ? 'bg-[#BCFFBC]' : null
  
  const id = item.id

// GET MEMBER PERFORM ON BOTTOM
  const getMemberPerform = (id) => {
        memberPerform(`/memberPerform/${id}`)
        .then(datas => setMember(datas))
    }
  

  useEffect(() => {
    getMemberPerform(id)
  }, [member])
  





  return(
    <Link to={`${item.setlist == "event" ? item.link : 
      `/detail/schedule/${item.id}`}`} className={`w-full shadow-md  rounded-lg overflow-hidden relative before:bg-red-500 
         duration-500 cursor-default`} key={item.id}>
        
        <div className={`w-full h-32 z-20 relative object-cover relative before:absolute before:w-full before:h-full before:-z-10 before:
          ${validateBg}
        `}>
            <img src={`http://localhost:3000/schedule/images/${item.setlist}.jpg`} className='w-full h-full object-contain z-20' />
        </div>
            {/*TITLE CONTENT*/}
        <div className='p-2 pb-3'>
            <h3 className='font-poppins mt-3 font-medium text-red-500'>{item.title}</h3>

            {/*DATE CONTENT*/}
            <div className="flex text-[13px] font-poppins text-gray-400 gap-x-1 mt-2">
                {
                    item.setlist == "event" ? <p className='hidden'>{item.time}</p> : <p className='block'>{item.time},</p>
                }
                <p className='capitalize'>{item.date}</p>
            </div>
            
            {/*MEMBER LENGTH CONTENT*/}
            {
            member?.length == 0 ? null : 
            <div className='flex items-center gap-x-3 mt-4'>
            <span className='text-red-500'><HiMiniUserGroup size={24} /></span>
            <h3 className='text-[14px] text-gray-400 font-poppins'>{member?.length} Member</h3>
            </div>
            }
            
            
            {/*IS ADMIN LOGIN CONTENT*/}
            {isActive ? 
            <div className='flex items-center mt-3'>
              <Link class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm text-center p-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 hover:cursor-pointer">
              <LuPencilLine size={18}/>
              </Link>
              <Link class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm p-2 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 hover:cursor-pointer">
              <HiOutlineTrash size={18}/>
              </Link>
            </div> : null
            }
            
            
        </div>
    </Link>  
    
    
    
    
  )
}

export default scheduleCard