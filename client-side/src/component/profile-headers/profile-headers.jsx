import {Link} from 'react-router-dom'
import { FaPencil } from "react-icons/fa6";
const profileHeader = ({avatar}) => {
  
  
  return(
    <div className='flex p-4 gap-x-4'>
      <div className='h-24 w-24 flex flex-col items-center'>
        <img src={`http://localhost:3000/assets/${avatar == "user" ? 'f2.png' : avatar}`} 
        className='border-2 border-slate-700 h-24 w-24 rounded-full object-cover'/>
        <Link className='text-red-500 text-center font-poppins text-sm mt-2'>Ganti Avatar</Link>
      </div>
      
      <ul className='flex items-center px-6 justify-between w-5/6 text-center font-poppins text-red-600 font-medium capitalize'>
        <li className='text-xl'>0
          <p className='text-normal mt-1'>lagu di sukai</p>
        </li>
        <li className='text-xl'>0
          <p className='text-normal mt-1'>tulisan</p>
        </li>
        <li>
          <Link to='edit/user'><FaPencil size={20}/></Link>
        </li>
      </ul>
    
    
    
    
    
    </div>  
    
    
    
    
    
  )
}

export default profileHeader