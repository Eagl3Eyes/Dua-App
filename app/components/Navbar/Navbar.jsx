import { FaHandHoldingHeart } from "react-icons/fa6";
import NavIcons from "./NavIcons";

const Navbar = () => {
    const navIcons = [
        "https://duaruqyah.com/assets/nav/home.svg",
        "https://duaruqyah.com/assets/nav/alldua.svg",
        "https://duaruqyah.com/assets/nav/memorize.svg",
        "https://duaruqyah.com/assets/nav/bookmark.svg",
        "https://duaruqyah.com/assets/nav/ruqyah.svg",
        "https://duaruqyah.com/assets/nav/dua-info.svg",
        "https://duaruqyah.com/assets/nav/books.svg"
    ];

    return (
        <div className="bg-white rounded-t-3xl md:rounded-3xl flex flex-col py-2 h-full shadow-customShadow md:shadow-none">
            <div className=" basis-[10%] md:flex items-center justify-center hidden">
                <div className="w-[86px] h-[86px] object-cover cursor-pointer">
                    <img
                        className="w-full h-full"
                        src="https://i.ibb.co/z5cHXfH/logo.png"
                        alt="logo"
                    />
                </div>
            </div>
            <div className=" flex-1 py-2 md:py-16">
                <div className="gap-y-6 flex flex-row md:flex-col gap-x-4 items-center justify-center">
                    {navIcons.map((each, index) => (
                        <NavIcons key={index} imageLink={each} />
                    ))}
                    <div className="md:hidden">
                        <div className="rounded-full bg-customWhiteNavBtn h-9 w-9 flex items-center justify-center cursor-pointer hover:scale-105 transition-all ">
                            <div className="w-full h-full object-cover p-2">
                                <img
                                    className="mx-auto"
                                    src="https://duaruqyah.com/assets/nav/profile.svg"
                                    alt="home"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-[30%] hidden md:flex items-center justify-end">
                <div className="bg-customGreen w-14 h-14 rounded-md flex items-center justify-center mx-auto cursor-pointer">
                    <FaHandHoldingHeart className="w-6 h-6" fill="white" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;