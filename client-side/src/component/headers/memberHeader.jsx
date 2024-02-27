
import {motion} from 'framer-motion'

const memberDetailHeader = ({item}) => {
  const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;
  return(
    <div className='grid grid-cols-4 pt-6'>
        <motion.img src={`${IMAGE_URL}/profile/${item.profile}`} className='h-[155px] object-top object-cover w-full rounded-xl ring-1 ring-slate-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' alt='member profile'initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}  
      transition={{ duration: 0.5, delay: 0.5 }} />
        
        
      <div className='col-span-3 pt-5 py-3 px-7'>
        <motion.p className='font-poppins font-[500] tracking-wider text-xl text-red-700 capitalize' 
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}  
        transition={{ duration: 0.5, delay: 0.6 }} > {item.firstname} {item.lastname}</motion.p>
        
        <motion.span className='font-poppins text-base text-red-700 capitalize mt-3 inline-block'
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}  
        transition={{ duration: 0.5, delay: 0.7 }}
        >{item.jiko}</motion.span>
      </div>
    </div>
    
  )
}


export default memberDetailHeader