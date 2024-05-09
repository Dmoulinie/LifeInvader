import React from 'react';

import Kearanprofile from "@assets/start/kearan.jpg";
import Lucaprofile from "@assets/start/luca.png";
import Damienprofile from "@assets/start/damien.jpg";
import Danprofile from "@assets/start/dan.jpg";
import Nathanprofile from "@assets/start/nathan.png";
import { Link } from 'react-router-dom';

const AsideRight = () => {
    return (
        <div className='min-h-screen w-11/12 mx-auto'>
            <div className='flex flex-row justify-center align-center items-center'>
                <div>
                    <img className="rounded-full w-11" src={Kearanprofile} alt='kearan'></img>
                </div>
                <div className='grow ml-3'>
                <p className='font-bold text-sm'>Kearan Pechoux</p>
                <p className='text-gray-500 text-sm'>Vous</p>
                </div>
                <div>
                <Link to="/userpage">
                    <span className='font-semibold text-sky-500 text-xs hover:text-sky-800 cursor-pointer'>Voir le profil</span>
                </Link>
                </div>
            </div>

            <p className='text-sm font-semibold text-gray-500 mb-4 mt-6'>Suggestions pour vous</p>

            <div className='flex flex-col justify-center gap-4'>

                <div className='flex flex-row justify-center align-center items-center'>
                    <div>
                        <img className="rounded-full w-11" src={Kearanprofile} alt='kearan'></img>
                    </div>
                    <div className='grow ml-3'>
                    <p className='font-bold text-sm'>Kearan Pechoux</p>
                    <p className='text-gray-500 text-sm'>Développeur front</p>
                    </div>
                    <div>
                    <a className='font-semibold text-sky-500 text-xs hover:text-sky-800' href='https://www.facebook.com/kearan.rouquin/' target='_blank'>Suivre</a>
                    </div>
                </div>

                <div className='flex flex-row justify-center align-center items-center'>
                    <div>
                        <img className="rounded-full w-11" src={Lucaprofile} alt='luca'></img>
                    </div>
                    <div className='grow ml-3'>
                    <p className='font-bold text-sm'>Luca Beroule</p>
                    <p className='text-gray-500 text-sm'>Développeur back</p>
                    </div>
                    <div>
                    <a className='font-semibold text-sky-500 text-xs hover:text-sky-800' href='https://www.facebook.com/kearan.rouquin/' target='_blank'>Suivre</a>
                    </div>
                </div>

                <div className='flex flex-row justify-center align-center items-center'>
                    <div>
                        <img className="rounded-full w-11" src={Damienprofile} alt='damien'></img>
                    </div>
                    <div className='grow ml-3'>
                    <p className='font-bold text-sm'>Damien Jamet</p>
                    <p className='text-gray-500 text-sm'>Développeur back</p>
                    </div>
                    <div>
                    <a className='font-semibold text-sky-500 text-xs hover:text-sky-800' href='https://www.facebook.com/kearan.rouquin/' target='_blank'>Suivre</a>
                    </div>
                </div>

                <div className='flex flex-row justify-center align-center items-center'>
                    <div>
                        <img className="rounded-full w-11" src={Nathanprofile} alt='nathan'></img>
                    </div>
                    <div className='grow ml-3'>
                    <p className='font-bold text-sm'>Nathan Mir</p>
                    <p className='text-gray-500 text-sm'>Développeur back</p>
                    </div>
                    <div>
                    <a className='font-semibold text-sky-500 text-xs hover:text-sky-800' href='https://www.facebook.com/kearan.rouquin/' target='_blank'>Suivre</a>
                    </div>
                </div>

                <div className='flex flex-row justify-center align-center items-center'>
                    <div>
                        <img className="rounded-full w-11" src={Danprofile} alt='dan'></img>
                    </div>
                    <div className='grow ml-3'>
                    <p className='font-bold text-sm'>Dan Moulinie</p>
                    <p className='text-gray-500 text-sm'>Git & Docker</p>
                    </div>
                    <div>
                    <a className='font-semibold text-sky-500 text-xs hover:text-sky-800' href='https://www.facebook.com/kearan.rouquin/' target='_blank'>Suivre</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideRight;