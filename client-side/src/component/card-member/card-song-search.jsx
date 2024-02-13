import { Link } from 'react-router-dom'


const cardSongs = ({item}) => {
  const imageURL = import.meta.env.VITE_BASE_URL_IMAGE;
  const validateCover = item.setlist == 'original' ? item.title : item.setlist
  
  
  return(
   <Link to={`/lagu/${item.title}`} className='flex w-full mb-5 ring-1 ring-slate-200 overflow-hidden rounded-2xl shadow-md shadow-slate-200 p-1'>
    <img src={`${imageURL}/schedule/images/${validateCover}.jpg`} alt='setlist image' className='w-20 rounded-2xl'/>
    
    <div className='flex flex-col justify-center ml-4'>
      <p className='text-lg font-poppins text-red-500 font-semibold capitalize line-clamp-1 tracking-wide'>{item.title}</p>
      <span className='font-poppins text-base text-slate-400 font-medium'>Lirik Tersedia</span>
    </div>
    
   </Link> 
    
  )
}
export default cardSongs