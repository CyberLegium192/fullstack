import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';

const datePicker = ({values, setValues}) => {
    const onChange = (date, dateString) => {
        setValues({...values, date: dateString})
      };
      const dateFormatList = 'DD-MM-YYYY'
      
    return (
      <div className='w-full mt-5'>
        <label htmlFor='date' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white font-poppins'>Date {values?.date}</label>
          <DatePicker defaultValue={dayjs('01-01-2024', dateFormatList)} format={dateFormatList} 
          onChange={onChange}
          id='date'
          size={'large'}
          className='w-full text-xs focus:border-red-500 font-poppins'/>
      </div>
    );
};
export default datePicker;
