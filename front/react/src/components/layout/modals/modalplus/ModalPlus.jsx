import React, { useState } from "react";
import Tooltip from '@/components/ui/tooltip/tooltip';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const ModalPlus = ({ showModal, setShowModal, closeModal }) => {
    {/* Dialog Modal - Plus */ }
    return (
        <div>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="block mx-auto">
                    <div className="transition-transform duration-500 hover:scale-[1.04] scale-100 relative border h-fit lg:w-[35vw] md:w-[50vw] w-[70vw] mx-auto shadow-lg rounded-md bg-white">
                        <div className="p-10 w-7/12 w-full flex flex-col items-center">
                            <h2 className="text-2xl font-bold mb-5 underline">Voir plus des autres API :</h2>

                            <div className="grid grid-rows gap-4 mb-4">
                                <div className="flex flex-col items-start">
                                    <a href="/" target="_blank" className="inline-block px-4 py-2 text-sm font-medium text-white bg-slate-400 hover:bg-sky-600 rounded-md">
                                        Front-end + Responsive
                                    </a>
                                    <p className="text-sm text-gray-600">Javascript : React (Kearan Pechoux)</p>
                                    <p className="text-sm text-gray-600">CSS Framework : Tailwindcss + shadcn/ui</p>
                                    <p className="text-sm text-gray-600">HTTP Librairie : Axios</p>
                                    <p className="text-sm text-gray-600">Contrôle de session : React Context API</p>
                                    <p className="text-sm text-gray-600">Port : 5173</p>
                                </div>

                                <div className="flex flex-col items-start">
                                    <a href="http://localhost:3000/comments/get-all" target="_blank" className="inline-block px-4 py-2 text-sm font-medium text-white bg-slate-400 hover:bg-yellow-500 rounded-md">
                                        API Commentaires
                                    </a>
                                    <p className="text-sm text-gray-600">Javascript : Express.js (Damien Jamet)</p>
                                    <p className="text-sm text-gray-600">Base de donnée utilisée : MongoDB</p>
                                    <p className="text-sm text-gray-600">Port : 3000</p>
                                </div>

                                <div className="flex flex-col items-start">
                                    <a href="http://localhost:8080/github/getAllUsers" target="_blank" className="inline-block px-4 py-2 text-sm font-medium text-white bg-slate-400 hover:bg-purple-500 rounded-md">
                                        API OAuth2
                                    </a>
                                    <p className="text-sm text-gray-600">Java : Springboot (Luca Beroule + Dan Moulinie)</p>
                                    <p className="text-sm text-gray-600">Base de donnée utilisée : MongoDB</p>
                                    <p className="text-sm text-gray-600">Port : 8080</p>
                                </div>

                                <div className="flex flex-col items-start">
                                    <a href="http://localhost:5000" target="_blank" className="inline-block px-4 py-2 text-sm font-medium text-white bg-slate-400 hover:bg-green-600 rounded-md">
                                        API Images
                                    </a>
                                    <p className="text-sm text-gray-600">Python : Flask (Nathan Mir + Kearan Pechoux)</p>
                                    <p className="text-sm text-gray-600">Base de donnée utilisée : JSON</p>
                                    <p className="text-sm text-gray-600">Port : 5000</p>
                                </div>


                                <div className="flex flex-col items-start">
                                    <a href="/" target="_blank" className="inline-block px-4 py-2 text-sm font-medium text-white bg-slate-400 hover:bg-black rounded-md">
                                        Docker Compose
                                    </a>
                                    <p className="text-sm text-gray-600">Docker compose & Dockerfiles (Dan Moulinie)</p>
                                    <p className="text-sm text-gray-600">Administation sur Git</p>
                                    <p className="text-sm text-gray-600">Port MongoDB java : 27018</p>
                                    <p className="text-sm text-gray-600">Port MongoDB javascript : 27017</p>
                                </div>
                            <div className="mb-4">
                                <button
                                    onClick={() => closeModal()}
                                    className="rounded-md border w-20 p-1 border-transparent shadow-sm bg-slate-300 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                                >
                                    Fermer
                                </button>
                            </div>
                            </div>

                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ModalPlus;