
import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getMemberById} from '../../../libs/member-list.js'
import ProfileHeader from '../../component/headers/memberHeader.jsx'
import StatusMember from '../../component/detail/statusMember.jsx'
import JadwalMember from '../../component/detail/jadwal.jsx'
import BiodataMember from '../../component/detail/biodata.jsx'
import MediaSosial from '../../component/detail/mediaSosialMember.jsx'
import { FaPeopleGroup } from "react-icons/fa6";

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
      
      <h3 className='font-medium font-poppins text-xl text-red-500 capitalize'>biodata</h3>
      <BiodataMember item={data}/>
      <h3 className='font-medium font-poppins text-xl text-red-500 capitalize mt-7'>media sosial</h3>
      <MediaSosial item={data}/>
      
      <div className="p-5 bg-red-200 rounded-lg mt-5 flex gap-x-3 items-center">
        <FaPeopleGroup size={90} className="text-red-600"/>
        <div>
          <p className="font-poppins font-semibold text-xl text-red-500 mb-5">{data.fanbase}</p>
          <Link to={``} className="py-2 px-4 ring-2 ring-red-500 text-red-600 rounded-lg font-poppins text-lg inline-block hover:no-underline">kunjungi fanbase</Link>
        </div>
      </div>
      
      <h3 className='font-medium font-poppins text-xl text-red-500 capitalize my-5'>jadwal</h3>
      <JadwalMember item={data}/>
      
      
    </section>  
  )
}

export default detailPage




