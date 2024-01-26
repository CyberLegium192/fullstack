import {useState, useEffect} from "react"

import Carousel from '../../component/carousel/carousel.jsx'
import HomeFitur from '../../component/fitur/home_fitur.jsx'
import Birthday from '../../component/fitur/birthday.jsx'
import Merch from '../../component/fitur/merch_page.jsx'


const homePage = () => {
  
  
  return (
    <>
      <Carousel />
      <section className='bg-red-600'>
        <HomeFitur />
        <Birthday />
        <Merch />
        
      </section>
    </>
  )
}

export default homePage




