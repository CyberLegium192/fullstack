import {Link} from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
import { GiMusicalNotes, GiTheaterCurtains, GiLightningArc } from "react-icons/gi";
import { SlScreenSmartphone } from "react-icons/sl";

const menus = [
  {icon : FiEdit, title: 'blog', link: '/blog'},
  {icon : GiMusicalNotes, title: 'lagu', link: '/lagu'},
  {icon : SlScreenSmartphone, title: 'Video Call', link: '/videocall'},
  {icon : GiTheaterCurtains, title: 'M&G', link: '/mng'},
  {icon : GiLightningArc, title: 'Chant', link: '/chant'},
  ]



const moreFitur = () => {
  return(
    <div className='bg-white p-4 rounded-t-2xl pt-14 pb-9'>
      <ul className='flex justify-between items-center px-5 gap-x-5'>
      {
        menus.map((menu, i) => (
          <li key={i}>
            <Link to={menu.link} className='flex flex-col items-center'>
              <menu.icon size={35} className='text-red-500'/>
              <span className='font-poppins font-semibold capitalize tracking-wider text-red-500 mt-6 text-sm inline-block'>{menu.title}</span>
            </Link>
          </li>
        ))
      }
      </ul>
    </div>  
    
    
    
  )
}

export default moreFitur