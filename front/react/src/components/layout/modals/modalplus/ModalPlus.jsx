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
    {/* Dialog Modal - Plus */}
    return (
        <div>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="block mx-auto xl:w-4/12 md:w-8/12 w-full">
                    <div className="transition-transform duration-500 hover:scale-[1.04] scale-100 relative px-5 py-16 border w-full h-fit shadow-lg rounded-md bg-white mx-auto">
                        <div className="mt-3 text-center flex flex-col gap-10 items-center justify-center align-center">

                            <p className="text-xl font-semibold underline">Voir plus des autres API :</p>

                            <div className="relative select-none z-0">
                            <Tooltip content="Javascript : Express.js (Damien Jamet)" width="w-[20vh]">
                            <a href="http://localhost:3000/comments/get-all" target="_blank" className="mx-auto animated-button bg-slate-200 text-black mb-10">
                                <span>API Commentaires</span>
                                <span></span>
                            </a>
                            </Tooltip>
                            </div>

                            <div className="relative select-none z-30">
                                <Tooltip content="Java : Springboot (Luca Beroule + Dan Moulinie)" width="w-[35vh]">
                                <a href="http://localhost:8080/github/getAllUsers" target="_blank" className="mx-auto animated-button bg-slate-200 text-black">
                                    <span>API OAuth2</span>
                                    <span></span>
                                </a>
                                </Tooltip>
                            </div>

                            <div className="relative select-none z-40">
                            <Tooltip content="Python : Flask (Nathan Mir + Kearan Pechoux)" width="w-[30vh]">
                            <a href="http://localhost:5000" target="_blank" className="mx-auto animated-button bg-slate-200 text-black">
                                <span>API Images</span>
                                <span></span>
                            </a>
                            </Tooltip>
                            </div>

                            <div className="relative select-none z-40">
                            <Tooltip content="Javascript : React (Kearan Pechoux)" width="w-[25vh]">
                            <a href="/" target="_blank" className="mx-auto animated-button bg-slate-200 text-black">
                                <span>Front</span>
                                <span></span>
                            </a>
                            </Tooltip>
                            </div>

                            <div className="relative select-none z-40">
                            <Tooltip content="Docker compose & Dockerfile (Dan Moulinie)" width="w-[24vh]">
                            <a href="/" target="_blank" className="mx-auto animated-button bg-slate-200 text-black">
                                <span>Docker Compose</span>
                                <span></span>
                            </a>
                            </Tooltip>
                            </div>

                        </div>
                        <div className="mt-10 flex justify-center">
                            <button
                                onClick={() => closeModal()}
                                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-3 py-2 
                            bg-sky-600 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                            focus:ring-sky-500"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ModalPlus;