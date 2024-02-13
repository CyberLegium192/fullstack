import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import {Link} from 'react-router-dom'
import Card from "../../component/card-member/cardSong";
import axios from "axios";
import Songs from './songsPage.jsx'

const songPage = () => {
    const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;
    const [search, setSearch] = useState('')
    const handleSubmit = (e) => {
      e.preventDefault()
      location.href = `/song/setlist/${search}`
    }
    return (
        <section className="pb-32">
          <div className='bg-red-600 py-6 px-6'>
            <Link to='/lagu/cara meminum ramune' className='bg-white min-h-full rounded-3xl overflow-hidden flex justify-center h-60'>
              <img src={`${IMAGE_URL}/schedule/images/cara meminum ramune.jpg`} alt='cover image' className='w-60 h-60 object-contain'/>
            </Link>
          </div>
          
          
          
          
          
          <div className='bg-red-500'>
            <div className='px-7 rounded-t-xl pt-8 bg-white'>
              <Form />
              <Songs />
            </div>
          </div>
        </section>
    );
};

export default songPage;


const Form = () => {
    return (
        <Link to='/lagu/album' className='mb-7 w-full inline-block' >
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 ps-14 text-lg font-poppins font-medium text-gray-900 border border-red-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-600 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="Cari lagu, album atau setlist JKT48"
                    required
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </Link>
    );
};



