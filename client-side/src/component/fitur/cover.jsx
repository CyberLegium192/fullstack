import { FileInput, Label } from 'flowbite-react';
import {useEffect, useState} from 'react'


const cover = ({handleFile, cover2}) => {
  const [imagePreview, setImagePreview] = useState(null)
  
  useEffect(() => {
    if (cover2) {
      const image = URL.createObjectURL(cover2);
      setImagePreview(image)
    }
    
  }, [cover2])
  
  
  return(
    <div className="flex w-full items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className="dark:hover:bg-bray-800 flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center py-3 w-full h-full">
        {
          imagePreview === null ? <svg
            className="h-28 w-28 text-gray-300 dark:text-red-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg> : <img src={imagePreview} className='w-full h-full object-contain rounded-lg'/> 
        }
        </div>
        <FileInput id="dropzone-file" className="hidden" onChange={handleFile}/>
      </Label>
    </div>
    
    
  )  
}

export default cover
