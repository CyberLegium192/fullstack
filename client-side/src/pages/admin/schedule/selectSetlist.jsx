const setListSelect = ({ values, setValues, name }) => {
    return (
        <>
            <label htmlFor="underline_select" className="sr-only">
                Underline select
            </label>
            <select
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer mb-6"
                name={name}
                onChange={e =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                }
            >
                <option defaultValue>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </>
    );
};
export default setListSelect;
