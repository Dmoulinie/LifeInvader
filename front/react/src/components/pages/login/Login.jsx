import React from 'react';

import GoogleIcon from '@assets/login/svg/googleicon.svg?react';
import GithubIcon from '@assets/login/svg/github-mark-white.svg?react';

import "./Login.css";
import { Link } from 'react-router-dom';


const Login = () => {
    const LinkGitOAuth2 = "#git";
    const LinkGoogleOAuth2 = "#google";

    return (
        <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="flex flex-col shadow-xl rounded-md"> 

        <div className='flex flex-row'>
            <div className='bg-coffee w-[45vh] min-h-[45vh] rounded-l'></div>

            <div className='flex flex-col justify-center p-14'>
                <p className="text-4xl font-bold text-center mb-4">Bienvenue</p>

                <p className="text-2xl font-semibold text-center mb-6">Connectez votre compte :</p>

                <div className="flex flex-col gap-2">
                <div className="w-11/12 mx-auto bg-black text-white border-2 border-black hover:bg-gray-900 hover:border-gray-900
                rounded-md shadow-lg py-2 px-4 flex items-center justify-center gap-2 cursor-pointer font-sans text-sm">
                    <GithubIcon className="w-7 h-7" />
                    <a href={LinkGitOAuth2}>
                    <span>Se connecter avec Github</span>
                    </a>
                </div>
                <div className="w-11/12 mx-auto border-2 border-white bg-white hover:bg-zinc-50 hover:border-zinc-50
                rounded-lg shadow-md py-2 px-4 flex items-center justify-center gap-2 cursor-pointer font-sans text-sm">
                    <GoogleIcon className="w-7 h-7" />
                    <a href={LinkGoogleOAuth2}>
                    <span>Se connecter avec Google</span>
                    </a>
                </div>
                </div>
                <Link to="/" className="text-center mt-4 text-sm text-gray-500 hover:text-gray-900">Accéder en mode anonyme</Link>

            </div>

        </div>

        </div>
        </div>
    );
};

export default Login;