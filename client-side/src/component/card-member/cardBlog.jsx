import { LiaCommentDots } from "react-icons/lia";

const blogCard = ({item, handleComment}) => {
  const IMAGE_URL_PROFILE = import.meta.env.VITE_BASE_URL_IMAGE;
  const IMAGE_URL_COVER = import.meta.env.VITE_BASE_URL_IMAGE;
  
  
  return(
    <div className='mb-8'>
      <CardHeader IMAGEURL={IMAGE_URL_PROFILE} item={item}/>
      {/*CONTENT*/}
      <div className='ps-16 mt-3'>
        {
          item.cover ? <div className='w-full h-[210px] bg-[#7243439f] overflow-hidden rounded-xl'>
          <img src={`${IMAGE_URL_COVER}/blog/cover/${item.cover}`} className='w-full h-[210px] object-contain'/>
        </div> : null
        }
        
        
        <div className='p-2 pr-3 mt-2'>
          <h2 className='text-black font-poppins font-medium text-lg line-clamp-2'>{item.title}</h2>
          <p className='font-poppins font-normal text-[15px] mt-2'>{item.dest}</p>
        </div>
        
        <div className='p-1 mt-2 cursor-pointer select-none flex gap-x-3 items-center' onClick={e => handleComment(item.id)}>
          <LiaCommentDots size={30} className='text-red-500'/>
          <p className='text-black text-sm font-poppins font-normal'>0 Komentar</p>
        </div>
        
      </div>
    </div>
  )
}

const CardHeader = ({IMAGEURL, item}) => {
  return(
    <div className='flex gap-x-4 items-center'>
      <div className='w-[55px] h-[55px]'>
      <img src={`${IMAGEURL}/assets/${item.profile}`} className='w-full rounded-full h-full object-cover' />
      </div>
      <div className=''>
        <h4 className='font-poppins font-medium text-lg text-black'>{item.username}</h4>
        <p className='font-poppins text-sm capitalize text-gray-600'>{item.date}</p>
      </div>
    </div>
  )
}



export default blogCard