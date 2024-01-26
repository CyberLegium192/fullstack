import { FaRegAddressCard } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineBloodtype } from "react-icons/md";
import { GiYinYang } from "react-icons/gi";
import { LiaRulerVerticalSolid } from "react-icons/lia";
const data = [
  {
    title: 'nama panggilan',
    icon: FaRegAddressCard,
    value: 'callname'
  },
  {
    title: 'tanggal lahir',
    icon: IoCalendarOutline,
    value: 'birthday'
  },
  {
    title: 'golongan darah',
    icon: MdOutlineBloodtype,
    value: 'blood'
  },
  {
    title: 'horoskop',
    icon: GiYinYang,
    value: 'zodiak'
  },
  {
    title: 'tinggi badan',
    icon: LiaRulerVerticalSolid,
    value: 'height'
  },
]

const biodata = ({item}) => {
  return(
   <ul className='mt-4'> 
      <li>
        <div className='flex gap-x-3 items-end'>
          <FaRegAddressCard size={28} className='text-red-500'/>
          <p className='text-[17px] text-slate-500 font-poppins capitalize font-medium'>nama panggilan</p>
        </div>
          <p className='text-lg text-black font-poppins capitalize font-[450] pl-10'>{item.callname}</p>
      </li>
      <li className='mt-6'>
        <div className='flex gap-x-3 items-end'>
          <IoCalendarOutline size={28} className='text-red-500'/>
          <p className='text-[17px] text-slate-500 font-poppins capitalize font-medium'>tanggal lahir</p>
        </div>
          <p className='text-lg text-black font-poppins capitalize font-[450] pl-10'>{item.birthday}</p>
      </li>
      <li className='mt-6'>
        <div className='flex gap-x-3 items-end'>
          <MdOutlineBloodtype size={29} className='text-red-500'/>
          <p className='text-[17px] text-slate-500 font-poppins capitalize font-medium'>golongan darah</p>
        </div>
          <p className='text-lg text-black font-poppins capitalize font-[450] pl-10'>{item.blood}</p>
      </li>
      <li className='mt-6'>
        <div className='flex gap-x-3 items-end'>
          <GiYinYang size={28} className='text-red-500'/>
          <p className='text-[17px] text-slate-500 font-poppins capitalize font-medium'>horoskop</p>
        </div>
          <p className='text-lg text-black font-poppins capitalize font-[450] pl-10'>{item.zodiak}</p>
      </li>
      <li className='mt-6'>
        <div className='flex gap-x-3 items-end'>
          <LiaRulerVerticalSolid size={28} className='text-red-500'/>
          <p className='text-[17px] text-slate-500 font-poppins capitalize font-medium'>tinggi badan</p>
        </div>
          <p className='text-lg text-black font-poppins capitalize font-[450] pl-10'>{item.height} CM</p>
      </li>
   </ul> 
    
  )
}
export default biodata