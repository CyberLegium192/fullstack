import axios from 'axios'
import {useState, useEffect} from 'react'
import Card from "../../component/card-member/card-member"
import LiveCard  from '../../component/card-member/liveCard.jsx'
import {memberList, liveShowroom} from '../../../libs/member-list.js'
import LiveCarousel from  '../../component/carousel/lieveCarousel.jsx'
import { motion } from 'framer-motion'


const memberPage = () => {
  const [data, setData] = useState([])
  const [live, setLive] = useState([])
  
  
    const memberLive = () => {
    liveShowroom('onlives')
      .then(resp => {
        setLive(resp.data)
      })
    }
  useEffect(() => {
      memberList("member/memberList")
      .then(datas => setData(datas))
      memberLive()
  }, [])
  
  
  
  return (
    <div className="p-3 pt-6 pb-14">
      <h2 className='text-xl font-poppins text-red-600 font-medium mb-6'>member live showroom</h2>

      <LiveCarousel live={live}/>
      
      <div className="w-full grid grid-cols-4 justify-start gap-x-3 mt-5"> 
        {
          data?.map((item, index) => 
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}  
            transition={{ duration: 0.5, delay: index * 0.4 }}>
          <Card item={item}/> 
          </motion.div>
          )
        }
      </div> 
      
      
    </div>
  )
}

export default memberPage
