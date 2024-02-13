import { useState, useEffect } from "react";
import { formatDate } from "../../../libs/formatDate.js";
import { memberList } from "../../../libs/member-list.js";
import { Link } from "react-router-dom";

const scheduleDetail = ({ data, date }) => {

    return (
        <div className="px-5 pt-14">
            <h3 className="font-poppins text-[25px] text-red-500 font-medium capitalize">
                {data.title}
            </h3>

            <p className="text-lg text-slate-400 font-medium font-poppins">
                {data.time}, {date}
            </p>

            <Link
                to={data.link}
                className="py-2 px-6 hover:text-red-500 ring-2 ring-red-500 rounded-xl text-red-500 my-5 inline-block font-poppins text-lg font-medium capitalize"
            >
                tiket dan informasi lebih lanjut
            </Link>
            
        </div>
    );
};

export default scheduleDetail;