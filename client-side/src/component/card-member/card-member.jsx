
import { Badge } from 'flowbite-react';

const memberCard = () => {
  return (
  <div className=" p-2">
    {/* image container */}
    <div className="flex justify-center">
        <img src="https://akcdn.detik.net.id/visual/2022/12/01/shani-jkt48-4_43.jpeg?w=650&q=90" className="w-16 h-16 border border-red-800 object-cover rounded-full"/>
    </div>
    <Badge color="pink" className='text-[10px] flex justify-center w-24 mt-2 mx-auto'>Anggota JKT48</Badge>





  </div>
  )
}

export default memberCard