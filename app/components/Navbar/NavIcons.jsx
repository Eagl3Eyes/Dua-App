
const NavIcons = ({ imageLink }) => {
    return (
        <>
            <div className="rounded-full bg-customWhiteNavBtn h-9 w-9 flex items-center justify-center cursor-pointer hover:scale-105 transition-all ">
                <div className="w-full h-full object-cover p-2">
                    <img
                        className="mx-auto"
                        src={imageLink}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default NavIcons;