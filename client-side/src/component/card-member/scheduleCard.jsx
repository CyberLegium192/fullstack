import {Link} from 'react-router-dom'
import { HiMiniUserGroup } from "react-icons/hi2";
import { useState, useEffect } from "react";
import {scheduleList, memberPerform} from '../../../libs/member-list.js'

const scheduleCard = ({item}) => {
  const [member, setMember] = useState([])
  const validateBg = item.setlist == 'rkj' ? 'before:bg-black' : item.setlist == 'cmr' ? 'bg-[#F7F5E8]' : item.setlist == 'trainee' ? 'bg-[#BCFFBC]' : null
  
  const validateTitle = item.setlist == "rkj" ? 'aturan anti cinta' : item.setlist == 'cmr' ? 'cara meminum ramune' : item.setlist == 'trainee' ? 'trainee' : item.setlist == "tunas" ? "tunas di balik seragam" : null
  
  const id = item.id
  
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
         duration-500 cursor-default hover:-translate-y-3`} key={item.id}>
        
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

        </div>

    </Link>  
    
    
    
    
  )
}

export default scheduleCard