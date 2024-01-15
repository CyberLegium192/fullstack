import { useState, useEffect } from "react";
import axios from 'axios'
import Setlist from './selectSetlist.jsx'
import DatePick from './datePicker.jsx'
import TimePicker from './timePicker.jsx'
import MemberPerform from './editMemberPerform.jsx'
import {getScheduleId, updateScheduleEvent, updateScheduleMember} from '../../../../libs/schedule.js'
import {useParams} from 'react-router-dom'
import {updateValidate} from "../../../../libs/scheduleValidate/validateFormSchedule.js"

const editSchedule = () => {
    const [values, setValues] = useState({
      setlist : '',
      title : '',
      date : '',
      time : '',
      link : '',
      memberPerform: [{member: ''}],
    })
    
    const {id} = useParams()
    
    const fetchingData = () => {
      getScheduleId(id)
      .then(resp => {
        if (resp.setlist !== 'event.jpg') {
          setValues({
            setlist: resp.setlist,
            title: resp.title,
            date: resp.date,
            time: resp.time,
            link: resp.link,
            memberPerform: resp.memberPerform
          })
        } else{
          setValues({
            setlist: resp.setlist,
            title: resp.title,
            date: resp.date,
            time: resp.time,
            link: resp.link,
          })
        }
        
      })
    }
    
    
    useEffect(() => {
      fetchingData()
    }, [id])
    
    const handleClick = (e) => {
        e.preventDefault();
        updateValidate(id, values)
    };
  
    
    return (
        <div className="mt-4 pb-24">
            <form className="px-8" onSubmit={handleClick}>
                
                <Setlist values={values} setValues={setValues} name={'setlist'}/>
                <Input
                    values={values}
                    setValues={setValues}
                    name={"title"}
                    title={values.title}
                />
                <div className='flex justify-between items-center gap-x-7 mb-6'>
                  <DatePick
                      values={values}
                      setValues={setValues}
                      name={"date"}
                  />
                  <TimePicker 
                      values={values}
                      setValues={setValues}/>
                </div>
                <Input
                    values={values}
                    setValues={setValues}
                    name={"link"}
                    title={"Link to web"}
                />
                
                {
                  values.setlist !== 'event.jpg' ?
                  <MemberPerform 
                    values={values}
                    setValues={setValues}
                    /> : null
                }
                
                
                
                
                
                
                
                
                
                

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-auto mt-20"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

const Input = ({ values, setValues, name, title }) => {
    return (
        <div className="relative z-0 w-full mb-5 group">
            <label
                htmlFor="id"
                className="peer-focus:font-medium absolute text-lg font-poppins text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {title}
            </label>
            <input
                type="text"
                name={name}
                id="id"
                onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                className="block font-poppins py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
        </div>
    );
};



export default editSchedule;
