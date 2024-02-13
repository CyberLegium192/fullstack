import {useParams} from 'react-router-dom'
import {getSongsBySetlist} from '../../../libs/songs.js'
import {useState, useEffect} from 'react'



const setlistSong = () => {
  const [songs, setSongs] = useState([])
  const {setlist} = useParams()
  useEffect(() => {
    getSongsBySetlist(`?setlist=${setlist}&title=`)
    .then(res => setSongs(res))
  }, [])
  
  
  
  
  return(
  <div>  
    INI UNTUK SETLIST LIST AFTER SEARCH {setlist}
    {
      songs.map((item) => <p key={item.id}>{item.title}</p>)
    } 
  </div>  
    
    
    
    
  )
}
export default setlistSong