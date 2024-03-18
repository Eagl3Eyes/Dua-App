import { FetchContext } from '@/app/authprovider/AuthProvider';
import React, { useContext, useState } from 'react';
import Duas from '../Duas/Duas';

const SubCategory = () => {
    const { filteredS_Cat, duas, setFilteredDuas } = useContext(FetchContext);
    const [selectedS_Category, setSelectedS_Category] = useState(null);
    const [selected, setSelected] = useState(false);

    const handleOpenDuas = (id) => {
        const filtered = duas?.filter((each) => each.subcat_id == id);
        setSelectedS_Category(id)
        setSelected(true)
        return setFilteredDuas(filtered)
    };


    return (
        <>
            {filteredS_Cat?.map((each) => (
                <div
                    key={each.subcat_id}
                    onClick={() => handleOpenDuas(each.subcat_id)}
                    className="ml-12 py-2 border-l-2 border-dotted border-customGreen"
                >
                    <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
                        <div className="flex flex-row my-2">
                            <div className="bg-customGreen -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
                            <div className="flex flex-col justify-start items-start">
                                <p className={`${selected && each.subcat_id === selectedS_Category ? 'text-customGreen' : 'text-black'}    cursor-pointer font-medium text-left text-sm text-customGreen`}>
                                    {each.subcat_name_bn}
                                </p>
                                {selectedS_Category === each.subcat_id && <Duas />}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
};

export default SubCategory;