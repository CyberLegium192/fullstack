import {Link} from 'react-router-dom'
import { HiMiniUserGroup, HiOutlineTrash } from "react-icons/hi2";
import { useState, useEffect } from "react";
import {memberPerform, deleteSchedule} from '../../../libs/schedule.js'
import { LuPencilLine } from "react-icons/lu";
import {formatDate} from "../../../libs/formatDate.js"

const scheduleCard = ({item, isActive}) => {
  const id = item.id
  const dateString = item.date
  const [member, setMember] = useState([])
  const [date, setDate] = useState()
  const validateBg = item.setlist == 'rkj.jpg' ? 'before:bg-black' : item.setlist == 'cmr.jpg' ? 'bg-[#F7F5E8]' : item.setlist == 'trainee.jpg' ? 'bg-[#BCFFBC]' : null
  
  useEffect(()=> {
    setDate(formatDate(dateString))
  },[])


// GET MEMBER PERFORM ON BOTTOM
  const getMemberPerform = (id) => {
        memberPerform(`/memberPerform/${id}`)
        .then(datas => {
          setMember(datas)
        })
    }
  // DELETE SCHEDULE 
  const handleDelete = (id) => {
    const confir = confirm("yakin ingin menghapus ", +item.title);
    if(confir){
      deleteSchedule(`delete/schedule/${item.id}`)
    } else{alert('batal menghapus ', + item.title)}
  }
  

  useEffect(() => {
    getMemberPerform(id)
  }, [member])
  

  return(
    <div className={`w-full shadow-md rounded-lg overflow-hidden relative before:bg-red-500 no-underline duration-500 cursor-default`}>
    <Link to={`${item.setlist == "event.jpg" ? item.link : 
      `/detail/schedule/${item.id}`}`} key={item.id}>
        
        <div className={`w-full h-32 z-20 relative object-cover relative before:absolute before:w-full before:h-full before:-z-10 before:
          ${validateBg}
        `}>
            <img src={`http://localhost:3000/schedule/images/${item.setlist}`} className='w-full h-full object-contain z-20' />
        </div>
            {/*TITLE CONTENT*/}
        <div className='px-3'>
            <h3 className='font-poppins mt-3 font-medium text-red-500'>{item.title}</h3>

            {/*DATE CONTENT*/}
            <div className="flex items-center text-[13px] font-poppins text-gray-400 gap-x-1">
                {
                    item.setlist == "event" ? null : <p>{item.time},</p>
                }
                <span className='capitalize'>{date}</span>
            </div>
            
            {/*MEMBER LENGTH CONTENT*/}
            {
            member?.length == 0 ? null : 
            <div className='flex items-center gap-x-3 mt-1'>
              <span className='text-red-500'><HiMiniUserGroup size={22} /></span>
              <h3 className='text-[14px] text-gray-400 font-poppins'>{member?.length} Member</h3>
            </div>
            }
            
            
            
            
        </div>
    </Link>  
            {/*IS ADMIN LOGIN CONTENT*/}
            {isActive ? 
            <div className='flex items-center ml-3 gap-x-4 mt-3'>
              <Link to={`/admin/edit/schedule/${id}`} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm text-center p-1 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 hover:cursor-pointer">
              <LuPencilLine size={19}/>
              </Link>
              <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm p-1 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 hover:cursor-pointer" onClick={(e) => handleDelete(e)}>
              <HiOutlineTrash size={19}/>
              </button>
            </div> : null
            }
    </div>
    
    
    
  )
}

export default scheduleCard