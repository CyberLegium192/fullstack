
import {motion} from 'framer-motion'

const memberStatus = ({item}) => {
  return(
    <ul className='grid grid-cols-3 gap-x-3 my-14'>
      <li>
        <motion.p className='text-lg capitalize font-poppins text-slate-600 font-medium'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.5, delay: 0.5 }} >jumlah show</motion.p>
        
        
        <motion.span className='text-xl capitalize font-poppins text-red-600 font-[500]'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.6, delay: 0.6 }}
      >{item.showall} Show</motion.span>
      </li>
      <li>
        <motion.p className='text-lg capitalize font-poppins text-slate-600 font-medium'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.7, delay: 0.7 }}
        >Generasi</motion.p>
        
        
        <motion.span className='text-xl capitalize font-poppins text-red-600 font-[500]'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.8, delay: 0.8 }} >Gen {item.gen}</motion.span>
      </li>
      <li>
        <motion.p className='text-lg capitalize font-poppins text-slate-600 font-medium'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.9, delay: 0.9 }}>Status/Tim</motion.p>
        
        
        <motion.span className='text-lg capitalize font-poppins text-red-600 font-[500]'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.9, delay: 0.9 }}>{item.status} JKT48</motion.span>
      </li>
    </ul>
    )
}

export default memberStatus