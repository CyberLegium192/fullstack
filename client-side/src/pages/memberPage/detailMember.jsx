import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getMemberById} from '../../../libs/member-list.js'
import ProfileHeader from '../../component/headers/memberHeader.jsx'
import StatusMember from '../../component/detail/statusMember.jsx'
import JadwalMember from '../../component/detail/jadwal.jsx'
import BiodataMember from '../../component/detail/biodata.jsx'
import MediaSosial from '../../component/detail/mediaSosialMember.jsx'
import { FaPeopleGroup } from "react-icons/fa6";
import {motion} from 'framer-motion'



const detailPage = () => {
  const [data, setData ] = useState([])
  const {id} = useParams()
  
  useEffect(() => {
    getMemberById(id)
    .then(res => setData(res))
  }, [])
  
  return(
    <section className='px-5 pb-40'>
      <ProfileHeader item={data}/>
      <StatusMember item={data}/>
      
      <motion.h3 className='font-medium font-poppins text-xl text-red-500 capitalize'
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.5, delay: 0.5 }}
      >biodata</motion.h3>
      <BiodataMember item={data}/>
      
      <motion.h3 className='font-medium font-poppins text-xl text-red-500 capitalize mt-7'
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}  
        transition={{ duration: 0.7, delay: 0.7 }}>media sosial</motion.h3>
      <MediaSosial item={data}/>
      
      
      
      <div className="p-5 bg-red-200 rounded-lg mt-5 flex gap-x-3 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 0.9, delay: 0.9 }}>
        <FaPeopleGroup size={90} className="text-red-600"/>
        </motion.div>
        <div>
          <motion.p className="font-poppins font-semibold text-xl text-red-500 mb-5"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 1, delay: 1 }}>{data.fanbase}</motion.p>
          <motion.Link to={``} className="py-2 px-4 ring-2 ring-red-500 text-red-600 rounded-lg font-poppins text-lg inline-block hover:no-underline"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}  
        transition={{ duration: 1.1, delay: 1.1 }}>kunjungi fanbase</motion.Link>
        </div>
      </div>
      
      <h3 className='font-medium font-poppins text-xl text-red-500 capitalize my-5'>jadwal</h3>
      <JadwalMember item={data}/>
      
      
    </section>  
  )
}

export default detailPage




