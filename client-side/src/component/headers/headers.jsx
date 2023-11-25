import Logo from "/jkt.png"
import { FaGear } from "react-icons/fa6"
import { BsFillBellFill } from "react-icons/bs";
import {Link} from "react-router-dom"
const headers = () =>{
  return(
  <div className="bg-red-600 relative p-3 flex justify-between items-end">
    <div className="w-24">
      <img src={Logo} className="w-full"/>
    </div>
    <div className="flex gap-x-3">
      <Link className="text-white"><FaGear size={30}/></Link>
      <Link className="text-white"><BsFillBellFill size={30}/></Link>
    </div>
    
  </div>
  
  ) 
}

export default headers