import { HiOutlineTrash } from "react-icons/hi2";
import {useState, useEffect} from 'react'
import {memberList} from "/libs/member-list.js"
import { MultiSelect } from "react-multi-select-component";
import axios from "axios"

const options = [
  { member: "ashel", value: "ashel" },
  { member: "gita 🥭", value: "gita" },
  { member: "shani 🥭", value: "shani" },
  { member: "gracia 🥭", value: "gracia" },
];

const memberPerform = ({values, setValues}) => {
  const [memberPerform, setData] = useState([{member:''}])
  const [member, setMember] = useState([])
  
  
  const handleAddMember = (e) => {
    e.preventDefault()
    setData([...memberPerform,{member: ''}])
  }
  const handleChange =(e, i) => {
    e.preventDefault()
    const {name, value} = e.target
    const onChangeVal = [...memberPerform]
    onChangeVal[i][name] = value
    setData(onChangeVal)
    setValues({...values, memberPerform})
  }
  const handleDelete = (i) => {
    const deleteValue = [...memberPerform]
    deleteValue.splice(i,1)
    setData(deleteValue)
  }
  
  useEffect(() => {
    memberList("member/memberList")
    .then(res => setMember(res))
  }, [])
  
  
    return (
        <>
        
            <div className="mt-12 grid grid-cols-2 gap-x-7">
            
              {
                memberPerform.map((val, i) => <Input handleChange={handleChange} key={i} index={i} handleDelete={handleDelete} title={val.member} member={member}/>) 
              }
              
            </div>
            <div className="w-28">
            <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 py-2 px-2 w-full capitalize"
                onClick={(e) => handleAddMember(e)}
            >
                add 
            </button>
            </div>
        </>
    );
};





const Input = ({handleChange, handleDelete, index, title, member}) => {
    return (
        <div className="flex">
            <div className="relative z-0 w-full mb-5 group">
                <label
                    htmlFor="id"
                    className="peer-focus:font-medium absolute text-lg font-poppins text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    nama member
                </label>
                <input
                    type="text"
                    name='member'
                    id="id"
                    className="block font-poppins py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={title}
                    onChange={(e) => handleChange(e, index)}
                />
            </div>
            <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 hover:cursor-pointer h-8 w-9 flex items-center justify-center"
              onClick={(i) => handleDelete(i)} >
                <HiOutlineTrash size={19} />
            </button>
        </div>
    );
};

export default memberPerform;
