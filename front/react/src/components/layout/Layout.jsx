import React, { useState } from "react";
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
import Instamini from "@assets/start/svg/Instamini.svg?react";

import ExternalLink from "./ExternalLink/ExternalLink";
import { CSSTransition } from 'react-transition-group';

import "./Layout.css";


const Layout = () => {
    const [showModalPlus, setShowModalPlus] = useState(false);

    const handlePlusClick = () => {
        setShowModalPlus(true);
    };    
    
    const handleCloseModal = () => {
        setShowModalPlus(false);
    };

    const location = useLocation();
    const linkClasses = {
        default: 'text-gray-500 hover:text-gray-950 hover:bg-gray-100 rounded-md',
        current: 'text-gray-950 bg-gray-100 rounded-md',
    };

    const navigationLinks = [
        { path: "/", label: "Accueil", icon: Accueil, href: "/", external: false },
        { path: "/search", label: "Recherche", icon: Recherche, href: "/search", external: false },
        { path: "/discovery", label: "Découvrir", icon: Decouvrir, href: "/", external: false },
        { path: "/reels", label: "Reels", icon: Reel, href: "https://youtu.be/dQw4w9WgXcQ?si=47-VX_Ot32PPuIoZ" , external: true },
        { path: "/msg", label: "Messages", icon: Messages, href: "#", external: false },
        { path: "/notif", label: "Notifications", icon: Notifications, href: "#", external: false },
        { path: "/post", label: "Créer", icon: Creer, href: "/post", external: false },
        { path: "/login", label: "Se Connecter", icon: Login, href: "/login", external: false },
    ];
    const otherNavigationLinks = [
        { path: "/threads", label: "Threads", icon: Threads, href: "https://about.instagram.com/fr-fr/threads", external: true },
        { path: "/plus", label: "Plus", icon: Plus, href: "#plus", external: false, onclick: handlePlusClick},
    ];

    const mobileNavigationLinks = [
        { path: "/", label: "Accueil", icon: Accueil, href: "#", external: false },
        { path: "/search", label: "Recherche", icon: Recherche, href: "/search", external: false  },
        { path: "/discovery", label: "Découvrir", icon: Decouvrir, href: "#", external: false },
        { path: "/reels", label: "Reels", icon: Reel, href: "https://youtu.be/dQw4w9WgXcQ?si=47-VX_Ot32PPuIoZ" , external: true },
        { path: "/msg", label: "Messages", icon: Messages, href: "#", external: false },
        { path: "/post", label: "Créer", icon: Creer, href: "/post", external: false },
        { path: "/login", label: "Se Connecter", icon: Login, href: "/login", external: false },
    ];

    return (
        <>
            <div className="flex flex-row relative z-20">

                <header className="border-r border-gray-200">

                    { /* Pour écran large */ }
                    <div className="hidden sm:hidden lg:flex flex-none w-[15.4rem] relative z-20 border-r border-slate-300">
                        <nav className="left-0 pl-2 fixed">
                            { /* NAVIGATION  */ }
                                <ul className="flex  h-screen flex-col w-[14rem]">
                                    {/* Image / Logo */}
                                    <ul>
                                        <li className="text-gray-500 hover:text-gray-950 mt-9 pl-5">
                                            <Link to="/"><img src={Logoinsta} alt="logoinsta" className="w-[8rem] translate-x-[-1rem]"/></Link>
                                        </li>
                                    </ul>

                                    {/* Liens de navigation */}
                                    <ul className="grow mt-7 gap-3">
                                        {navigationLinks.map((link) => (
                                        <li key={link.path} className={location.pathname === link.path ? linkClasses.current : linkClasses.default}>
                                            {link.external ? (
                                                <ExternalLink href={link.href}>
                                                <div className="py-4 pl-5 flex">
                                                    <div className="inline-block">{React.createElement(link.icon)}</div>
                                                    <div className="inline-block ml-3">{link.label}</div>
                                                </div>
                                                </ExternalLink>
                                            ) : (
                                                <Link to={link.href}>
                                                <div className="py-4 pl-5 flex">
                                                    <div className="inline-block">{React.createElement(link.icon)}</div>
                                                    <div className="inline-block ml-3">{link.label}</div>
                                                </div>
                                                </Link>
                                            )}
                                        </li>
                                        ))}
                                    </ul>

                                    {/* Autres de navigation */}
                                    <ul className="mb-5">
                                        {otherNavigationLinks.map((link) => (
                                        <li key={link.path} className={location.pathname === link.path ? linkClasses.current : linkClasses.default}>
                                            {link.external ? (
                                                <ExternalLink href={link.href}>
                                                <div className="py-4 pl-5 flex">
                                                    <div className="inline-block">{React.createElement(link.icon)}</div>
                                                    <div className="inline-block ml-3">{link.label}</div>
                                                </div>
                                                </ExternalLink>
                                            ) : (
                                                <Link to={link.href} onClick={link.onclick}>
                                                <div className="py-4 pl-5 flex">
                                                    <div className="inline-block">{React.createElement(link.icon)}</div>
                                                    <div className="inline-block ml-3">{link.label}</div>
                                                </div>
                                                </Link>
                                            )}
                                        </li>
                                        ))}
                                    </ul>
                                </ul>
                        </nav>
                    </div>

                    { /* Pour écran moyen */ }
                    <div className="hidden sm:flex lg:hidden flex-none w-[5rem] relative z-20 border-r border-slate-300">
                        <nav className="left-0 pl-2 fixed">
                            { /* NAVIGATION  */ }
                                <ul className="flex  h-screen flex-col w-[4.02rem]">
                                    {/* Image / Logo */}
                                    <ul>
                                        <li className="text-gray-500 hover:text-gray-950 mt-9 pl-5">
                                            <Link to="/">
                                                <Instamini className="w-[4rem] translate-x-[-1.2rem]"/>
                                            </Link>
                                        </li>
                                    </ul>

                                    {/* Liens de navigation */}
                                    <ul className="grow mt-10 gap-3">
                                        {navigationLinks.map((link) => (
                                        <li key={link.path} className={location.pathname === link.path ? linkClasses.current : linkClasses.default}>
                                            {link.external ? (
                                                <ExternalLink href={link.href}>
                                                <div className="py-4 pl-5 flex">
                                                    <div className="inline-block">{React.createElement(link.icon)}</div>
                                                </div>
                                                </ExternalLink>
                                            ) : (
                                                <Link to={link.href}>
                                                <div className="py-4 pl-5 flex">
                                                    <div className="inline-block">{React.createElement(link.icon)}</div>
                                                </div>
                                                </Link>
                                            )}
                                        </li>
                                        ))}
                                    </ul>

                                    {/* Autres de navigation */}
                                    <ul className="mb-5">
                                        {otherNavigationLinks.map((link) => (
                                        <li key={link.path} className={location.pathname === link.path ? linkClasses.current : linkClasses.default}>
                                            {link.external ? (
                                                <ExternalLink href={link.href}>
                                                <div className="py-4 pl-5 flex">
                                                    <div className="inline-block">{React.createElement(link.icon)}</div>
                                                </div>
                                                </ExternalLink>
                                            ) : (
                                                <Link to={link.href}>
                                                <div className="py-4 pl-5 flex">
                                                    <div className="inline-block">{React.createElement(link.icon)}</div>
                                                </div>
                                                </Link>
                                            )}
                                        </li>
                                        ))}
                                    </ul>
                                </ul>
                        </nav>
                    </div>

                    { /* Pour petit écran (mobile) */ }
                    <div className="flex sm:hidden lg:hidden flex-none relative z-20">
                        <nav className="flex justify-center bottom-0 fixed w-full bg-white border-t border-slate-300">
                            { /* NAVIGATION  */ }
                                {/* Liens de navigation pour mobile */}
                                <ul className="flex flex-row my-2 justify-between w-full px-7">
                                    {mobileNavigationLinks.map((link) => (
                                    <li key={link.path} className={location.pathname === link.path ? linkClasses.current : linkClasses.default}>
                                        {link.external ? (
                                                <ExternalLink href={link.href}>
                                                <div className="py-3 px-3 flex">
                                                    <div className="inline-block">{React.createElement(link.icon)}</div> 
                                                </div>
                                                </ExternalLink>
                                            ) : (
                                                <Link to={link.href}>
                                                <div className="py-3 px-3 flex">
                                                    <div className="inline-block">{React.createElement(link.icon)}</div> 
                                                </div>
                                                </Link>
                                            )}
                                    </li>
                                    ))}
                                </ul>
                        </nav>
                    </div>

                </header>


                { /* Le reste du site : */ }
                <div className="grow">
                    <main className='min-h-[100vh] w-full grow'>
                        <Outlet />
                    </main>


                    <footer className="flex flex-col py-11 z-10 bg-slate-50 border-t border-slate-300">
                        <p className="text-center">©2024. Site web fortement inspirée d'Instagram. Tout droits réservés.</p>
                    </footer>
                </div>


                {/* Modal */}
                {showModalPlus && (
                    <CSSTransition
                    in={showModalPlus}
                    timeout={300}
                    classNames="modal-transition"
                    unmountOnExit
                    >
                    <div className="modalplus fixed justify-center items-center align-center flex w-full min-h-screen bg-gray-600 bg-opacity-50 overflow-y-auto z-50">
                        <div className="relative px-5 py-16 border w-96 h-fit shadow-lg rounded-md bg-white">
                            <div className="mt-3 text-center flex flex-col gap-3">

                                <p className="text-xl font-semibold mb-5">Voir plus sur ce site :</p>


                                <button className="w-7/12 mx-auto animated-button bg-white bg-slate-200 text-black">
                                <span>API Commentaires</span>
                                <span></span>
                                </button>

                                <button className="w-7/12 mx-auto animated-button bg-white bg-slate-200 text-black">
                                <span>API Images</span>
                                <span></span>
                                </button>

                                <button className="w-7/12 mx-auto animated-button bg-white bg-slate-200 text-black">
                                <span>API OAuth2</span>
                                <span></span>
                                </button>

                            </div>
                            <div className="mt-8 flex justify-center">
                                <button
                                onClick={handleCloseModal}
                                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-3 py-2 
                                bg-sky-600 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                                focus:ring-sky-500"
                                >
                                Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                    </CSSTransition>
                )}
            </div>

        </>
    )
};

export default Layout;