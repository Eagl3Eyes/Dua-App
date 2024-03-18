import React from 'react';
import Category from '../Category/Category';
import CategoryContent from '../CategoryContent/CategoryContent';
import Settings from '../Settings/Settings';

const BodyContent = () => {
    return (
        <>
            <div className="grid gap-4 md:grid-cols-[350px,2fr,0px] 2xl:grid-cols-[350px,1fr,300px]">
                <div className="pb-5 rounded-lg hidden md:block">
                    <Category />
                </div>
                <div>
                    <CategoryContent />
                </div>
                <div className="hidden md:block">
                    <Settings />
                </div>
            </div>
        </>
    );
};

export default BodyContent;