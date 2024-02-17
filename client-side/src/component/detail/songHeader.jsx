import { IoHeartOutline, IoHeart  } from "react-icons/io5";
import { useState, useEffect } from "react";
import {getLikesUser, postLikes, deleteLikes, getTotalLikeSong } from '../../../libs/songs.js'



const songHeader = ({item}) => {
  const user_id = localStorage.getItem('id')
  const [like, setLike] = useState(false)
  const [likes, setLikes] = useState()
  const [totalLikes, setTotalLikes] = useState()
  
  
  
  const currentLikes = item.love + totalLikes
  let changeType = currentLikes.toString()
  let mathLikes = changeType.length > 3 ? changeType.substring(0, 2) : '' 
  mathLikes += changeType.length > 3 ? 'Rp' : changeType;
  
  useEffect(() => {
    const title = item.title
    getLikesUser(user_id).then(res => {
        const filterring = res.filter(like => like.title === title)
        if(filterring.length == 1){setLikes(true)}
        
    })
    getTotalLikeSong(title)
    .then(res => setTotalLikes(res.length))
  }, [likes,totalLikes, item.title])
  
  const handleLike = () => {
    setLike(!like)
    if (!like) {
      const values = {
        setlist: item.setlist,
        title: item.title,
        id_user: user_id
      }
      postLikes(values)
    }else{
      deleteLikes(item.title, user_id)
    }
  }
  
  
  
  
  return(
  <div className='flex justify-between'>
    <div className='pe-2'> 
      <h3 className='text-xl text-red-500 font-poppins font-[600] tracking-wider capitalize line-clamp-2'>{item.title}</h3>
      <p className='text-lg text-gray-400 my-1 font-poppins font-medium capitalize '>{item.setlist}</p>
      <span className='font-poppins text-lg font-medium text-slate-400 capitalize'>{item.view}x ditonton</span>

    </div>
  
    <div className='w-32 flex flex-col items-center select-none'>
    
      {
        like || likes ? <IoHeart size={43} className='text-red-500 duration-1000 cursor-pointer' onClick={handleLike}/> : <IoHeartOutline size={43} className='text-red-500 duration-1000 cursor-pointer' onClick={handleLike}/>
      }
      
      
      <p className='text-center text-base font-poppins text-gray-500'>{mathLikes} suka</p>
    </div>
    
    
    
    
  </div>
    
    
  )
}
export default songHeader