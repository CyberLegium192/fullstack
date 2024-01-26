import React from 'react'
import {Link} from "react-router-dom"
const Card = ({item, dynamic}) => {
  const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;
  return (
    <Link to={`/member/${item.id}`} className="w-30 p-2 mb-3" key={item.id}>
      <div className="w-24 h-24 border overflow-hidden border-red-600 rounded-full">
        <img src={`${IMAGE_URL}/profile/${item.profile}`} className="w-full rounded-full object-cover object-top border-red-700 mx-auto"/>
      </div>
      <p className="text-[10px] font-poppins text-center bg-red-300 p-1 mt-2 rounded-full font-medium text-red-700">Anggota JKT48</p>
      
      {
        dynamic ? null : <p className="text-center font-poppins font-medium text-red-700 ">{item.showall} Show</p>
      }
      
      
      <h3 className={`text-center font-poppins font-bold ${dynamic ? dynamic : "text-red-700"} w-24 text-[16px]`}>{item.callname}</h3>
    </Link>
    )
}

export default Card

