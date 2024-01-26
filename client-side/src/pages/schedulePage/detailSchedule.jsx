import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatDate } from "../../../libs/formatDate.js";
import { getScheduleId } from "../../../libs/schedule.js";
import ScheduleDetail from "../../component/detail/scheduleDetail.jsx";

const scheduleDetail = () => {
    const [data, setData] = useState([]);
    const [memberData, setMember] = useState([]);
    const [date, setDate] = useState();
    const { id } = useParams();
    const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;

    const validateBg =
        data.setlist == "rkj.jpg"
            ? "bg-black"
            : data.setlist == "cmr.jpg"
            ? "bg-[#00BEE2]"
            : data.setlist == "trainee.jpg"
            ? "bg-[#BCFFBC]"
            : data.setlist == "panjama.jpg"
            ? "bg-[#1E2337]"
            : data.setlist == "event.jpg"
            ? "bg-[#2F5597]"
            : null;

    useEffect(() => {
        getScheduleId(id).then(res => {
            setData(res);
            setMember(res.memberPerform);
            setDate(formatDate(res.date));
        });
    }, [memberData]);

    return (
        <section>
            <div
                className={`w-full h-60 z-20 relative object-cover relative before:absolute before:w-full before:h-full before:-z-10
          ${validateBg}
        `}
            >
                <img
                    src={`${IMAGE_URL}/schedule/images/${data.setlist}`}
                    className="w-full h-full object-contain z-20"
                />
            </div>

            <ScheduleDetail data={data} date={date} />
          <div className='px-5'>
            {memberData.length == 1 ? (
                <p className="font-poppins text-black capitalize text-lg font-medium">
                    ulang tahun
                </p>
            ) : (
                <p className="font-poppins text-black capitalize text-lg font-medium">
                    member perform
                </p>
            )}
            {memberData[0]?.member}
          </div>
        </section>
    );
};

export default scheduleDetail;
