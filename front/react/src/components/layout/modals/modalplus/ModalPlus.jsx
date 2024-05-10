import React, { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const ModalPlus = ({ showModalPlus, setShowModalPlus, closeModalPlus }) => {
    {/* Dialog Modal - Plus */}
    return (
        <div>
            <Dialog open={showModalPlus} onOpenChange={setShowModalPlus}>
                <DialogContent className="block mx-auto xl:w-4/12 md:w-8/12 w-full">
                    <div className="transition-transform duration-500 hover:scale-[1.04] scale-100 relative px-5 py-16 border w-full h-fit shadow-lg rounded-md bg-white mx-auto">
                        <div className="mt-3 text-center flex flex-col gap-3">

                            <p className="text-xl font-semibold mb-5">Voir plus des autres API :</p>

                            <a href="http://localhost:3000" target="_blank" className="w-8/12 mx-auto animated-button bg-slate-200 text-black">
                                <span>API Commentaires</span>
                                <span></span>
                            </a>

                            <a href="http://localhost:5000" target="_blank" className="w-8/12 mx-auto animated-button bg-slate-200 text-black">
                                <span>API Images</span>
                                <span></span>
                            </a>

                            <a href="http://localhost:8080" target="_blank" className="w-8/12 mx-auto animated-button bg-slate-200 text-black">
                                <span>API OAuth2</span>
                                <span></span>
                            </a>

                        </div>
                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={() => closeModalPlus()}
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