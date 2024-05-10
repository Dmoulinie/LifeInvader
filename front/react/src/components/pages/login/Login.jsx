import React from 'react';

import GoogleIcon from '@assets/login/svg/googleicon.svg?react';
import GithubIcon from '@assets/login/svg/github-mark-white.svg?react';

import Tooltip from '@/components/ui/tooltip/tooltip';

import "./Login.css";
import { Link } from 'react-router-dom';


const Login = () => {
    const LinkGitOAuth2 = "https://github.com/login/oauth/authorize?client_id=Iv1.4849f30c8208f619&redirect_uri=http://localhost:8080/github/callback&scope=userGitHub";
    const LinkGoogleOAuth2 = "#google";

    return (
        <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="flex flex-col shadow-xl rounded-md"> 

        <div className='flex md:flex-row flex-col'>
            <div className='bg-coffee lg:w-[49vh] lg:min-h-[49vh] w-[39vh] min-h-[39vh] rounded-l'></div>

            <div className='flex flex-col justify-center md:p-14 p-10'>
                <p className="md:text-4xl text-2xl font-bold text-center mb-4">Bienvenue</p>

                <p className="md:text-2xl text-xl font-semibold text-center mb-6">Connectez votre compte :</p>

                <div className="flex flex-col gap-2">

                <a href={LinkGitOAuth2}>
                    <div className="w-11/12 mx-auto bg-black text-white border-2 border-black hover:bg-gray-900 hover:border-gray-900
                    rounded-md shadow-lg py-2 px-4 flex items-center justify-center gap-2 cursor-pointer font-sans text-sm">
                        <GithubIcon className="w-7 h-7" />

                        <span>Se connecter avec Github</span>
                    </div>
                </a>

                <a href={LinkGoogleOAuth2}>
                <div className="w-11/12 mx-auto border-2 border-white bg-white hover:bg-zinc-50 hover:border-zinc-50
                rounded-lg shadow-md py-2 px-4 flex items-center justify-center gap-2 cursor-pointer font-sans text-sm">
                    <GoogleIcon className="w-7 h-7" />
                    <Tooltip content="Veuillez vous connecter avec Github.">
                    <span>Se connecter avec Google</span>
                    </Tooltip>
                </div>
                </a>

                </div>
                <Link to="/" className="text-center mt-4 text-sm text-gray-500 hover:text-gray-900">Accéder en mode anonyme</Link>

            </div>

        </div>

        </div>
        </div>
    );
};

export default Login;