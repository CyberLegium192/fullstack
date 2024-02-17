import {useState, useEffect} from 'react'
import { FaCakeCandles } from "react-icons/fa6";
import {memberList} from '../../../libs/member-list.js'
import Card from '../card-member/card-member.jsx' 



const birthday = () => {
  const [data, setData] = useState([])  
  const [tanggal, setDate] = useState([])  
  
  
    const getting = () => {
      memberList("member/memberList")
      .then(resp =>  {return setData(resp)})
    }
    
    
    const currentMonth = new Date().toLocaleString('id-ID', { month: 'long' });
    
    
    const mapping = data.filter((item) => {
      const birthdayMonth = new Date(item.birthday).toLocaleString('id-ID', { month: 'long' });
      if (birthdayMonth === currentMonth) {
        return birthdayMonth === currentMonth
      } 
      
    })
  
  useEffect(() => {
    mapping
    getting()
  }, [])
  
  return(
  <div className='bg-red-400 px-5 pt-6'>
    <h3 className='text-white text-[17px] capitalize font-poppins tracking-wider flex font-medium gap-x-4 mb-3'><FaCakeCandles size={27}/> ulang tahun bulan ini nih...</h3>

    <div className='grid grid-cols-4 gap-x-5'>
      {
        mapping.map(item => item.status !== 'Anggota' ? null : <Card item={item} dynamic={'text-white'} key={item.id}/>)
      }
    </div>
    
    
  </div>  
  )
}
export default birthday