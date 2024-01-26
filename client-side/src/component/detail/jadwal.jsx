import { Link } from "react-router-dom";
import { GiTheaterCurtains } from "react-icons/gi";
import { SlScreenSmartphone } from "react-icons/sl";

const jadwalMember = ({ item }) => {
    return (
        <ul className="grid grid-cols-2">
            <li className="border-r-2 border-r-slate-300">
                <Link to={`/videocall/${item.id}`} className="flex items-center gap-x-5">
                    <SlScreenSmartphone size={35} className="text-red-500" />
                    <span className="font-poppins font-medium capitalize tracking-wider text-red-500 text-base inline-block">
                        video call
                    </span>
                </Link>
            </li>
            <li className="ml-7">
                <Link to={`/mng/${item.id}`} className="flex items-center gap-x-5">
                    <GiTheaterCurtains size={35} className="text-red-500" />
                    <span className="font-poppins font-medium capitalize tracking-wider text-red-500 text-base inline-block">
                        meet and greet
                    </span>
                </Link>
            </li>
        </ul>
    );
};

export default jadwalMember;
