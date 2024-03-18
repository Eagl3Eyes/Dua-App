
const Settings = () => {
    return (
        <>
            <div className="w-full bg-white rounded-2xl h-[805px] hidden 2xl:block">
                <p className="text-center py-10">সেটিংস</p>
                <div className="mx-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="border-l-[4px] border-l-customGreen rounded-md bg-customWhite w-full flex items-center justify-start gap-x-4 p-2 py-3 cursor-pointer">
                            <div className="rounded-full h-9 w-9 p-[6px] bg-customWhiteNavBtn flex items-center justify-center">
                                <img src="https://duaruqyah.com/assets/sidebar/color/language.svg" className="h-full w-full" />
                            </div>
                            <p className="font-medium text-sm text-customGreen">ভাষা সেটিংস</p>
                        </div>
                        <div className="border border-t-0 border-gray-200 flex items-center justify-center w-full p-[22px] space-x-3 rounded-b-md">
                            <button className="w-full bg-white border border-gray-300 rounded-md text-[13px] py-[10px]">English</button>
                            <button className="w-full bg-customGreen text-white rounded-md text-[13px] py-[10px]">বাংলা</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        {/* ////////////// */}
                        <div className="mt-4 rounded-md bg-customWhite w-full flex items-center justify-start gap-x-4 p-2 py-3 cursor-pointer">
                            <div className="rounded-full h-9 w-9 p-[6px] bg-customWhiteNavBtn flex items-center justify-center">
                                <img src="https://duaruqyah.com/assets/sidebar/general.svg" className="h-full w-full" />
                            </div>
                            <p className="font-medium text-sm text-customIcon">সাধারণ সেটিংস</p>
                        </div>
                        {/* //////////////// */}
                        <div className="mt-4 rounded-md bg-customWhite w-full flex items-center justify-start gap-x-4 p-2 py-3 cursor-pointer">
                            <div className="rounded-full h-9 w-9 p-[6px] bg-customWhiteNavBtn flex items-center justify-center">
                                <img src="https://duaruqyah.com/assets/sidebar/font.svg" className="h-full w-full" />
                            </div>
                            <p className="font-medium text-sm text-customIcon">ফন্ট সেটিংস</p>
                        </div>
                        {/* //////////////// */}
                        <div className="mt-4 rounded-md bg-customWhite w-full flex items-center justify-start gap-x-4 p-2 py-3 cursor-pointer">
                            <div className="rounded-full h-9 w-9 p-[6px] bg-customWhiteNavBtn flex items-center justify-center">
                                <img src="https://duaruqyah.com/assets/sidebar/font.svg" className="h-full w-full" />
                            </div>
                            <p className="font-medium text-sm text-customIcon">থিম সেটিংস</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;