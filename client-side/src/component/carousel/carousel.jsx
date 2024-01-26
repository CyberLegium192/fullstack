
import { Carousel } from 'flowbite-react';

const CarouselCard = () => {
    return (
      <div className="h-72 px-3 bg-red-600 pt-3 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel indicators={false} className='h-60 rounded-2xl'>
        <img src="https://jkt48.com/images/banner.home.flowerfulconcertpb-id.jpg" alt='image carousel' className='bg-white h-60'/>
        <img src="https://jkt48.com/images/banner.home.jkt48v.jpg" alt='image carousel' className='bg-white h-60'/>
        <img src="https://jkt48.com/images/banner.home.jtrust.jpg" alt='image carousel' className='bg-white h-60'/>
      </Carousel>
    </div>
    )
};
export default CarouselCard;