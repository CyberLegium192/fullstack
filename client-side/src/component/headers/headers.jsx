import Logo from "/jkt.png";
import { FaGear } from "react-icons/fa6";
import { BsFillBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const headers = () => {
    return (
        <div className="bg-red-600 sticky top-0 w-full p-1 flex justify-between items-end z-50 text-white">
            <div className="bg-red-600 sticky top-0 w-full p-3 flex justify-between items-end z-50">
                <div className="w-24">
                    <img src={Logo} className="w-full" alt="Logo"/>
                </div>
                <div className="flex gap-x-3">
                    <Link className="text-white" aria-label="Settings" to="/profile/settings">
                        <FaGear size={30} />
                    </Link>
                    <Link className="text-white no-underline" aria-label="Notifications">
                        <BsFillBellFill size={30} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default headers;
