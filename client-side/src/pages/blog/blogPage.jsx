import CardBlog from '../../component/card-member/cardBlog.jsx'
import CardComment from '../../component/card-member/cardComment.jsx'
import {getBlog} from '../../../libs/blog.js'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const blogPage = () => {
  const [blog, setBlog] = useState([])
  const [blogId, setBlogId] = useState(68)
  const [userLogin, setUserLogin] = useState(false)
  const [popupComment, setPopUpComment] = useState(false)
  
  
  useEffect(() => {
    getBlog().then(res => setBlog(res))
    const id_user = localStorage.getItem('id')
    if (!id_user) {
      setUserLogin(false)
    } else{
      setUserLogin(true)
    }
  }, [])
  
  
  const handleComment = (id) => {
    const blog_id = id == undefined ? 1 : id
    setPopUpComment(!popupComment)
    setBlogId(id)
  }
  const handleCloseComment = (id) => {
    setPopUpComment(!popupComment)
  }
  
  return(
  <div className='bg-red-500 '>
    <div className='bg-white rounded-t-xl px-7 pt-10 pb-28'>
      {
        blog.sort((a, b) => new Date(a.date) - new Date(b.date)).map(item => <CardBlog key={item.id} item={item} handleComment={handleComment}/>)
      }
      {
        userLogin ? <Link to='/createBlog' className='bg-red-600 rounded-lg font-poppins font-medium text-white decoration-0  fixed bottom-28 z-20 right-4 py-3 px-6'>BUAT BLOG</Link> : null
      }
      
      <CardComment popupComment={popupComment} handleCloseComment={handleCloseComment} blogId={blogId}/>
      
    </div>
  </div>
  
  )
}

export default blogPage