import React, { useState, useEffect } from "react";
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
import Logout from "@assets/start/svg/Logout.svg?react"

// external links
import ExternalLink from "./ExternalLink/ExternalLink";

// modals
import ModalPlus from "./modals/modalplus/ModalPlus";
import ModalMessage from "./modals/modalmsg/ModalMessage";

// Session js
import { getUserInfo } from './Sessions';

import "./Layout.css";


const Layout = () => {
    const location = useLocation();
    const linkClasses = {
        default: 'text-gray-500 hover:text-gray-950 hover:bg-gray-100 rounded-md',
        current: 'text-gray-950 bg-gray-100 rounded-md',
    };

    const [showModalPlus, setShowModalPlus] = useState(false);
    const handleOpenPlus = () => {
        setShowModalPlus(!showModalPlus);
    };
    const [showModalMsg, setShowModalMsg] = useState(false);
    const handleOpenMsg = () => {
        setShowModalMsg(!showModalMsg);
    };

    const navigationLinks = [
        { path: "/", label: "Accueil", icon: Accueil, href: "/", external: false, onclick: null},
        { path: "/search", label: "Recherche", icon: Recherche, href: "/search", external: false, onclick: null},
        { path: "/discovery", label: "Découvrir", icon: Decouvrir, href: "/", external: false, onclick: null },
        { path: "/reels", label: "Reels", icon: Reel, href: "https://youtu.be/dQw4w9WgXcQ?si=47-VX_Ot32PPuIoZ", external: true, onclick: null},
        { path: "/msg", label: "Messages", icon: Messages, href: "#", external: false, onclick: handleOpenMsg },
        { path: "/notif", label: "Notifications", icon: Notifications, href: "#", external: false, onclick: handleOpenPlus },
        { path: "/post", label: "Créer", icon: Creer, href: "/post", external: false, onclick: null },
    ];
    const otherNavigationLinks = [
        { path: "/threads", label: "Threads", icon: Threads, href: "https://about.instagram.com/fr-fr/threads", external: true, onclick: null },
        { path: "/plus", label: "Plus", icon: Plus, href: "#plus", external: false, onclick: handleOpenPlus },
    ];

    const mobileNavigationLinks = [
        { path: "/", label: "Accueil", icon: Accueil, href: "/", external: false, onclick: null },
        { path: "/reels", label: "Reels", icon: Reel, href: "https://youtu.be/dQw4w9WgXcQ?si=47-VX_Ot32PPuIoZ", external: true, onclick: null },
        { path: "/msg", label: "Messages", icon: Messages, href: "/", external: false, onclick: handleOpenMsg },
        { path: "/post", label: "Créer", icon: Creer, href: "/post", external: false, onclick: null},
    ];

    // Get user data
    const [userData, setUserData] = useState(null); // store user data
    useEffect(() => {
        const accessToken = new URLSearchParams(window.location.search).get('token');
        if (accessToken) {
            getUserInfo(accessToken).then((userData) => {
                setUserData(userData);
                // store in local storage :
                localStorage.setItem('items', JSON.stringify(userData));
            });
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('items');
        setUserData(null);
    };

    return (
        <>
            <div className="flex flex-row relative z-20">

                <header className="border-r border-gray-200">

                    { /* Pour écran large */}
                    <div className="hidden sm:hidden lg:flex flex-none w-[15.4rem] relative z-20 border-r border-slate-300">
                        <nav className="left-0 pl-2 fixed">
                            { /* NAVIGATION  */}
                            <ul className="flex  h-screen flex-col w-[14rem]">
                                {/* Image / Logo */}
                                <li>
                                    <ul>
                                        <li className="text-gray-500 hover:text-gray-950 mt-9 pl-5">
                                            <Link to="/"><img src={Logoinsta} alt="logoinsta" className="w-[8rem] translate-x-[-1rem]" /></Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* Liens de navigation */}
                                <li className="grow mt-7 gap-3">
                                    <ul>
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
                                                    <Link to={link.href} onClick={link.onclick}>
                                                        <div className="py-4 pl-5 flex">
                                                            <div className="inline-block">{React.createElement(link.icon)}</div>
                                                            <div className="inline-block ml-3">{link.label}</div>
                                                        </div>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}

                                        { /* Si l'utilisateur est connecté, afficher le lien de profil */ }
                                        {userData && (
                                            <>
                                            <li className={linkClasses.default}>
                                                <Link to="/userpage">
                                                    <div className="py-4 pl-5 flex">
                                                        <div className="inline-block">{React.createElement(Login)}</div>
                                                        <div className="inline-block ml-3">Profil</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className={linkClasses.default}>
                                                <Link to="/" onClick={logout}>
                                                    <div className="py-4 pl-5 flex">
                                                        <div className="inline-block"><Logout /></div>
                                                        <div className="inline-block ml-3">Se déconnecter</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            </>
                                        )} 
                                        { /* Si l'utilisateur n'est pas connecté, afficher le bouton Login */ }
                                        {!userData && (
                                            <li className={linkClasses.default}>
                                                <Link to="/login">
                                                    <div className="py-4 pl-5 flex">
                                                        <div className="inline-block">{React.createElement(Login)}</div>
                                                        <div className="inline-block ml-3">Se connecter</div>
                                                    </div>
                                                </Link>
                                            </li>
                                        )} 
                                    </ul>
                                </li>

                                {/* Autres de navigation */}
                                <li className="mb-5">
                                    <ul>
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
                                </li>
                            </ul>
                        </nav>
                    </div>

                    { /* Pour écran moyen */}
                    <div className="hidden sm:flex lg:hidden flex-none w-[5rem] relative z-20 border-r border-slate-300">
                        <nav className="left-0 pl-2 fixed">
                            { /* NAVIGATION  */}
                            <ul className="flex  h-screen flex-col w-[4.02rem]">
                                {/* Image / Logo */}
                                <li>
                                    <ul>
                                        <li className="text-gray-500 hover:text-gray-950 mt-9 pl-5">
                                            <Link to="/">
                                                <Instamini className="w-[4rem] translate-x-[-1.2rem]" />
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* Liens de navigation */}
                                <li className="grow mt-10 gap-3">
                                    <ul>
                                        {navigationLinks.map((link) => (
                                            <li key={link.path} className={location.pathname === link.path ? linkClasses.current : linkClasses.default}>
                                                {link.external ? (
                                                    <ExternalLink href={link.href}>
                                                        <div className="py-4 pl-5 flex">
                                                            <div className="inline-block">{React.createElement(link.icon)}</div>
                                                        </div>
                                                    </ExternalLink>
                                                ) : (
                                                    <Link to={link.href} onClick={link.onclick}>
                                                        <div className="py-4 pl-5 flex">
                                                            <div className="inline-block">{React.createElement(link.icon)}</div>
                                                        </div>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}

{ /* Si l'utilisateur est connecté, afficher le lien de profil */ }
                                        {userData && (
                                            <>
                                            <li className={linkClasses.default}>
                                                <Link to="/userpage">
                                                    <div className="py-4 pl-5 flex">
                                                        <div className="inline-block">{React.createElement(Login)}</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className={linkClasses.default}>
                                                <Link to="/" onClick={logout}>
                                                    <div className="py-4 pl-5 flex">
                                                        <div className="inline-block"><Logout /></div>
                                                    </div>
                                                </Link>
                                            </li>
                                            </>
                                        )} 
                                        { /* Si l'utilisateur n'est pas connecté, afficher le bouton Login */ }
                                        {!userData && (
                                            <li className={linkClasses.default}>
                                                <Link to="/login">
                                                    <div className="py-4 pl-5 flex">
                                                        <div className="inline-block">{React.createElement(Login)}</div>
                                                    </div>
                                                </Link>
                                            </li>
                                        )} 
                                    </ul>
                                </li>

                                {/* Autres de navigation */}
                                <li className="mb-5">
                                    <ul>
                                        {otherNavigationLinks.map((link) => (
                                            <li key={link.path} className={location.pathname === link.path ? linkClasses.current : linkClasses.default}>
                                                {link.external ? (
                                                    <ExternalLink href={link.href}>
                                                        <div className="py-4 pl-5 flex">
                                                            <div className="inline-block">{React.createElement(link.icon)}</div>
                                                        </div>
                                                    </ExternalLink>
                                                ) : (
                                                    <Link to={link.href} onClick={link.onclick}>
                                                        <div className="py-4 pl-5 flex">
                                                            <div className="inline-block">{React.createElement(link.icon)}</div>
                                                        </div>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    { /* Pour petit écran (mobile) */}
                    <div className="flex sm:hidden lg:hidden flex-none relative z-20">
                        <nav className="flex justify-center bottom-0 fixed w-full bg-white border-t border-slate-300">
                            { /* NAVIGATION  */}
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
                                            <Link to={link.href} onClick={link.onclick}>
                                                <div className="py-3 px-3 flex">
                                                    <div className="inline-block">{React.createElement(link.icon)}</div>
                                                </div>
                                            </Link>
                                        )}
                                    </li>
                                ))}

{ /* Si l'utilisateur est connecté, afficher le lien de profil */ }
                                {userData && (
                                    <>
                                    <li className={linkClasses.default}>
                                        <Link to="/userpage">
                                            <div className="py-3 px-3 flex">
                                                <div className="inline-block">{React.createElement(Login)}</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className={linkClasses.default}>
                                        <Link to="/" onClick={logout}>
                                            <div className="py-3 px-3 flex">
                                                <div className="inline-block"><Logout /></div>
                                            </div>
                                        </Link>
                                    </li>
                                    </>
                                )} 
                                { /* Si l'utilisateur n'est pas connecté, afficher le bouton Login */ }
                                {!userData && (
                                    <li className={linkClasses.default}>
                                        <Link to="/login">
                                            <div className="py-3 px-3 flex">
                                                <div className="inline-block">{React.createElement(Login)}</div>
                                            </div>
                                        </Link>
                                    </li>
                                )} 
                            </ul>
                        </nav>
                    </div>

                </header>


                { /* Le reste du site : */}
                <div className="grow">
                    <main className='min-h-[100vh] w-full grow'>
                    <div>
                {userData && (
                    <div>
                    <h1>Welcome, {userData.name}!</h1>
                    <p>Your GitHub username is {userData.login}.</p>
                    </div>
                )}
                </div>
                        <Outlet />
                    </main>


                    <footer className="flex flex-col py-11 z-10 bg-slate-50 border-t border-slate-300">
                        <p className="text-center">©2024. Site web fortement inspirée d'Instagram. Tout droits réservés.</p>
                    </footer>
                </div>

                {/* Modals */}
                <ModalMessage showModalPlus={showModalMsg} setShowModalPlus={setShowModalMsg} closeModalPlus={handleOpenMsg}/>
                <ModalPlus showModalPlus={showModalPlus} setShowModalPlus={setShowModalPlus} closeModalPlus={handleOpenPlus}/>
            </div>

        </>
    )
};

export default Layout;