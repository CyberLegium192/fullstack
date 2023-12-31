import { Datepicker } from 'flowbite-react';

const datePicker = ({ values, setValues, name }) => {
    const handleDateChange = (e) => {
        setValues({ ...values, date: e.target.value });
        console.log(e.target.value)
    };
    return (
      <div className="relative w-72">
        <Datepicker onChange={handleDateChange}/>
      </div>
    );
};

export default datePicker;
