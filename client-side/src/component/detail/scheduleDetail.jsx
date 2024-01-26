import { useState, useEffect } from "react";
import { formatDate } from "../../../libs/formatDate.js";
import { memberList } from "../../../libs/member-list.js";
import { Link } from "react-router-dom";

const scheduleDetail = ({ data, date }) => {

    return (
        <div className="px-5 pt-14">
            <h3 className="font-poppins text-[22px] text-red-500 font-[600] capitalize">
                {data.title}
            </h3>

            <p className="text-lg text-slate-400 font-medium font-poppins">
                {data.time}, {date}
            </p>

            <Link
                to={data.link}
                className="py-2 px-6 hover:text-red-500 ring-2 ring-red-500 rounded-lg text-red-500 my-5 inline-block font-poppins text-base font-semibold capitalize"
            >
                tiket dan info lebih lanjut
            </Link>
            
        </div>
    );
};

export default scheduleDetail;