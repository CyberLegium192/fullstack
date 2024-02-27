import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
const mediaSosial = ({item}) => {
  const igUrl = "https://instagram.com/"
  const twitUrl = "https://twitter.com/"
  const ttUrl = "https://tiktok.com/"
  const srUrl = "https://www.showroom-live.com/"
  
  return(
    <>
    <ul className='grid grid-cols-3 mt-4'>  
      <motion.li 
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}  
        transition={{ duration: 0.8, delay: 0.8 }}>
      <Link to={`${igUrl}${item.instagram}`} className='inline-block flex gap-x-2 items-center'>
        <div className='bg-red-600 w-7 h-7 flex items-center justify-center rounded-full'>
        <GrInstagram size={20} className='text-white'/>
        </div>
         <p className='text-red-500 font-poppins font-medium text-base line-clamp-1'>{item.instagram}</p>
         </Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}  
        transition={{ duration: 0.9, delay: 0.9 }}>
        <Link to={`${ttUrl}${item.tiktok}`} className='inline-block flex gap-x-2 items-center'>
        <div className='bg-red-600 w-7 h-7 flex items-center justify-center rounded-full'>
        <FaTiktok size={20} className='text-white'/>
        </div>
         <p className='text-red-500 font-poppins font-medium text-base line-clamp-1'>{item.tiktok}</p>
         </Link>
      </motion.li>
      <motion.li 
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}  
        transition={{ duration: 1, delay: 1 }}>
      <Link to={`${twitUrl}${item.tweet}`} className='inline-block flex gap-x-2 items-center'>
        <div className='bg-red-600 w-7 h-7 flex items-center justify-center rounded-full'>
        <BsTwitterX size={19} className='text-white'/>
        </div>
         <p className='text-red-500 font-poppins font-medium text-base line-clamp-1'>{item.tweet}</p>
         </Link>
      </motion.li>
    </ul>  
    <motion.Link to={`${srUrl}${item.showroom}`} className="py-2 px-4 ring-2 ring-red-500 text-red-500 rounded-lg font-poppins text-lg inline-block mt-7 hover:decoration-0"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}  
        transition={{ duration: 1.1, delay: 1.1 }}>buka showroom member</motion.Link>
    </>
  )
}
export default mediaSosial