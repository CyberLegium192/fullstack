import {Link} from 'react-router-dom'
import { FaPencil } from "react-icons/fa6";
import {useState, useEffect} from 'react'
import ModalAvatar from '../../component/modal/changeAvatar.jsx'

const profileHeader = ({avatar, updateAvatar, data}) => {
  const [profile, setProfile] = useState(null)
  const [openModal, setOpenModal] = useState(false);


  
  return(
    <>
    <div className='flex p-2 gap-x-4 w-full'>
      <div className='h-26 relative w-24 flex relative flex-col items-center'>
        <img src={`http://localhost:3000/assets/${avatar == "user" || avatar == 'admin' || !avatar ? 'f2.png' : avatar}`} 
        className='border-2 border-slate-700 w-full rounded-full object-cover h-24' alt='profile'/>
        
        <button onClick={() => setOpenModal(!openModal)} className='text-red-500 text-poppins cursor-pointer z-20 text-[16px] mt-2 font-medium'
        aria-label="modal button">Ganti Avatar
        </button>
      </div>
      
      <ul className='flex items-center px-7 justify-between w-[75%] text-center font-poppins text-red-600 font-medium capitalize'>
        <li className='text-xl'>0
          <p className='text-normal mt-1'>lagu disukai</p>
        </li>
        <li className='text-xl'>0
          <p className='text-normal mt-1'>tulisan</p>
        </li>
        <li>
          <Link to={`edit/user/${data?.id}`} aria-label="edit user"><FaPencil size={22}/></Link>
        </li>
      </ul>
    </div>  
    
    
    
    <ModalAvatar setOpenModal={setOpenModal} openModal={openModal} updateAvatar={updateAvatar} />
    
    
    
    
    
    </>
    
    
    
    
  )
}

export default profileHeader