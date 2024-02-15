import { Link } from "react-router-dom";
const cardSong = ({ item }) => {
    const coverURL = import.meta.env.VITE_BASE_URL_IMAGE;
    const image = item.setlist == 'original' ? item.title : item.setlist
    return (
        <div
            className="w-full shadow-lg rounded-lg overflow-hidden relative before:bg-red-500 hover:no-underline duration-500 cursor-default pb-3"
            key={item.id}
        >
            <Link className="no-underline" to={`/lagu/${item.title}`}>
                <img
                    src={`${coverURL}/schedule/images/${image}.jpg`}
                    className="w-full h-full object-contain z-20"
                />
                {/*TITLE CONTENT*/}
                <div className="px-2 h-14 mt-3 capitalize">
                    <p className="font-poppins font-[500] text-red-500 text-base line-clamp-2">
                        {item.title}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default cardSong;
