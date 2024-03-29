const setListSelect = ({ values, setValues, name }) => {
    return (
        <>
            <label htmlFor="underline_select" className="sr-only">
                Underline select
            </label>
            <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer mb-6 font-poppins capitalize"
                name={name}
                onChange={e =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                }
            >
                <option defaultValue>pilih setlist</option>
                <option value="event.jpg">event</option>
                  <option value="cara meminum ramune.jpg">Cara meminum ramune</option>
                <option value="aturan anti cinta.jpg">aturan anti cinta</option>
                <option value="tunas dibalik seragam.jpg">tunas dibalik seragam</option>
                <option value="trainee.jpg">ingin bertemu</option>
                <option value="banzai JKT48.jpg">banzai JKT48</option>
                <option value="pajama drive.jpg">pajama drive</option>
            </select>
        </>
    );
};
export default setListSelect;
