

import {Link} from 'react-router-dom'

const cardMerch = ({item}) => {
  return(
    <Link to={item.link} className="shadow-lg inline-block shadow ring-1 ring-slate-400 rounded-lg overflow-hidden mx-1">
      <div className="w-full">
        <img src={item.image} className="h-44 rounded-lg w-full object-cover"/>
      </div>
      <div className="mt-5 pb-3 px-3">
        <p className="font-medium font-poppins line-clamp-2 text-base">{item.title}</p>
        <span className='text-base mt-3 inline-block font-poppins font-black tracking-wider'>RP {item.price}</span>
        
      </div>
    </Link>
  )
}

export default cardMerch