import {useState, useEffect} from 'react'
import {getComment} from '../../../libs/blog.js'


const cardComment = ({popupComment, blogId, handleCloseComment  }) => {
  const [comment, setComment] = useState([])
  const blog_id = blogId
  useEffect(() => {
    getComment(blog_id)
    .then(res => setComment(res))
  }, [blogId])
  return (
    <div className={`w-full h-full fixed top-0 left-0 z-50 px-6 py-8 bg-[#00000082] ${popupComment ? "block" : "hidden"} `}>
      <div className='bg-white rounded-2xl w-full h-full  relative overflow-y-scroll px-6'>
      <div className='h-20 relative'>
        <button className='text-xl w-9 h-9 rounded-full bg-red-600 flex justify-center items-center font-bold text-white fixed top-5 right-5 leading-none' onClick={e => handleCloseComment(blog_id)}>x</button>
      </div>
        {
          comment.map(item => <BoxComment item={item}/>)
        }
        
        <div className='sticky w-full h-20 bg-red-500 bottom-0 left-0'>
          {/*THIS COMMENT INPUT */}
          
        </div>
      </div>
      
    </div>
  );
};
// COMMENT HEADER USER
const BoxComment = ({item}) => {
  const IMAGE_URL_PROFILE = import.meta.env.VITE_BASE_URL_IMAGE;
  
  return(
    <div className='grid grid-cols-5 mb-9 ring-2 ring-slate-300 p-3 rounded-xl shadow-lg'>
      <div className='flex justify-center'>
        <img  src={`${IMAGE_URL_PROFILE}/assets/${item.profile}`} className='h-14 w-14 rounded-full object-cover'/>
      </div>  
      <div className='col-span-4 font-poppins my-auto'>
        <p className='text-black font-semibold capitalize text-[16px] leading-none'>{item.username}</p>
        <p className='text-sm text-slate-500 font-medium' >{item.date}</p>
      </div>
      <div></div>
      <div className='col-span-4 pt-2'>
        <p className='text-base font-poppins font-medium text-slate-700'>{item.comment}</p>
      </div>
    </div>  
    
    
  )
}




export default cardComment;
