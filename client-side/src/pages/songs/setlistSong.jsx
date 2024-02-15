import {useParams} from 'react-router-dom'
import {getSongsBySetlist} from '../../../libs/songs.js'
import {useState, useEffect} from 'react'
import CardSong from '../../component/card-member/card-song-search.jsx'



const setlistSong = () => {
  const [songs, setSongs] = useState([])
  const {setlist} = useParams()
  useEffect(() => {
    getSongsBySetlist(`?setlist=${setlist}&title=`)
    .then(res => setSongs(res))
  }, [])
  
  
  
  
  return(
  <div className='p-4 pb-20'>  
    
    {
      songs.map((item) => <CardSong key={item.id} item={item}/>)
    } 
  </div>  
    
    
    
    
  )
}
export default setlistSong