"use client"
import { FetchContext } from '@/app/authprovider/AuthProvider';
import React, { useContext, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import SubCategory from '../SubCategory/SubCategory';


const Category = () => {
    const [selected, setSelected] = useState(false)
    const { categories, s_categories, setFilteredS_Cat, selectedCategory, setSelectedCategory } = useContext(FetchContext);


    const handleOpenSubCat = (id) => {
        setSelected(true)
        setSelectedCategory(id)
        const filtered = s_categories?.filter((each) => each.cat_id == id);
        return setFilteredS_Cat(filtered)
    };



    return (
        <>
            <div className="w-full space-y-4 flex flex-col h-[805px] bg-white pb-12 rounded-lg">
                <div className="bg-customGreen flex items-center justify-center rounded-t-lg h-[100px] py-4 text-white text-sm">
                    ক্যাটাগরী
                </div>
                {/* search box */}
                <div className="relative mx-3">
                    <input
                        type="text"
                        placeholder="Search Categories"
                        className="input w-full rounded-md text-sm outline-none border border-gray-300 focus:outline-customGreen focus:outline-1 pl-11"
                    />
                    <div className="absolute ml-2 my-1 mr-1 bottom-0 h-auto top-0 left-0 w-[10%] flex items-center justify-center rounded-md cursor-pointer">
                        <CiSearch fill="gray" className="w-5 h-5" />
                    </div>
                </div>
                {/* Cards */}
                <div className="space-y-5 overflow-y-scroll scrollbar-thumb-black scrollbar-thin max-h-fit">

                    {categories?.map((each) => (

                        <div
                            onClick={() => handleOpenSubCat(each.cat_id)}
                            key={each.cat_id}
                            className="cursor-pointer"
                        >
                            <div className={`${selected && each.cat_id === selectedCategory ? 'bg-customWhiteNavBtn' : 'bg-white'} rounded-lg p-3 flex items-center justify-between mx-3`}>
                                <div className="flex items-center justify-start gap-x-3">
                                    <div className="object-cover rounded-md h-12 w-12">
                                        <img
                                            className="w-full h-full"
                                            src="https://i.ibb.co/BySsJ5H/Frame-1.png"
                                            alt="card logo"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[13px] py-1">
                                            {each.cat_name_bn}
                                        </p>
                                        <p className="font-medium text-xs text-gray-500 text-[10px]">
                                            সাবক্যাটাগরিঃ {each.no_of_subcat}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold text-[13px] py-1 text-center">
                                        {each.no_of_dua}
                                    </p>
                                    <p className="font-medium text-[10px] text-gray-500 text-center">
                                        দোয়া
                                    </p>
                                </div>
                            </div>
                            {selectedCategory === each.cat_id && <SubCategory />}
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
};

export default Category;