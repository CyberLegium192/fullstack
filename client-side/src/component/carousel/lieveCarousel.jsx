import LiveCard from "../card-member/liveCard.jsx";
import { Carousel } from "flowbite-react";

const liveCarousel = ({ live }) => {
    return (
    <div>
        <Carousel>
          {live?.map((item) => <LiveCard item={item} key={item.room_id}/>)}
        </Carousel>
    </div>
  )
};

export default liveCarousel;
