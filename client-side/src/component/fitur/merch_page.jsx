import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useState, useEffect} from 'react'
import {getMerch} from '../../../libs/merch.js'
import CardMerch from "../card-member/card-merch.jsx"

const merch = () => {
  const [merch, setMerch] = useState([])
  const [deviceType, setDeviceType] = useState("tablet")
  
  useEffect(() => {
    getMerch().then(res => setMerch(res))
    // .then(resp => console.log(resp))
  })
  
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1
    }
  };
  
  
  return(
    <section className='bg-white pt-9 pb-24'>
    <div className='pt-5 px-5'>
      <p className='text-2xl text-black font-poppins font-medium tracking-wider'>JKT48 Merchandise</p>
      <span className='text-[18px] text-black font-poppins font-normal tracking-wide'>official Merchandise from JKT48</span>
    </div>
    <div className='px-2'>
      <Carousel 
      responsive={responsive}
      swipeable={true}
      draggable={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      className="py-5"
      >
      {
        merch.map(item => <CardMerch item={item} key={item.id}/>)
      }
      </Carousel>
      
      <h3 className='text-center text-base mt-5 font-medium font-poppins text-slate-600'>Create By Novalsyahh</h3>
      
    </div>
      
      
      
    </section>
    
    
    
  )
}

export default merch