import {Link} from 'react-router-dom'
import {validateBg} from '../../../libs/schedule.js'

const setlistSearch = ({item}) => {
  // const validateBg = item.setlist == 'aturan anti cinta' ? 'bg-black' :
  //   item.setlist == 'cara meminum ramune' ? 'bg-[#00BEE2]' : 
  //   item.setlist == 'trainee' ? 'bg-[#BCFFBC]' : 
  //   item.setlist == 'pajama drive' ? 'bg-[#1E2337]' : 'bg-[#2F5597]'
    
    const validate = validateBg(item)
    
    
  return(
    <div className='w-full shadow-lg rounded-lg overflow-hidden relative before:bg-red-500 hover:no-underline duration-500 cursor-default pb-3'>
    <Link to={`${item.song > 1 ? `/lagu/album/${item.setlist}` : `/lagu/${item.setlist}`} `} className='no-underline' key={item.id}>
        <div className={`w-full h-36 z-20 relative object-cover relative before:absolute before:w-full before:h-full before:-z-10
          ${validate}
        `}>
            <img src={`${item.cover}`} className='w-full h-full object-contain z-20' />
        </div>
            {/*TITLE CONTENT*/}
        <div className='px-3'>
            <p className='font-poppins mt-3  mb-2 font-medium text-red-500 text-[18px] line-clamp-1'>{item.setlist}</p>
            {/*DATE CONTENT*/}
            <div className="flex items-center text-[16px] font-poppins text-slate-500 font-medium gap-x-1 ">
                <span className='capitalize'>
                {
                  item.song > 1 ? 'album, ' : 'single, '
                } 
                {item.song}
                </span>
            </div>
        </div>
    </Link>  
    </div>
  )
}

export default setlistSearch