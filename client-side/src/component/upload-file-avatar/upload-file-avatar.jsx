import { FileInput, Label } from 'flowbite-react';
import {useState, useEffect} from 'react';

const uploadAvatar = ({setProfile}) => {
  const [imagePreview, setImagePreview] = useState(null)
  
  const handleChange = (e) => {
    const file = (e.target.files[0]);
    setProfile(e.target.files[0]);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };
  
  
  return (
    <div className="w-full">
      
        <FileInput id="small-file-upload" sizing="sm" onChange={handleChange}/>
      {
        imagePreview === null ? null
        : 
        <img src={imagePreview} alt="Preview" className='mt-5 rounded-lg shadow-xl ring-slate-300 ring-1' /> 
      }

    </div>
  );
}
export default uploadAvatar