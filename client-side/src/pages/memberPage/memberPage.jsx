import axios from 'axios'
import {useState, useEffect} from 'react'
import Card from "../../component/card-member/card-member"
import LiveCard  from '../../component/card-member/liveCard.jsx'
import {memberList, liveShowroom} from '../../../libs/member-list.js'
import LiveCarousel from  '../../component/carousel/lieveCarousel.jsx'

const memberPage = () => {
  const [data, setData] = useState([])
  const [live, setLive] = useState([])
  
  
    const memberLive = () => {
      liveShowroom('onlives')
      .then(resp => {
        console.log(resp.data)
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
      <h2 className='text-xl font-poppins text-red-600 font-medium'>member live showroom</h2>

      <LiveCarousel live={live}/>
      
      <div className="w-full flex justify-start gap-x-3 flex-wrap p-2"> 
        {
          data?.map((item) => <Card item={item} key={item.id}/> )
       }
      </div> 
      
      
    </div>
  )
}

export default memberPage
