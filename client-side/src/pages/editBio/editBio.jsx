import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {getProfilePage, updateBio} from '../../../libs/userLogin.js'


const editBio = () => {
  const [values, setValues ] = useState({
    username: '',
    bio: '',
    gender: '',
  })
  
  const {id} = useParams()
  
  useEffect(() => {
    getProfilePage(id)
    .then(resp => {
      setValues({
        username : resp.username,
        bio : resp.bio,
        gender : resp.gender
      })
    })
  }, [])
  
  
  const handleName = (e) => {
    setValues({...values, username: e.target.value})
  }
  
  const handleBio = (e) => {
    setValues({...values, bio: e.target.value})
  }
  
  const handleRadio = (e) => {
    setValues({...values, gender: e.target.value})
  }
  
  const handleSubmit = () => {
    updateBio(id, values)
    .then(res => {
      console.log(res)
      if (res.message == 'success') {
        location.href='/profile'
      } else{alert('server erorr 500')}
    })
  }
  
  
  
  
  
    return (
        <div className="px-9 pt-14">
            <InputName handleName={handleName} values={values}/>
            <TextArea handleBio={handleBio} values={values}/>

            <span className="inputLabel mt-9">Gender:  {values.gender}</span>
            <div className="py-6 px-10 border border-gray-300 rounded-lg flex justify-between items-center">
                <InputRadio handleRadio={handleRadio} values={values}/>
            </div>
            
            
            <button className='py-3 bg-red-500 rounded-full duration-500 ease-in-out text-lg text-white font-poppins font-medium w-full ring-1 focus:ring-red-400 mt-9 focus:bg-red-600'
            onClick={handleSubmit}>Perbarui</button>
            
            
        </div>
    );
};

const InputName = ({handleName, values}) => {
    return (
        <>
            <label htmlFor="default-input" className="inputLabel">
                Nama Anda
            </label>
            <input
                type="text"
                id="default-input"
                className="inputField font-medium"
                placeholder="nama anda"
                onChange={handleName}
                value={values.username}
            />
        </>
    );
};

const TextArea = ({handleBio, values}) => {
    return (
        <>
            <label
                htmlFor="message"
                className="mt-9 block mb-3 text-lg font-medium text-gray-900 dark:text-white font-poppins"
            >
                Bio
            </label>
            <textarea
                id="message"
                rows="4"
                onChange={handleBio}
                value={values.bio}
                className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-400 font-poppins font-medium"
                placeholder="BIO"
            ></textarea>
        </>
    );
};

const InputRadio = ({handleRadio, values}) => {
    return (
        <>
            <div className="flex items-center">
                <input
                    id="default-radio-1"
                    type="radio"
                    value='Laki Laki'
                    name="default-radio"
                    className="inputRadio"
                    onChange={handleRadio}
                />
                <label htmlFor="default-radio-1" className="inputLabelRadio">
                    Laki Laki
                </label>
            </div>
            <div className="flex items-center">
                <input
                    id="default-radio-2"
                    type="radio"
                    value='perempuan'
                    name="default-radio"
                    className="inputRadio"
                    onChange={handleRadio}
                />
                <label htmlFor="default-radio-2" className="inputLabelRadio">
                    Perempuan
                </label>
            </div>
        </>
    );
};

export default editBio;
