import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatDate } from "../../../libs/formatDate.js";
import { getScheduleId } from "../../../libs/schedule.js";
import { memberList } from "../../../libs/member-list.js";
import { getSongsBySetlist } from "../../../libs/songs.js";
import ScheduleDetail from "../../component/detail/scheduleDetail.jsx";
import Card from '../../component/card-member/card-member.jsx'
import CardSong from '../../component/card-member/card-song-search.jsx'

const scheduleDetail = () => {
    const [data, setData] = useState([]);
    const [memberData, setMember] = useState([]);
    const [memberListData, setMemberList] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [setlistSong, setSetlistSong] = useState([]);
    const [date, setDate] = useState();
    

    const validateBg = data.setlist == "aturan anti cinta.jpg" ? "bg-black" : data.setlist == "cara meminum ramune.jpg" ? "bg-[#00BEE2]" : data.setlist == "trainee.jpg" ? "bg-[#BCFFBC]" : data.setlist == "pajama drive.jpg" ? "bg-[#1E2337]" : data.setlist == "event.jpg" ? "bg-[#2F5597]" : null;
    
    const { id } = useParams();
    const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;
    useEffect(() => {
        getScheduleId(id).then(res => {
            setData(res);
            setMember(res.memberPerform);
            setDate(formatDate(res.date));
        });
    }, [memberData]);
    
    useEffect(() => {
      const title = data.title
        getSongsBySetlist(`/${title}`)
        .then(res => setSetlistSong(res)) 
    }, [data])
    
    useEffect(() => {
        memberList("member/memberList").then(res => {
          setMemberList(res)
        })
        const filteredData = memberListData.filter(member =>
          memberData.some(memberList => memberList.member.toLowerCase() === member.callname.toLowerCase())
        );
        setFilteredData(filteredData);
    }, [memberData, memberListData]);


    return (
        <section className='pb-20'>
            <div className={`w-full h-60 z-20 relative object-cover relative before:absolute before:w-full before:h-full before:-z-10 ${validateBg}`}>
                <img src={`${IMAGE_URL}/schedule/images/${data.setlist}`} className="w-full h-full object-contain z-20" />
            </div>

            <ScheduleDetail data={data} date={date} />
          <div className='px-5 mt-5'>
            {memberData.length == 1 ? (
                <p className="font-poppins text-black capitalize text-lg font-medium">
                    ulang tahun
                </p>
            ) : (
                <p className="font-poppins text-black capitalize text-xl font-medium">
                    member perform
                </p>
            )}
          </div>
          
          {/* <Mapping Member perform /> */}
          <div className="w-full grid grid-cols-4 gap-x-3 mt-5 px-5"> 
          {
            filteredData.map(item => <Card item={item} />)
          }
          </div>
          
          { /*MAPPING SETLIST SONG*/}
          <div className='px-5 pt-7'>
            <h3 className='font-poppins text-black capitalize text-xl font-medium'>Setlist</h3>
            <p>daftar lagu yang akan dibawakan </p>
            <div className='px-3'>
                {
                  setlistSong?.map(item => <CardSong key={item.id} item={item}/>)
                }
            </div>
          </div>

        </section>
    );
};

export default scheduleDetail;


