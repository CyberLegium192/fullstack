import { useState, useEffect } from "react";
import {scheduleList} from '../../../libs/schedule.js'
import axios from "axios";
import ScheduleCard from "../../component/card-member/scheduleCard.jsx";
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const schedulePage = ({isActive}) => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [user, setUser] = useState('');
    // const [isActive, setIsActive] = useState(false);
    const admin = import.meta.env.VITE_ADMIN_ROLE
    
    
    const handleSearch = () => {
        scheduleList(`${query.length < 3 ? '' : query}`)
        .then(datas => {
          setData(datas)
        })
    }
    
    useEffect(() => {
        handleSearch()
    }, [data]);
    
    

    
    
    
    return (
        <div className="p-3 pt-6 pb-28">
        {/*FORM INPUT*/}
        <Form handleSearch={handleSearch} setQuery={setQuery} />
        
        {isActive ? 
        <Link to='/admin/post/schedule' className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm font-poppins px-5 py-2.5 text-center me-2 mt-5 inline-block dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 hover:cursor-pointer">Add</Link>
        : null }
        
        
        
            <div className="mt-4 flex flex-wrap justify-between gap-y-5">
                {data?.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 0.6, delay: index * 0.4 }} className='w-[47%]'>
                  <ScheduleCard item={item} isActive={isActive}/>
                  </motion.div>
                ))}
            </div>
            
            
              <h2 className={`text-xl font-poppins text-center text-red-700 font-bold tracking-wider ${data?.length == 0 ? 'block' : 'hidden'}`}>{query} tidak dapat di temukan</h2>
            
            
            
        </div>
    );
};
              
              
              
              
              
              
              

const Form = ({handleSearch, setQuery}) => {
    return (
        <div>
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                    className="block w-full p-4 ps-10 text-sm font-poppins font-medium text-gray-900 border border-red-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-600 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="Search Setlist"
                    required
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </div>
    );
};

export default schedulePage;
