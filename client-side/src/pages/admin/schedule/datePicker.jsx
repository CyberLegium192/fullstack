import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';

const datePicker = ({ values, setValues, name }) => {
    const onChange = (date, dateString) => {
        setValues({...values, date: dateString})
        
      };
      const dateFormatList = 'DD-MM-YYYY'
    return (
      <div className='w-full'>
          <DatePicker defaultValue={dayjs('01-01-2024', dateFormatList)} format={dateFormatList} 
          onChange={onChange}
          size={'middle'}
          className='w-full'/>
      </div>
      
    );
};

export default datePicker;
