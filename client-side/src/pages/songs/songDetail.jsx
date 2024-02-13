import {useParams} from 'react-router-dom'

const songDetail = () => {
  const {title} = useParams()
  return(
    <div>
      <p>lagu ini yang akan di play {title}</p>
    </div>
  )

  
  
}

export default songDetail