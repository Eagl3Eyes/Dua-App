import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";

const BodyNavbar = () => {
    return (
        <>
            <div className="flex items-center h-[80px] bg-white xl:bg-transparent mb-6 xl:mb-0">
                <div className="basis-[10%] flex items-center text-lg font-medium h-full"><p>দোয়া পেজ</p></div>
                <div className="flex-1  flex items-center justify-end h-full">
                    <div className="relative"><input type="text" placeholder="Search By Dua Name" className="input w-[350px] rounded-md text-sm outline-none border-none focus:outline-customGreen focus:outline-1 bg-customBg xl:bg-white" />
                        <div className="absolute my-1 mr-1 bottom-0 h-auto top-0 right-0 bg-white xl:bg-customSearchGray  w-[17%] flex items-center justify-center rounded-md cursor-pointer"><CiSearch fill="gray" className="w-5 h-5" /></div>
                    </div>
                </div>
                <div className="basis-[20%] flex items-center justify-end h-full">
                    <div className="flex items-center justify-center gap-x-2">
                        <div className="object-cover">
                            <img
                                className="w-full h-full"
                                src="https://i.ibb.co/RgxbQdf/profile.png"
                                alt="logo"
                            />
                        </div>
                        <div className="pr-4">
                            <FaCaretDown className="w-4 h-5" fill="gray" />
                        </div>
                        <div className="object-cover mr-4 2xl:hidden block">
                            <img
                                className="w-full h-full"
                                src="https://duaruqyah.com/assets/tab/home/settings.svg"
                                alt="settings icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BodyNavbar;