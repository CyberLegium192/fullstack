import { useState, useEffect } from "react";
import Tema from "./tema.jsx";
import DatePicker from "./datePicker.jsx";
import { getById, updateNews  } from "../../../../libs/news.js";
import {useParams} from 'react-router-dom'

const editPostNews = () => {
    const [values, setValues] = useState({
      tema: '',
      title: '',
      date: '',
      link: '',
    });
    const {id} = useParams() 
    
  const fetchData = () => {
    getById(`${id}`)
    .then(resp => {
      const res = resp[0]
      setValues({
        tema: res.tema,
        title: res.title,
        date: res.date,
        link: res.link
      })
    })
  }
  
  useEffect(() => {
    fetchData()
  }, [values.date])

    const handleSubmit = () => {
        let isValid = true;
        if (!values.tema) {
            alert("pilih tema terlebih dahulu");
            isValid = false;
            return;
        }
        if (!values.title) {
            alert("title belum terisi");
            isValid = false;
            return;
        }
        if (!values.date) {
            alert("masukan tanggal terlebih dahulu");
            isValid = false;
            return;
        }
        if (!values.link) {
            alert("masukan link website source nya");
            isValid = false;
            return;
        }
          updateNews(id, values).then(resp => {
            if (resp.message == "success") {
              location.href="/news";
            } else {
              alert("gagal mengpost data");
            }
          });
    };

    return (
        <div className="px-6 pt-8">
            <Tema name={"tema"} values={values} setValues={setValues} />

            {/*TEXT AREA CONTENT*/}

            <label
                htmlFor="message"
                className="mt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white font-poppins"
            >
                Title
            </label>
            <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-400 font-poppins font-medium"
                placeholder="Title News..."
                value={values.title}
                onChange={e => setValues({ ...values, title: e.target.value })}
            ></textarea>


            <DatePicker values={values} setValues={setValues} />
            
            
            <FormInput values={values} setValues={setValues} />

            <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

const FormInput = ({ values, setValues }) => {
  const valueLink = values?.link
    return (
        <div className="relative z-0 w-full mb-5 group mt-5">
            <label
                htmlFor="link"
                className="block mb-2 text-sm font-medium capitalize font-poppins text-gray-900 dark:text-white"
            >
                link to website
            </label>
            <input
                type="text"
                id="link"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-poppins"
                placeholder="https://..."
                onChange={e => setValues({ ...values, link: e.target.value })}
                value={valueLink}
            />
        </div>
    );
};
export default editPostNews;
