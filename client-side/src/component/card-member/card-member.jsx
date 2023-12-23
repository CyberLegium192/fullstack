import React from 'react'
import {Link} from "react-router-dom"
const Card = ({item}) => {
  return (
    <Link to={`/member/${item.id}`} className="w-30 p-2 mb-3" key={item.id}>
      <div className="w-full">
        <img src={`http://localhost:3000/profile/${item.profile}`} className="w-24 h-24 rounded-full object-cover object-top border border-red-700 mx-auto"/>
      </div>
      <p className="text-[10px] font-poppins text-center bg-red-300 p-1 mt-2 rounded-full font-medium text-red-700">Anggota JKT48</p>
      
      <h3 className="text-center font-poppins font-medium text-red-700 mt-1 ">{item.showall} Show</h3>
      
      <h3 className="text-center font-poppins font-bold text-red-700 mt-1 w-24">{item.callname}</h3>
      
    </Link>
    )
}

export default Card

// import { Badge } from 'flowbite-react';

// const memberCard = () => {
//   return (
//   <div className=" p-2">
//     {/* image container */}
//     <div className="flex justify-center">
//         <img src="https://akcdn.detik.net.id/visual/2022/12/01/shani-jkt48-4_43.jpeg?w=650&q=90" className="w-16 h-16 border border-red-800 object-cover rounded-full"/>
//     </div>
//     <Badge color="pink" className='text-[10px] flex justify-center w-24 mt-2 mx-auto'>Anggota JKT48</Badge>





//   </div>
//   )
// }

// export default memberCard
