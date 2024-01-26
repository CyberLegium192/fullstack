


const memberStatus = ({item}) => {
  return(
    <ul className='grid grid-cols-3 gap-x-3 my-14'>
      <li>
        <p className='text-lg capitalize font-poppins text-slate-600 font-medium'>jumlah show</p>
        <span className='text-xl capitalize font-poppins text-red-600 font-[500]'>{item.showall} Show</span>
      </li>
      <li>
        <p className='text-lg capitalize font-poppins text-slate-600 font-medium'>Generasi</p>
        <span className='text-xl capitalize font-poppins text-red-600 font-[500]'>Gen {item.gen}</span>
      </li>
      <li>
        <p className='text-lg capitalize font-poppins text-slate-600 font-medium'>Status/Tim</p>
        <span className='text-lg capitalize font-poppins text-red-600 font-[500]'>{item.status} JKT48</span>
      </li>
    </ul>
    )
}

export default memberStatus