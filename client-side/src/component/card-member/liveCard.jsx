const liveCard = ({item}) => {
  return(
    <div className='relative w-full bg-red-500 h-44 border-2 border-red-200 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-red-500 '>
      <img src={`${item.image}`} className='w-full relative object-cover h-full z-20'/>
      <h4 className='text-black z-20 absolute bottom-0'>{item.main_name}</h4>
    </div>  
    
  )
}

export default liveCard