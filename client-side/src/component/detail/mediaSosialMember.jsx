import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {Link} from 'react-router-dom'

const mediaSosial = ({item}) => {
  const igUrl = "https://instagram.com/"
  const twitUrl = "https://twitter.com/"
  const ttUrl = "https://tiktok.com/"
  const srUrl = "https://www.showroom-live.com/"
  
  return(
    <>
    <ul className='grid grid-cols-3 mt-4'>  
      <li>
      <Link to={`${igUrl}${item.instagram}`} className='inline-block flex gap-x-2 items-center'>
        <div className='bg-red-600 w-7 h-7 flex items-center justify-center rounded-full'>
        <GrInstagram size={20} className='text-white'/>
        </div>
         <p className='text-red-500 font-poppins font-medium text-base line-clamp-1'>{item.instagram}</p>
         </Link>
      </li>
      <li>
        <Link to={`${ttUrl}${item.tiktok}`} className='inline-block flex gap-x-2 items-center'>
        <div className='bg-red-600 w-7 h-7 flex items-center justify-center rounded-full'>
        <FaTiktok size={20} className='text-white'/>
        </div>
         <p className='text-red-500 font-poppins font-medium text-base line-clamp-1'>{item.tiktok}</p>
         </Link>
      </li>
      <li>
      <Link to={`${twitUrl}${item.tweet}`} className='inline-block flex gap-x-2 items-center'>
        <div className='bg-red-600 w-7 h-7 flex items-center justify-center rounded-full'>
        <BsTwitterX size={19} className='text-white'/>
        </div>
         <p className='text-red-500 font-poppins font-medium text-base line-clamp-1'>{item.tweet}</p>
         </Link>
      </li>
    </ul>  
    <Link to={`${srUrl}${item.showroom}`} className="py-2 px-4 ring-2 ring-red-500 text-red-500 rounded-lg font-poppins text-lg inline-block mt-7 hover:decoration-0">buka showroom member</Link>
    </>
  )
}
export default mediaSosial