const tema = ({ name, values, setValues }) => {
  const url = `http://localhost:3000/news/images`
  const titleVal = values?.tema ? values.tema : 'Choose Tema'
  
    return (
        <>
        <label htmlFor="countries_multiple" className="block mb-2 text-sm font-poppins font-medium text-gray-900 dark:text-white">Select Tema</label>
          <select id="countries_multiple" className="bg-gray-50 font-poppins border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name={name}
            onChange={e => setValues({ ...values, [e.target.name]: e.target.value })
            }
          >
            <option defaultValue>Choose Tema</option>
            <option value="event">Event</option>
            <option value="other">Other</option>
            <option value="theater">Theater</option>
            <option value="goods">Goods</option>
            <option value="birthday">Birthday</option>
          </select>
        </>
    );
};
export default tema;
