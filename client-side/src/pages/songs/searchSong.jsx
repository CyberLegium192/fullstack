import TabsSong from "../../component/tabs/tabsSong.jsx";
import { useState, useEffect } from "react";
import {getSongsBySetlist, getAlbumQuery } from '../../../libs/songs.js'

const searchSong = () => {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [query, setQuery] = useState('')
  const [queryResults, setQueryResults] = useState('')
  
  
    useEffect(() => {
        getSongsBySetlist(`?setlist=&title=${queryResults}`)
        .then(res => {setSongs(res)});
        
    }, [songs]);
    useEffect(() => {
        getAlbumQuery(`?title=${queryResults}`)
        .then(res => {setAlbums(res)});
    }, [albums]);
    
    const handleQuery = (e) => {
      e.preventDefault()
      setQueryResults(query)
    }
    
    
    
    
    return (
      <div className='bg-red-500'>
        <div className='bg-white px-5 rounded-t-2xl pt-7'>
          <Form handleQuery={handleQuery} setQuery={setQuery}/>
          <TabsSong songs={songs} albums={albums} />
        </div>
      </div>
    );
};



const Form = ({handleQuery, setQuery}) => {
    return (
        <form className="mb-7 w-full inline-block" onSubmit={handleQuery}>
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
                    onChange={(e) => setQuery(e.target.value)}
                    className="block w-full p-3 ps-14 text-lg font-poppins font-medium text-gray-900 border border-red-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-600 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="Cari lagu, album atau setlist JKT48"
                />
            </div>
        </form>
    );
};

export default searchSong;
