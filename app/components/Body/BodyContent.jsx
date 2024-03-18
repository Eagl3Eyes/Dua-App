import React from 'react';
import Category from '../Category/Category';

const BodyContent = () => {
    return (
        <>
        <div className="grid gap-4 md:grid-cols-[350px,2fr,0px] 2xl:grid-cols-[350px,1fr,300px]">
            <div className="pb-5 rounded-lg hidden md:block">
                <Category />             
            </div>
            <div>

            </div>
            <div className="hidden md:block">

            </div>
        </div>
        </>
    );
};

export default BodyContent;