import {Link} from 'react-router-dom'
const liveCard = ({item}) => {
  
  return(
    <a href={`${item.streaming_url_list[0].url}`}>
    <div  className='relative w-full h-44 w-full'>
    <div className='w-full h-full absolute bg-black top-0 left-0 z-30 opacity-30'></div>
      <img src={`${item.image}`} className='w-full relative object-cover h-full z-20'/>
      <h4 className='text-white z-30 absolute bottom-0 font-poppins font-bold text-lg p-3'>{item.main_name}</h4>
    </div>  
    </a>
  )
}

export default liveCard