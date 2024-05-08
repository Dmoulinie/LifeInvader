import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Logoinsta from "@assets/start/instagram-new.png";

// normal icons svg
import Accueil from "@assets/start/svg/Accueil.svg?react";
import Creer from "@assets/start/svg/Creer.svg?react";
import Decouvrir from "@assets/start/svg/Decouvrir.svg?react";
import Messages from "@assets/start/svg/Messages.svg?react";
import Notifications from "@assets/start/svg/Notifications.svg?react";
import Plus from "@assets/start/svg/Plus.svg?react";
import Recherche from "@assets/start/svg/Recherche.svg?react";
import Reel from "@assets/start/svg/Reel.svg?react";
import Threads from "@assets/start/svg/Threads.svg?react";
import Login from "@assets/start/svg/Login.svg?react";


const Layout = () => {
    const location = useLocation();
    const linkClasses = {
        default: 'text-gray-500 hover:text-gray-950 hover:bg-gray-100 rounded-md',
        current: 'text-gray-950 bg-gray-100 rounded-md',
    };

    return (
        <>
            <div className="flex flex-row relative z-20">

                <header className="flex-none w-[15.4rem] relative z-20 border-r border-slate-300">
                    <nav className="left-0 pl-2 fixed">
                        <div className="flex h-screen flex-col w-[14rem]">
                            <ul>
                                <li className="text-gray-500 hover:text-gray-950 mt-9 pl-5">
                                    <Link to="/"><img src={Logoinsta} alt="logoinsta" className="w-[8rem] translate-x-[-1rem]"/></Link>
                                </li>
                            </ul>

                            <ul className="grow mt-7 gap-3">
                                <li className={location.pathname === '/'? linkClasses.current : linkClasses.default}>
                                <Link to="/">
                                <div className="py-4 pl-5 flex">
                                    <div className="inline-block"><Accueil /></div>
                                    <div className="inline-block ml-3">Accueil</div>
                                </div>
                                </Link>
                                </li>
                                <li className={location.pathname === '/search'? linkClasses.current : linkClasses.default}>
                                <Link to="/search">
                                    <div className="py-4 pl-5 flex">
                                    <div className="inline-block"><Recherche /></div>
                                    <div className="inline-block ml-3">Recherche</div>
                                    </div>
                                </Link>
                                </li>
                                <li className={location.pathname === '/discovery'? linkClasses.current : linkClasses.default}>
                                <Link to="/">
                                    <div className="py-4 pl-5 flex">
                                    <div className="inline-block"><Decouvrir /></div>
                                    <div className="inline-block ml-3">Découvrir</div>
                                    </div>
                                </Link>
                                </li>
                                <li className={location.pathname === '/reels'? linkClasses.current : linkClasses.default}>
                                <Link to="/">
                                    <div className="py-4 pl-5 flex">
                                    <div className="inline-block"><Reel /></div>
                                    <div className="inline-block ml-3">Reels</div>
                                    </div>
                                </Link>
                                </li>
                                <li className={location.pathname === '/msg'? linkClasses.current : linkClasses.default}>
                                <Link to="/">
                                    <div className="py-4 pl-5 flex">
                                    <div className="inline-block"><Messages /></div>
                                    <div className="inline-block ml-3">Messages</div>
                                    </div>
                                </Link>
                                </li>
                                <li className={location.pathname === '/notif'? linkClasses.current : linkClasses.default}>
                                <Link to="/">
                                    <div className="py-4 pl-5 flex">
                                    <div className="inline-block"><Notifications /></div>
                                    <div className="inline-block ml-3">Notifications</div>
                                    </div>
                                </Link>
                                </li>
                                <li className={location.pathname === '/post'? linkClasses.current : linkClasses.default}>
                                <Link to="/post">
                                    <div className="py-4 pl-5 flex">
                                    <div className="inline-block"><Creer /></div>
                                    <div className="inline-block ml-3">Creer</div>
                                    </div>
                                </Link>
                                </li>
                                <li className={location.pathname === '/login' ? linkClasses.current : linkClasses.default}>
                                <Link to="/login">
                                    <div className="py-4 pl-5 flex">
                                    <div className="inline-block"><Login /></div>
                                    <div className="inline-block ml-3">Login</div>
                                    </div>
                                </Link>
                                </li>
                            </ul>

                            <ul className="mb-5">
                                <li className={location.pathname === '/threads' ? linkClasses.current : linkClasses.default}>
                                <Link to="/">
                                    <div className="py-4 pl-5 flex">
                                    <div className="inline-block"><Threads /></div>
                                    <div className="inline-block ml-3">Threads</div>
                                    </div>
                                </Link>
                                </li>
                                <li className={location.pathname === '/plus' ? linkClasses.current : linkClasses.default}>
                                <Link to="/">
                                    <div className="py-4 pl-5 flex">
                                    <div className="inline-block"><Plus /></div>
                                    <div className="inline-block ml-3">Plus</div>
                                    </div>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main className='min-h-[100vh] w-full grow'>
                    <Outlet />
                </main>

            </div>
                <footer className="py-10 absolute left-0 right-0 z-10">
                <p className="text-center">Footer  fezfez                   fhuizgefoifhepze zfafze</p>
                </footer>

        </>
    )
};

export default Layout;