import CoverFile from "../../component/fitur/cover.jsx";
import { useState, useEffect } from "react";
import {postBlog, dateConvert} from '../../../libs/blog.js'
import {getProfilePage} from '../../../libs/userLogin.js'


const createBlog = () => {
    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState('');
    const [title, setTitle] = useState('');
    const [dest, setDest] = useState('');
    const [cover2, setCover] = useState(null);
    const id_user = localStorage.getItem('id')
    // const [erorr, setErorr] = useState({
    //   title: '',
    //   dest: '',
    // })
    const [erorrTitle, setErorrTitle] = useState()
    const [erorrDest, setErorrDest] = useState()
    
    useEffect(() => {
      getProfilePage(id_user)
      .then(res => {
        setUsername(res.username)
        setProfile(res.avatar)
      })
      if (!id_user) {location.href = '/blog'} else{return}

    }, [])
    const handleFile = (e) => {
        setCover(e.target.files[0])
    };
    
    const handleUpload = () => {
        const value = {
          username: username,
          profile: profile,
          date: dateConvert(),
          cover: cover2,
          title: title,
          dest: dest,
        }
        let isValid = true
        if(title == ''){
          setErorrTitle('title tidak boleh kosong')
          isValid = false
        }
        if(dest == ''){
          setErorrDest('deskripsi tidak boleh kosong')
          isValid = false
        }
        if(isValid){
          postBlog(value)
          .then(res => {
          if (res.message == 'success') {
            location.href = '/blog'
          }
        })
        }
    };
    
    return (
        <div className="bg-red-500">
            <div className="bg-white rounded-t-xl pt-8 px-7">
                <p className="font-poppins text-lg text-black mb-2">Cover</p>
                <CoverFile handleFile={handleFile} cover2={cover2}/>

                <p className="mt-4 font-poppins text-lg text-black mb-2">
                    Title
                </p>
                <InputTitle setTitle={setTitle} />
                <span className={`text-lg pl-2 font-medium text-red-500 font-poppins mt-2 ${erorrTitle == '' ? 'hidden' : 'inline-block'}`}>{erorrTitle}</span>
                
                
                <p className="mt-4 font-poppins text-lg text-black mb-2">
                    Deskripsi
                </p>
                <InputArea setDest={setDest}/>
                <span className={`text-lg pl-2 font-medium text-red-500 font-poppins mt-2 ${erorrDest == '' ? 'hidden' : 'inline-block'}`}>{erorrDest}</span>
                
                <button onClick={handleUpload} className='bg-red-600 rounded-lg font-poppins font-medium text-white decoration-0 fixed bottom-24 z-20 right-4 py-3 px-6'>Upload</button>
            </div>
        </div>
    );
};

const InputArea = ({setDest}) => {
    return (
        <textarea
            id="DEST"
            rows="7"
            className={`block p-2.5 w-full text-lg text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-400 font-poppins font-medium`}
            placeholder="deskripsi..."
            onChange={e => setDest(e.target.value)}
        ></textarea>
    );
};

const InputTitle = ({ setTitle }) => {
    return (
        <div>
            <div className="relative">
                <input
                    type="text"
                    id="text"
                    className="block w-full p-2 py-3 ps-4 text-[16px] font-poppins font-medium text-gray-900 border border-red-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-600 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="Title..."
                    required
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
        </div>
    );
};

export default createBlog;
