
const lyricsPage = ({item}) => {
  if (!item || !item.lyrics) {
    return null
  }
  const lirik = item.lyrics
  const lirik2 = lirik.replace(/(?:\r\n|\r|\n)/g, '<br />');
  
  return(
  <div className='px-7 pt-9 pb-7 rounded-xl bg-red-200 pe-16'>
    <h3 className='text-black font-poppins font-semibold capitalize tracking-wider text-xl mb-8'>{item.title}</h3>
    <p className='pe-8 text-lg font-poppins text-black font-medium' dangerouslySetInnerHTML={{ __html: lirik2 }}></p>
  </div>  
  )
}

export default lyricsPage