import {useState, useEffect} from 'react'
import {getLikesUser} from '../../../libs/songs.js'
import CardSongSearch from '../../component/card-member/card-song-search.jsx'



const likeUserSong = () => {
  const [likeSong, setLikeSong] = useState([]);
  const user_id = localStorage.getItem('id')
  useEffect(() => {
    getLikesUser(user_id)
    .then(res => setLikeSong(res))
  })
  
  return(
    <div className='px-5 pb-28 pt-7'>
    {
      likeSong.map(item => <CardSongSearch item={item} key={item.id}/>)
    }
    </div>
    
  )

  
}
export default likeUserSong