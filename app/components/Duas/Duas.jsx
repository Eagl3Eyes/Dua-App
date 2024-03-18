import { FetchContext } from '@/app/authprovider/AuthProvider';
import React, { useContext } from 'react';

const Duas = () => {
    const { filteredDuas } = useContext(FetchContext);
    return (
        <>
            {filteredDuas?.map((each) => (
                <div key={each.dua_id} className="mt-2 cursor-pointer">
                    <div className="flex flex-row">
                        <img
                            src="https://duaruqyah.com/assets/duaarrow.svg"
                            alt=""
                            className="-translate-y-1 mr-2"
                        />
                        <p className="text-sm my-3 text-left w-[95%] font-medium">
                            {each.dua_name_bn}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Duas;