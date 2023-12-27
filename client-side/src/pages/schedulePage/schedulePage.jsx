import { useState, useEffect } from "react";
import {scheduleList, memberPerform} from '../../../libs/member-list.js'
import axios from "axios";
import ScheduleCard from "../../component/card-member/scheduleCard.jsx";

const schedulePage = () => {
    const [data, setData] = useState([]);
    
    
    const handleSearch = (e) => {
      e.preventDefault()
    }
    
    const fetchingSchedule = () => {
        scheduleList("/scheduleList")
        .then(datas => setData(datas))
    }
    
    
    useEffect(() => {
        fetchingSchedule()
    }, []);




    return (
        <div className="p-3 pt-6 pb-28">
        {/*FORM INPUT*/}
        <Form handleSearch={handleSearch } />
        
        
            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
              
                {data?.map(item => (
                    <ScheduleCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
              

const Form = ({handleSearch}) => {
    return (
        <form onSubmit={handleSearch}>
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
                    placeholder="Search Mockups, Logos..."
                    required
                />
                <button
                    type="submit"
                    
                    className="text-white absolute end-2.5 bottom-2.5 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-red-600 dark:focus:ring-red-700"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default schedulePage;
