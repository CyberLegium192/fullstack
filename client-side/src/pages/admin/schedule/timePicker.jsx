import { TimePicker } from 'antd';
import dayjs from 'dayjs'
import {useState} from 'react'

const timePicker = ({values, setValues}) => {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const timer = `${hour}:${min}`
    const onChange = (time, timeString) => {
      setValues({...values, time: timeString})
    }
  return (
    <>
    <TimePicker defaultValue={dayjs(timer, 'HH:mm')} format={'HH:mm'} className='w-full text-black' onChange={onChange}/>
    </>
  )  
}
export default timePicker