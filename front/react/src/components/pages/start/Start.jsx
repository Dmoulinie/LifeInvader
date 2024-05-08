import React from 'react';
import Center from './_main/center/Center';
import AsideRight from './_main/asideRight/AsideRight';

const Start = () => {
    return (
        <div className='pt-[3.25rem] flex flex-row 2xl:w-[70rem] xl:w-[63rem] lg:w-[45rem] sm:w-[32rem] border border-black mx-auto'>
            <section className='flex-7'><Center /></section>
            <section className="flex-3 xl:block hidden"><AsideRight /></section>
        </div>
    );
};

export default Start;