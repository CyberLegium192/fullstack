import { IoHeartOutline, IoHeart  } from "react-icons/io5";
import { useState } from "react";

const songHeader = ({item}) => {
  const [like, setLike] = useState(false)
  const handleLike = () => {
    setLike(!like)
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
        like ? <IoHeart size={43} className='text-red-500 duration-1000 cursor-pointer' onClick={handleLike}/> : <IoHeartOutline size={43} className='text-red-500 duration-1000 cursor-pointer' onClick={handleLike}/>
      }
      
      
      <p className='text-center text-base font-poppins text-gray-500'>{item.love} suka</p>
    </div>
    
    
    
    
  </div>
    
    
  )
}
export default songHeader