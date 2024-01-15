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
      
    
    
    

      {/*imagePreview && <img src={imagePreview} alt="Preview" /> */}

    </div>
  );
}
      // <Label
      //   htmlFor="dropzone-file"
      //   className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      // >
      
      //   <div className="flex flex-col items-center justify-center pb-6 pt-5">
      //     <svg
      //       className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
      //       aria-hidden="true"
      //       xmlns="http://www.w3.org/2000/svg"
      //       fill="none"
      //       viewBox="0 0 20 16"
      //     >
      //       <path
      //         stroke="currentColor"
      //         strokeLinecap="round"
      //         strokeLineJoin="round"
      //         strokeWidth="2"
      //         d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
      //       />
      //     </svg>
      //     <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
      //       <span className="font-semibold">Click to upload</span> or drag and drop
      //     </p>
      //     <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
      //   </div>
        
        
      //   <FileInput id="dropzone-file" className="hidden" onChange={handleChange}/>
      // </Label>

export default uploadAvatar