import {useParams} from 'react-router-dom'
import {getSongsBySetlist, getLirik} from '../../../libs/songs.js'
import {useState, useEffect} from 'react'
import SongHeader from '../../component/detail/songHeader.jsx'
import Lyrics from '../../component/detail/lyrics.jsx'



const songDetail = () => {
  const [song, setSong] = useState([])
  const [lyrics, setLyrics] = useState([])
  
  const {title} = useParams()
  
  useEffect(() => {
    getSongsBySetlist(`?setlist=&title=${title}`)
    .then(res => setSong(res[0]))
    
    getLirik(`/${title}`)
    .then(res => setLyrics(res[0]))
    
  }, [lyrics])
  
  
  return(
    <div className=''>
      <iframe src={`${song.video}`} title={song.title} className='w-full h-72'></iframe>
      <div className='bg-red-600'>
        <div className='rounded-t-2xl p-7 pt-8 bg-white pb-28'>
          <SongHeader item={song}/>
          
          <h3 className='font-poppins text-xl font-semibold mt-14 mb-3'>Lirik</h3>
          <Lyrics item={lyrics}/>
        </div>
      
      </div>      
    </div>
  )
}



export default songDetail