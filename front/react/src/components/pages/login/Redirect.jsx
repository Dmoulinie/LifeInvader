import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Redirect.css';

const RedirectPage = () => {
    const [remainingTime, setRemainingTime] = useState(1000); // 1 seconds in milliseconds

    
    useEffect(() => {
        const header = document.querySelector('#remove-in-redirect');
        if (header) {
            header.style.display = 'none';
        }

        const intervalId = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 10); // decrement by 10 milliseconds
        }, 10); // decrement every 10 milliseconds

        return () => clearInterval(intervalId);
    }, []);

    if (remainingTime <= 0) {
        const header = document.querySelector('#remove-in-redirect');
        if (header) {
            header.style.display = 'block';
        }
        return <Navigate to="/" replace />;
    }

    return (
        <div className='h-screen w-full'>

            <div className='h-screen w-full flex justify-center items-center relative z-50'>
                <div className='w-[22vh] h-[22vh] rounded-full p-10 bg-blue-600 text-white text-center flex items-center relative z-20'>
                    <p className='font-bold text-xl'>{Math.floor(remainingTime / 1000)},{remainingTime % 1000} ms Restants</p>
                </div>
                <div className='absolute w-[22vh] h-[22vh] rounded-full p-10 bg-sky-500 text-white text-center flex items-center animit z-10'>
                </div>
            </div>
        </div>

    );
};

export default RedirectPage;