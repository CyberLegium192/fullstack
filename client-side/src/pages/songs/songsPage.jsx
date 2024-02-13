import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import {getSongs, getSongsBySetlist } from '../../../libs/songs.js'
import Card from "../../component/card-member/cardSong";
import axios from "axios";

const songs = () => {
    const [songs, setSongs] = useState([]);
    const [originalSongs, setOriginalSongs] = useState([]);
    useEffect(() => {
        getSongs('/songs')
        .then(res => {
          const limitData = res.slice(0, 7)
          setSongs(res)
        });
         getSongsBySetlist("?setlist=original&title=")
        .then(res => setOriginalSongs(res))
            
    }, []);

    return (
        <>
            <h4 className="text-[19px] font-poppins font-semibold tracking-wider capitalize text-black ">
                sedang trand nih..
            </h4>
            <Swiper
                slidesPerView={3}
                spaceBetween={15}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper py-3"
            >
                {songs.sort((a, b) => b.view - a.view).map(res =>
                    res.view > 230474 ? (
                        <SwiperSlide key={res.id}>
                            <Card item={res} />
                        </SwiperSlide>
                    ) : null
                )}
            </Swiper>


            <h4 className="text-[19px] font-poppins font-semibold tracking-wider capitalize text-black mt-4">
                banyak yang menyukai ini
            </h4>
            <Swiper
                slidesPerView={3}
                spaceBetween={15}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper py-3"
            >
                {songs.sort((a, b) => b.love - a.love).map(res => res.love > 16325 ?
                        <SwiperSlide key={res.id}>
                            <Card item={res} />
                        </SwiperSlide> : null
                )}
            </Swiper>
            
            
            <h4 className="text-[19px] font-poppins font-semibold tracking-wider capitalize text-black mt-4">
                single original
            </h4>
            <Swiper
                slidesPerView={3}
                navigation={true}
                spaceBetween={15}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper py-3"
            >
                {originalSongs.map(res =>
                        <SwiperSlide key={res.id}>
                            <Card item={res} />
                        </SwiperSlide>
                )}
            </Swiper>
        </>
    );
};

export default songs;
