import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { HiMiniUserGroup, HiOutlineTrash } from "react-icons/hi2";
import { LuPencilLine } from "react-icons/lu";
import {formatDate} from "../../../libs/formatDate.js"
import {memberPerform, deleteSchedule} from '../../../libs/schedule.js'
import {Button} from 'flowbite-react'


const scheduleCard = ({item, isActive}) => {
  const [member, setMember] = useState([])
  const [date, setDate] = useState()
  const id = item.id
  const dateString = item.date
  
  const validateBg = item.setlist == 'rkj.jpg' ? 'bg-black' :
    item.setlist == 'cmr.jpg' ? 'bg-[#00BEE2]' : 
    item.setlist == 'trainee.jpg' ? 'bg-[#BCFFBC]' : 
    item.setlist == 'panjama.jpg' ? 'bg-[#1E2337]' :
    item.setlist == 'event.jpg' ? 'bg-[#2F5597]' : null
  
  
  
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
    <div className='w-[47%] shadow-lg rounded-lg overflow-hidden relative before:bg-red-500 hover:no-underline duration-500 cursor-default pb-3'>
    <Link to={`${item.setlist == "event.jpg" ? item.link : 
      `/detail/schedule/${item.id}`}`} className='no-underline' key={item.id}>
        
        <div className={`w-full h-32 z-20 relative object-cover relative before:absolute before:w-full before:h-full before:-z-10
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
            {/*member?.length == 0 ?  null : */}
            <div className={`items-center gap-x-3 
              mt-1 flex`}>
              <span className='text-red-500'><HiMiniUserGroup size={22} /></span>
              <h3 className='text-[14px] text-gray-400 font-poppins'>
                {member?.length == 0 ? 'no' : member.length } Member
              </h3>
            </div>
            
            
            
            
            
        </div>
    </Link>  
            {/*IS ADMIN LOGIN CONTENT*/}
            {isActive ? 
            <div className='absolute z-30 top-0 w-full'>
              <Link to={`/admin/edit/schedule/${id}`}
                 className='h-10 w-10 cursor-pointer font-bold absolute -left-2 -top-2 flex items-center justify-center bg-green-600 rounded-full text-white'>
                <LuPencilLine size={17}/>
              </Link> 
              <Button color="failure" pill size='xs'
                onClick={(e) => handleDelete(e)} className='p-1 h-10 w-10 cursor-pointer font-bold
                absolute -right-2 -top-2'>
                <HiOutlineTrash size={17}/>
              </Button> 
              
            </div> : null
            }
    </div>
    
    
    
  )
}

export default scheduleCard