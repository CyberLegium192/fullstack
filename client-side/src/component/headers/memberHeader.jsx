


const memberDetailHeader = ({item}) => {
  const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;
  return(
    <div className='grid grid-cols-4 pt-6'>
        <img src={`${IMAGE_URL}/profile/${item.profile}`} className='h-[155px] object-top object-cover w-full rounded-xl ring-1 ring-slate-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' alt='member profile' />
        
        
      <div className='col-span-3 pt-5 py-3 px-7'>
        <p className='font-poppins font-[500] tracking-wider text-xl text-red-700 capitalize'>{item.firstname} {item.lastname}</p>
        <span className='font-poppins text-base text-red-700 capitalize mt-3 inline-block'>{item.jiko}</span>
      </div>
    </div>
    
  )
}


export default memberDetailHeader